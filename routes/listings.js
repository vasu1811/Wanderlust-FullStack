const express = require('express');
const router = express.Router();
const wrapAsycn = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const wrapAsync = require('../utils/wrapAsync.js');

const listingController = require("../controllers/listings.js")
const multer  = require('multer');
const {storage,cloudinary}= require('../cloudConfig.js')

const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'), wrapAsycn(listingController.createNewListing));

// new route
router.get("/new", isLoggedIn, listingController.renderNewForm)

router.route("/:id")
    .get(wrapAsycn(listingController.showListing))
    .put( isLoggedIn, isOwner,upload.single('listing[image]'), validateListing, wrapAsycn(listingController.editListing))
    .delete(isLoggedIn, isOwner, listingController.deleteListing)

    // edit route
router.get("/:id/edit", isLoggedIn, isOwner, listingController.editFormListing)


module.exports = router;
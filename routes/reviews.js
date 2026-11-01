const express = require('express');
const router = express.Router({ mergeParams: true }); 
const wrapAsycn = require("../utils/wrapAsync.js");

const {validateReview, isLoggedIn, isReviewAuthor}= require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// create review route
router.post("/",isLoggedIn, validateReview, wrapAsycn(reviewController.createReview));

// detele review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsycn(reviewController.deleteReview))

module.exports = router;

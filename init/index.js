const mongoose = require("mongoose");
const initData= require('./data.js');
const Listing= require('../models/listing.js');

const userIds = [
    '681a19ac117d211b7da2402c',
    '681a0bdade1c07e7f655a41f',
    '681a0b1a8506abf3a43c8c4a',
    '6818f2902e1a21d2e68f35c0'
];
main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB= async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner: userIds[Math.floor(Math.random() * userIds.length)]}))
    await Listing.insertMany(initData.data);
    console.log("Database initialized");
}

initDB();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to DB");
    } catch (err) {
        console.error("DB connection failed:", err);
    }
}
main();

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
         owner: "685d8462035b0aa166fd1bf2",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
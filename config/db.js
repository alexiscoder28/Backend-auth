require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
})
.then(() => {
    console.log("✅ Database connected successfully");
})
.catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});

module.exports = mongoose;
 
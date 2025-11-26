const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/backend")
  .then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

module.exports = mongoose;
 
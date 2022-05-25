const mongoose = require("mongoose");
require('dotenv').config();
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@incident.yn9dd.mongodb.net/incident?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    );
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("MongoDb connection failed");
  }
}

module.exports = mongoose;

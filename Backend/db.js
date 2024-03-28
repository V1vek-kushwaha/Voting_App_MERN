const mongoose = require("mongoose");

//Define the mongoBD connection URL
// const mongoURL = process.env.DB_URL; //replace 'vivek' with your database name
const mongoURL = process.env.ODB_URL;

//set up connection MongoDB connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

//get default connnection
// mongoose maintain a default connection object representing the MongoDB connection.

const db = mongoose.connection;

// Define event listeners for database connection
db.on("connected", () => {
  console.log("connected to mongoDB Server");
});
db.on("error", () => {
  console.log("connected to mongoDB Server");
});
db.on("disconnected", () => {
  console.log("connected to mongoDB Server");
});

//export the data connection
module.exports = db;

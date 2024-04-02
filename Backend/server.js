const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();

const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin:"*",
  methods:["GET","POST","PUT","DELETE"]
}))
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

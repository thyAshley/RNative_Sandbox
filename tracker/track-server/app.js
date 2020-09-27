const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");

const app = express();
app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error(`ERROR CONNECTING TO MONGO ${err}`);
});

app.get("/", (req, res) => {
  res.send(`Your Email is ${req.user.email}`);
});

app.listen("3000", () => {
  console.log("app running on port 3000");
});

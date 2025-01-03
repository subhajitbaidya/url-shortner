const express = require("express");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const path = require("path");
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongodb connected!")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

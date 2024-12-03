const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");


const app = express();
const PORT = 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongodb connected!")
);

 
// Middleware
app.use(express.json());


app.use('/', urlRoute);



app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

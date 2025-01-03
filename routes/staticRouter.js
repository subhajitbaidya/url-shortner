const express = require("express")
const {handleUserInterface} = require("../controllers/staticController")

const router = express.Router();

router.get("/home", handleUserInterface);

module.exports = router;


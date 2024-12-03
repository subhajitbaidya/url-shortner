const express = require("express");
const {
  handleGenerateNewShortURL,
  handleRedirectURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/url", handleGenerateNewShortURL);

router.get("/:shortId", handleRedirectURL);

router.get("/url/analytics/:shortId", handleGetAnalytics);

module.exports = router;

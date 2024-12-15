const express = require("express");
const {
  handleGenerateNewShortURL,
  handleRedirectURL,
  handleGetAnalytics,
} = require("../controllers/url");
const { testServerSideRenderedOutput } = require("../views/test");

const router = express.Router();

router.post("/api/url", handleGenerateNewShortURL);

router.get("/r/:shortId", handleRedirectURL);

router.get("/api/url/analytics/:shortId", handleGetAnalytics);

router.get("/test", testServerSideRenderedOutput);


module.exports = router;

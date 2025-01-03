const URL = require("../models/url");


async function  handleUserInterface(req, res) {
    const allUrls = await URL.find({});
    return res.render("home", {
      urls: allUrls,
    });
  }

module.exports = {
    handleUserInterface,
}
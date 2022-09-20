const express = require("express");
const router = express.Router();

const fs = require("fs");

router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/about", (req, res) => {
  res.send("About Page");
});

router.get("/cv", (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  res.render("cv", { name: "Md.Sakibul Islam", educations: edus });
});

module.exports = router;

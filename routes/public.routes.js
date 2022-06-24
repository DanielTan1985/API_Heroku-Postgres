const express = require("express");
const router = express.Router();
const { Location, Review } = require("../models");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;


router.get("/public", (req, res) => {
  return res.send("You have called a public route");
});

module.exports = router;

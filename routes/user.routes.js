const express = require("express");
const router = express.Router();


router.get("/user", (req, res) => {
  return res.send("You have called a user route");
});



module.exports = router;

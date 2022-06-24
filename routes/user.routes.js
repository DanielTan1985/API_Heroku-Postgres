const express = require("express");
const router = express.Router();


router.get("/user", (req, res) => {
  return res.send("You have called a user route");
});

router.get(
  "/user/location/:id",
  async (req, res) => {
    try {
      const results = await Location.findAll({
        where: { id: req.params.id }
      });
      console.table(JSON.parse(JSON.stringify(results)));
      return res.send(JSON.stringify(results));
    } catch (err) {
      console.log(err);
    }
  }
);


module.exports = router;

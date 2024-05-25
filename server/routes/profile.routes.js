const express = require("express");
const router = express.Router();

router.get("/color", (req, res, next) => {
  res.json("All good in profile");
});

module.exports = router;

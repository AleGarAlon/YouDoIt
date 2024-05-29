const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Table = require("../models/Table.model");

router.get("/myTables", async (req, res, next) => {
  const { userId } = req.query;
  console.log("the user ID is", userId);
  try {
    const theUser = await User.findById(userId).populate("tables");
    const tables = theUser.tables;
    console.log("the user", theUser);
    console.log("the tables", tables);
    res.status(200).json(tables);
  } catch (error) {
    console.error("Error fetching tables:", error);
    res.status(500).json({ message: "Error fetching tables", error });
  }
});

module.exports = router;

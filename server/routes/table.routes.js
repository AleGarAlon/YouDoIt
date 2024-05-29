const express = require("express");
const { route } = require("./profile.routes");
const router = express.Router();
const Table = require("../models/Table.model");
const User = require("../models/User.model");
const Task = require("../models/Task.model");

router.post("/newTable", async (req, res) => {
  const payload = req.body;
  console.log(payload);
  try {
    const newTable = await Table.create({
      name: payload.name,
      users: payload.user,
    });
    await User.findByIdAndUpdate(
      payload.user,
      { $push: { tables: newTable._id } },
      { new: true }
    );
    res.status(201).json({ message: "Table created" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const table = await Table.findById(id).populate("tasks");
    console.log("The TABLE TABLE TABLE IS", table);
    res.status(200).json({ table });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;

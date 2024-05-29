const express = require("express");
const router = express.Router();
const Table = require("../models/Table.model");
const User = require("../models/User.model");
const Task = require("../models/Task.model");

router.post("/:id", async (req, res) => {
  const { name, color } = req.body;
  const tableId = req.params.id;

  try {
    const table = await Table.findById(tableId);
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    const newTask = await Task.create({
      name,
      table: tableId,
      position: table.tasks.length,
      status: "pending",
      color: color || "white",
    });

    table.tasks.push(newTask._id);
    await table.save();

    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Error creating task", error });
  }
});

module.exports = router;

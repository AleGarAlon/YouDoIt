const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    color: {
      type: String,
      enum: [
        "white",
        "green",
        "blue",
        "pink",
        "red",
        "yellow",
        "purple",
        "orange",
        "gray",
      ],
      default: "white",
    },
    table: {
      type: Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  labelId: {
    type: mongoose.Schema.ObjectId,
    ref: "Label",
    required: true,
  },
  subTaskId: { type: [], default: [] },
});

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;

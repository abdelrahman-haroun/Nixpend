const mongoose = require("mongoose");

const SubTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: { type: Boolean, default: false },

  taskId: {
    type: mongoose.Schema.ObjectId,
    ref: "Task",
    required: true,
  },
});

const SubTaskModel = mongoose.model("SubTask", SubTaskSchema);

module.exports = SubTaskModel;

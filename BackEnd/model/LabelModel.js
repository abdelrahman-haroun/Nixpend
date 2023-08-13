const mongoose = require("mongoose");

const LabelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333",
  },
  taskId: {
    type: [],
    default: [],
  },
});
const LabelModel = mongoose.model("Label", LabelSchema);

module.exports = LabelModel;

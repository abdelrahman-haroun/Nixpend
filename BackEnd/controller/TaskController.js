const Task = require("../model/TaskMobel");
const Label = require("../model/LabelModel");

exports.createTask = async (req, res) => {
  try {
    const { title, desc, labelId } = req.body;
    if (!title || !desc || !labelId) {
      return res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }

    const newTask = await Task.create(req.body);
    const label = await Label.findById(labelId);
    label.taskId.push(newTask._id);
    await label.save();
    res.status(201).json({
      status: "success",
      data: newTask,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getAllTask = async (req, res) => {
  try {
    const allTask = await Task.find({});
    res.status(200).json({
      status: "success",
      data: allTask,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getAllTaskLabels = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.find({ labelId: id });
    res.status(200).json({
      status: "success",
      data: tasks,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.editTask = async (req, res) => {
  const { id } = req.params;

  try {
    const editedTask = await Task.findById(id);
    const labelId = editedTask.labelId;

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    const editLabel = await Label.findByIdAndUpdate(
      labelId,
      { $pull: { taskId: editedTask._id } },
      { new: true, runValidators: true }
    );

    const updatedLabel = await Label.findByIdAndUpdate(
      req.body.labelId,
      { $push: { taskId: editedTask._id } },
      { new: true, runValidators: true }
    );

    res.status(202).json({
      status: "success",
      data: updatedTask,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findById(req.params.id);
    const EditedLabel = await Label.findById(deleteTask.labelId);
    EditedLabel.taskId.pull(deleteTask._id);
    await EditedLabel.save();
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const oneTask = await Task.findById(id);
    res.status(200).json({
      status: "success",
      data: oneTask,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

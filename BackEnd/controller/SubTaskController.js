const SubTask = require("../model/SubTaskModel");
const Task = require("../model/TaskMobel");

exports.createSubTask = async (req, res) => {
  try {
    const newSubTasks = await SubTask.create(req.body);

    const task = await Task.findById(req.body[0].taskId);
    newSubTasks.map((el) => {
      task.subTaskId.push(el._id);
    });

    await task.save();

    res.status(201).json({
      status: "success",
      data: newSubTasks,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllSubTask = async (req, res) => {
  console.log(req.params);
  try {
    const allSubTask = await SubTask.find();
    res.status(200).json({
      status: "success",
      data: allSubTask,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.editSubTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSubTask = await SubTask.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(202).json({
      status: "success",
      data: updatedSubTask,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteSubTask = async (req, res) => {
  try {
    const deleteSubTask = await SubTask.findById(req.params.id);
    const EditedTask = await Task.findById(deleteSubTask.taskId);
    EditedTask.subTaskId.pull(deleteSubTask._id);
    await EditedTask.save();
    await SubTask.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneSubTask = async (req, res) => {
  try {
    const { id } = req.params;
    const oneSub = await SubTask.findById(id);
    res.status(200).json({
      status: "success",
      data: oneSub,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

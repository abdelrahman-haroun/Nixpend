const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getOneTask,
  editTask,
  deleteTask,
  createTask,
  getAllTaskLabels,
} = require("../controller/taskController");

router.route("/").get(getAllTask);

router.route("/:id").get(getAllTaskLabels).patch(editTask).delete(deleteTask);

router.route("/create").post(createTask);

module.exports = router;

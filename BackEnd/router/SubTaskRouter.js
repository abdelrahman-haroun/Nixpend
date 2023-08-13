const express = require("express");
const router = express.Router();
const {
  getAllSubTask,
  getOneSubTask,
  editSubTask,
  deleteSubTask,
  createSubTask,
} = require("../controller/subTaskController");

router.route("/").get(getAllSubTask);

router
  .route("/:id")
  .get(getOneSubTask)
  .patch(editSubTask)
  .delete(deleteSubTask);

router.route("/create").post(createSubTask);

module.exports = router;

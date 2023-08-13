const express = require("express");
const router = express.Router();
const { getAllLabel, createLabel } = require("../controller/LabelController");

router.route("/").get(getAllLabel);

router.route("/create").post(createLabel);

module.exports = router;

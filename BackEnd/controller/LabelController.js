const Label = require("../model/LabelModel");

exports.createLabel = async (req, res) => {
  try {
    const { title, color } = req.body;
    if (!title) {
      return res.status(401).json({
        status: "fail",
        message: "please fill the title",
      });
    }
    const newLabel = await Label.create(req.body);
    res.status(201).json({
      status: "success",
      data: newLabel,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllLabel = async (req, res) => {
  try {
    const allLabel = await Label.find({});
    res.status(200).json({
      status: "success",
      data: allLabel,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

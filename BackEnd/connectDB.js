const mongoose = require("mongoose");

exports.connect = async (uri) => {
  try {
    mongoose.connect(uri).then(console.log("DB Connect"));
  } catch (err) {
    console.log(err);
  }
};

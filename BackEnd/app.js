const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
//  middleware to get details for all req
app.use(morgan("dev"));
// middleware to access to req.body\
app.use(express.json());
// middleware to access api from same localhost
app.use(cors());

// Import your route modules
const taskRoutes = require("./router/TaskRouter");
const subTaskRoutes = require("./router/SubTaskRouter");
const labelRoutes = require("./router/LabelRouter");

// Use the route modules
app.use("/label", labelRoutes);
app.use("/tasks", taskRoutes);
app.use("/subtasks", subTaskRoutes);

module.exports = app;

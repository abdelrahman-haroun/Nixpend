const app = require("./app");
const dotenv = require("dotenv");
const { connect } = require("./connectDB");

dotenv.config();
const db = process.env.dataBase.replace("<password>", process.env.password);

const startServer = async () => {
  try {
    connect(db);
    app.listen(process.env.port, () => {
      console.log(`server listen in port ${process.env.port} `);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();

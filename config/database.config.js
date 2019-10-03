const MONGODB_URL = "mongodb://localhost:27017/todo_app";
const mongoose = require("mongoose");
const logger = require("./logger.cofig");

const connect = async () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      logger.info("Successfully connected to the database");
    })
    .catch(err => {
      logger.error("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

const disconnect = async done => {
  mongoose.disconnect(done);
};

module.exports = {
  connect,
  disconnect
};

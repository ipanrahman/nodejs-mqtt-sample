const mongoose = require("mongoose");
const logger = require("./logger.cofig");

const connect = async () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(process.env.DATABASE_URL, {
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

require("dotenv").config();

const app = require("./app");
const logger = require("@config/logger.cofig");

app.listen(process.env.APP_PORT, () => {
  logger.info(`Server is listening on port ${process.env.APP_PORT}`);
});

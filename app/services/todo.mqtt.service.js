const mqtt = require("mqtt");

const client = mqtt.connect("mqtt:localhost");
const logger = require("../../config/logger.cofig");

const TOPIC = "todos";

client.on("connect", () => {
  logger.info("mqtt connected");
  client.subscribe(TOPIC, { qos: 1 });
  client.publish(TOPIC, "Hello World!");
});

client.on("message", (topic, message) => {
  logger.info(`message ${message}`);
  client.end();
});

const mqtt = require("mqtt");

const client = mqtt.connect("mqtt:localhost");
const logger = require("../../config/logger.cofig");

// create
client.on("connect", () => {
  logger.info("Create todo");
  client.subscribe("todos.create", { qos: 1 });
  client.publish(
    "todos.create",
    JSON.stringify({
      title: "test",
      description: "test",
      status: "WIP"
    })
  );
});

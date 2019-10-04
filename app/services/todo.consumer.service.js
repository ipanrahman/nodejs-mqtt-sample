const mqtt = require("mqtt");

const client = mqtt.connect("mqtt:localhost");
const logger = require("../../config/logger.cofig");
const Todo = require("../models/todo.model");

const mongo = require("@config/database.config");
mongo.connect();

client.on("connect", () => {
  client.subscribe("todos.create", { qos: 1 });
});

client.on("message", (topic, message) => {
  if (topic === "todos.create") {
    logger.info(`message ${message}`);
    const data = JSON.parse(message);
    const todo = new Todo({
      title: data.title,
      description: data.description,
      status: data.status
    });
    todo.save().then(res => {
      logger.info("Create todo success.");
    });
  }
});

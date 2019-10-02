const express = require("express");
const router = express.Router();

const todoController = require("../app/controllers/todo.controller");
router.post("/todos", todoController.create);
router.get("/todos", todoController.findAll);
router.get("/todos/:id", todoController.findById);
router.put("/todos/:id", todoController.update);
router.delete("/todos/:id", todoController.delete);

module.exports = router;

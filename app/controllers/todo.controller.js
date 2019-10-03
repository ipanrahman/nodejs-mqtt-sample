const Todo = require("../models/todo.model");

module.exports = {
  findAll: (req, res) => {
    Todo.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Airline."
        });
      });
  },
  findById: (req, res) => {
    Todo.findById(req.params.id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Todo not found with id ${req.params.id}`
          });
        }
        res.send(data);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: `Todo not found with id ${req.params.id}`
          });
        }
        return res.status(500).send({
          message: `Error retrieving todo with id ${req.params.id}`
        });
      });
  },
  create: (req, res) => {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status
    });
    todo
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Todo."
        });
      });
  },
  update: (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status
    })
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: `Todo not found with id ${req.params.id}`
          });
        }
        return res.send(data);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: `Todo not found with id ${req.params.id}`
          });
        }
        return res.status(500).send({
          message: `Error updating todo with id ${req.params.id}`
        });
      });
  },
  delete: (req, res) => {
    Todo.findOneAndDelete(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: `todo not found with id ${req.params.id}`
          });
        }
        res.send({
          message: "Todo deleted successfully!"
        });
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: `Todo not found with id ${req.params.id}`
          });
        }
        return res.status(500).send({
          message: `Could not delete todo with id ${req.params.id}`
        });
      });
  }
};

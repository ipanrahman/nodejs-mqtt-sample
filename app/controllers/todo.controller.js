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
  create: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {}
};

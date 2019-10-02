const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  status: String
});

module.exports = mongoose.model("Todo", TodoSchema);

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "MQTT Sample"
  });
});

// Todo router
router.get("/todos", (req, res) => {
  res.render("todos/index");
});

module.exports = router;

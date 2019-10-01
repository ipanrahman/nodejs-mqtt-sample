const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const morgan = require("morgan");

const path = require("path");

const webRouter = require("../routes/web.router");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined", {
    skip: function(req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout
  })
);

//routers

app.use("/", webRouter);

app.use(bodyParser.json());

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.use(express.static("../public"));

module.exports = app;

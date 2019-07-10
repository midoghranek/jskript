"user strict";
const path = require("path");
const express = require("express");
const contactRouter = require("./routes/contact");
const bodyParser = require("body-parser");

// NOTE Server
const app = express();
//app.use(express.json());
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(contactRouter);

// NOTE Paths
const publicDirPath = path.join(__dirname, "../public");

// NOTE  access to front-end
app.use(express.static(publicDirPath));

module.exports = app;

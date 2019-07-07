"user strict";
const path = require("path");
const express = require("express");
const contactRouter = require("./routers/contact");

// NOTE Server
const app = express();
app.use(express.json());
app.use(contactRouter);

// NOTE Paths
const publicDirPath = path.join(__dirname, "../public");

// NOTE Handlebars and css
app.use(express.static(publicDirPath));

module.exports = app;

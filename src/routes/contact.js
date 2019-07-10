"use strict";
const express = require("express");
const replyMail = require("../emails/account");

const router = new express.Router();

router.post("/send", (req, res) => {
  try {
    // TODO Use user message
    replyMail(req.body.first_name, req.body.email);
    // TODO Show message sent confirmation or redirect the user
    res.send();
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = router;

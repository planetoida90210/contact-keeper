const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route    GET api/contacts
// @description   Get all users contacts
// @access    Private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route    POST api/contacts
// @description   Register a user
// @access    Private

router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route    PUT api/contats/:id
// @description   Update contact
// @access    Private

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route    DELETE api/contats/:id
// @description   Delete contact
// @access    Private

router.delete("/:id", (req, res) => {
  res.send("Deletet contact");
});

module.exports = router;

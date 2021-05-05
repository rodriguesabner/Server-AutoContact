const express = require("express");
const ContactController = require("./controller/ContactController");

const routes = express.Router();

routes.get("/api/contacts", ContactController.list);
routes.post("/api/contacts", ContactController.create);

module.exports = routes;
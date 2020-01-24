const Router = require("express").Router();

Router.get("/contact", (req, res) => res.render("pages.contact"));

module.exports = Router;

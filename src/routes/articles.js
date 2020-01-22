const Router = require("express").Router();
const { create } = require("../controllers/articleController");

// Router.get("/", articleList)
Router.get("/create", create);
// Router.get("/:id", getSingleArtile)
// Router.post("/", saveArticle)

module.exports = Router;

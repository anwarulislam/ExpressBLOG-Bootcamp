const Router = require("express").Router();
const {
  index,
  create,
  getArticle,
  setArticle,
  updateArticle
} = require("../controllers/articleController");

Router.get("/", index);
Router.get("/create", create);
Router.post("/", setArticle);
Router.get("/:id", getArticle);
Router.get("/:id/edit", create);
Router.post("/:id", updateArticle);

module.exports = Router;

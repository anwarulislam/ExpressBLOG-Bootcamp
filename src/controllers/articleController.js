const uuid = require("uuid");
const db = require("../config/db");

const index = (req, res) => {
  let articles = db.get("articles");
  res.render("article.index", { articles: articles.toJSON() });
};

const create = (req, res) => {
  if (req.params.id) {
    let article = db.get("articles").find({ id: req.params.id });
    res.render("article.create", { article: article.toJSON() });
  } else {
    res.render("article.create");
  }
};

const getArticle = (req, res) => {
  let article = db.get("articles").find({ id: req.params.id });
  res.render("article.view", { article: article.toJSON() });
};

const setArticle = (req, res) => {
  let { title, body } = req.body;

  console.log(Date.now());

  db.get("articles")
    .push({
      id: uuid.v4(),
      title,
      body,
      createdAt: new Date().toLocaleString()
    })
    .write();

  res.redirect("/");
};

const updateArticle = (req, res) => {
  console.log("hihihi");
  let { title, body } = req.body;
  db.get("articles")
    .find({ id: req.params.id })
    .assign({ title, body })
    .write();

  res.redirect("/articles/" + req.params.id + "/");
};
module.exports = { index, create, getArticle, setArticle, updateArticle };

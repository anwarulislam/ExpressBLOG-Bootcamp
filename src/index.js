const express = require("express");
const app = express();
const { engine } = require("express-edge");

const database = require("./config/db");

app.use(engine);
app.set("views", `${__dirname}/views`);
app.use(express.static("public"));
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3000, () => {
  console.log("Your server is running");
});

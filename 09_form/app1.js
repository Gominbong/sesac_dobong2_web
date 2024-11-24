const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views/practice");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/practice1", function (req, res) {
  res.render("practice1");
});

app.get("/practice1/result", function (req, res) {
  res.render("practice_result", {
    userInfo: req.query,
    method: req.method,
  });
});

app.get("/practice2", function (req, res) {
  res.render("practice2");
});

app.post("/practice2/result", function (req, res) {
  res.render("practice_result", {
    userInfo: req.body,
    method: req.method,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

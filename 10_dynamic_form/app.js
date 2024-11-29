const express = require("express");
const app = express();
const PORT = 8080;

//미들웨어 설정
//1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

//2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* API */
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send("응답!");
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch 요청
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/api", (req, res) => {
  res.render("api");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

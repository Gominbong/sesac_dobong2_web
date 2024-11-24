const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs views 미들웨어 설정
app.set("view engine", "ejs"); // 템플릿 엔진 설정
app.set("views", "./views"); // 뷰파일 폴더 경로 설정

// 정적 파일 관리
// app.use("/static", express.static(__dirname + "/public"));

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 요청 > 응답 */
app.get("/", function (req, res) {
  console.log("nodemon 실행!!!");
  res.render("index");
});

// form get요청
app.get("/getForm", function (req, res) {
  console.log(req.query);
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
});

// form post요청
app.post("/postForm", function (req, res) {
  console.log(req.body);
  res.render("result", {
    title: "POST",
    userInfo: req.body,
  });
});

//form validation post 요청
app.post("/js-form-check", function (req, res) {
  console.log(req.body);
  res.send("js 유효성 검사");
});

// 실습문제
// /practice1로 들어갔을때, practice1.jes를 화면에 보여줌

app.get("/practice1", function (req, res) {
  res.render("practice/practice1");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

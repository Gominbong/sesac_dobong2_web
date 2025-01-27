const express = require("express");
const db = require("./models");
const app = express();
const PORT = 8000;

// 미들웨어처리
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

// TODO: 라우팅 분리
const userRouter = require("./routes/user");
// 기본 주소: localhost:PORT/user <- 주의!!
app.use("/", userRouter);
// TODO: 404 에러 처리
app.use("/", (req, res) => {
  res.status(404).render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  // console.log(result);
  console.log("DB연결 성공!");
  // 포트열기
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

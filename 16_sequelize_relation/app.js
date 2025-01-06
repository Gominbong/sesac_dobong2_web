const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models");

// 미들웨어처리
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터 설정
const indexRouter = require("./routes");
app.use("/", indexRouter);
//stnc() 메서드를 사용하여 데이터베이스와 동기화
//force: false로 설정하여 기존에 테이블이 존재할 경우 삭제하지 않도록 설정

sequelize
  .sync({ force: false })
  .then((result) => {
    console.log("DB연결 성공!");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connection Err!");
    console.log(err);
  });

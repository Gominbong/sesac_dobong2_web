const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
const userRouter = require("./routes/user");
// 기본 주소: localhost:PORT/user <- 주의!!
app.use("/", userRouter);
// TODO: 404 에러 처리
app.use("/", (req, res) => {
  res.status(404).render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});

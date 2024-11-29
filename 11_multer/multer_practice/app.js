const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const upload = multer({
  dest: "uploads/", // 어디에 저장될지!
});

app.get("/", (req, res) => {
  res.render("index");
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); // 어디에 저장될지 경로 설정!
      //  uploads 라는 폴더가 미리 만들어져있어야 함
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름.확장자) >> 확장자만
      const extension = path.extname(file.originalname); // .png .webp ,...
      //   path.basename(파일이름.확장자, 확장자) >> 파일이름만 리턴 //26139_img

      done(
        null,
        (file.originalname =
          Buffer.from(file.originalname, "ascii").toString("utf8") +
          "-" +
          Date.now() +
          extension)
      );
    },
  }),

  limits: { fieldSize: 50 * 1024 * 1024 }, // 5MB
});

app.post("/reslut", uploadDetail.array("profileImages"), (req, res) => {
  res.send({ file: req.file, userInfo: req.body });
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.listen(PORT, () => {
  console.log("연결됨");
});

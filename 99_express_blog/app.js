const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;
const tempDB = [
  {
    contentID: 1,
    title: "제목1",
    content: "토요일",
    img: null,
  },
  {
    contentID: 2,
    title: "제목2222",
    content: "토요일",
    img: "/static/img/pooh1.png",
  },
  {
    contentID: 3,
    title: "제목3333",
    content: "토요일",
    img: null,
  },
  {
    contentID: 4,
    title: "백엔드가 많이 어렵니요?",
    content: "토요일",
    img: null,
  },
];

const tempUser = "Allie 짱";
app.set("/views", "./views");
app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// multer 의 dest 속성은 경로에 해당하는 폴더를 자동으로 만들어주지만
// 세부 설정이 어렵다.
// 대신 storage 설정을 사용할 것
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const filename = path.basename(file.originalname, ext) + Date.now() + ext;
      cb(null, filename);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

app.get("/", (request, response) => {
  //console.log(request);
  //   response.send({ id: "allie", pw: "1234" });
  response.render("index", {
    user: tempUser,
    contentData: tempDB,
  });
});

app.get("/content/:contentID", (req, res) => {
  // console.log(req.query);
  console.log(req.params.contentID);
  const { contentID } = req.params;
  const contentData = tempDB.filter((obj) => {
    return obj.contentID === Number(contentID);
  });
  const contentObj = contentData[0];
  console.log(contentObj);
  console.log(contentData);

  if (contentObj) {
    res.render("content", contentObj);
  } else {
    res.render("404");
  }
  res.send("응답완료");
});

app.get("/write", (req, res) => {
  res.render("writeContent");
});

app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  tempDB.push({
    contentID:
      tempDB.length === 0 ? 1 : tempDB[tempDB.length - 1].contentID + 1,
    content: req.body.content,
    img: req.file ? "/" + req.file.path : null,
    title: req.body.title,
  });
  console.log(tempDB);
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  const NumberId = Number(contentID);

  console.log("넘버아이디 = ", NumberId);
  //   const tempDB2 = tempDB.filter((data) => {
  //     return data.contentID !== NumberId;
  //   });
  //   tempDB = tempDB2;
  res.end();
});
app.listen(PORT, () => {
  console.log("연결완료");
});

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;
const SECRET = "RRAFQAv2KwkRJkc4"; // .env에 저장해서 사용하는 것이 좋음
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userInfo = {
  id: "cocoa",
  pw: "1234",
  name: "코코아",
  age: 18,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // 로그인 성공
      // jwt 발급
      const token = jwt.sign({ id }, SECRET);
      console.log("token = ", token);

      // 토큰을 클라이언트에 저장 (쿠키, 로컬스토리지, 세션스토리지)
      res.send({ result: true, token });
    } else {
      // 로그인 실패
      res.send({ message: "로그인정보가 올바르지 않습니다", result: false });
    }
  } catch (err) {
    console.log("post /login err", err);
    res.status(500).send({ message: "서버에러" });
  }
});

app.post("/token", (req, res) => {
  try {
    console.log(req.headers.authorization);
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      console.log("token = ", token);
      try {
        //토큰 검증 작업
        const auth = jwt.verify(token, SECRET);
        console.log("auth2.0 = ", auth);
        // {id : 'cocoa', iat: 1733894674}
        if (auth.id === userInfo.id) {
          res.send({ result: true, name: userInfo.name });
        }
      } catch (err) {
        console.log("post /login err", err);
        res
          .status(401)
          .send({ result: true, message: "인증된 회원이 아닙니다." });
      }
    } else {
      //인증 정보 없을 때
      res.redirect("/login");
    }
  } catch (err) {
    console.log("post /login err", err);
    res.status(500).send({ message: "서버에러" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

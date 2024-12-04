// TODO: 컨트롤러 코드
const model = require("../model/User");

exports.getUser = (req, res) => {
  res.render("index");
};

exports.getUserSignup = (req, res) => {
  res.render("signup");
};
exports.postUserSignup = (req, res) => {
  console.log("컨트롤러에서 req.body 정보 = ", req.body);
  model.CreateUser(req.body, (err) => {
    console.log("컨트롤러에서 err 정보 = ", err);
    if (err === null) {
      res.send({ signup: true });
    } else {
      if (err.code == "ER_DUP_ENTRY") {
        res.send({ signup: false, message: "중복된아이디입니다." });
      }
    }
  });
};

exports.getUserSignin = (req, res) => {
  res.render("signin");
};

exports.postUserSignin = (req, res) => {
  console.log("form 입력 값 = ", req.body);
  model.UserSignin(req.body, (result) => {
    console.log("디비조회결과 = ", result);
    if (result.length == 0) {
      res.send({ login: false, user: result });
    } else {
      res.send({ login: true, user: result });
    }
  });
};

exports.postUserProfile = (req, res) => {
  model.UserProfile(req.body, (result) => {
    res.render("profile", { user: result });
  });
};

exports.patchUserProfile = (req, res) => {
  model.EditUserProfile(req.body, (result) => {
    res.send("수정완료");
  });
};

exports.deleteUserProfile = (req, res) => {
  model.DeleteUserProfile(req.body, (result) => {
    res.send("삭제완료");
  });
};

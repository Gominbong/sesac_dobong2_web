// TODO: 컨트롤러 코드
const { errorlogs } = require("../utils/common");
const models = require("../models/index");
const model = require("../model/User");
exports.getUser = (req, res) => {
  res.render("index");
};

exports.getUserSignup = (req, res) => {
  res.render("signup");
};
exports.postUserSignup = (req, res) => {
  console.log("컨트롤러에서 req.body 정보 = ", req.body);

  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  })
    .then((result) => {
      console.log("result = ", result);
      res.send({ signup: true });
    })
    .catch((err) => {
      console.log("err = ", err);
      if (err.name === "SequelizeUniqueConstraintError") {
        res.send({ signup: false, message: "중복된아이디입니다." });
      }
    });
};

exports.getUserSignin = (req, res) => {
  res.render("signin");
};

exports.postUserSignin = (req, res) => {
  console.log("form 입력 값 = ", req.body);

  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  })
    .then((result) => {
      console.log("result = ", result);
      if (result === null) {
        res.send({
          login: false,
          message: "아이디와 비밀번호를 확인해주세요.",
        });
      } else {
        res.send({ login: true, user: result });
      }
    })
    .catch((err) => {
      console.log("err = ", err);
    });
};

exports.postUserProfile = (req, res) => {
  model.UserProfile(req.body, (result) => {
    res.render("profile", { user: result });
  });
};

exports.patchUserProfile = (req, res) => {
  models.User.update(
    { name: req.body.name, pw: req.body.pw },
    { where: { userid: req.body.userid } }
  )
    .then((result) => {
      console.log("result = ", result);
      res.send("수정완료");
    })
    .catch((err) => {
      console.log("err = ", err);
    });
};

exports.deleteUserProfile = (req, res) => {
  models.User.destroy({ where: { userid: req.body.userid } })
    .then((result) => {
      console.log("result = ", result);
      res.send("삭제완료");
    })
    .catch((err) => {
      console.log("err = ", err);
    });
};

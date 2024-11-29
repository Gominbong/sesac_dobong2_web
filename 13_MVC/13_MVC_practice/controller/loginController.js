const loginDb = require("../model/User");
const loginDb2 = require("../model/User2");
exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  res.send({ loginForm: req.body.loginForm, loginDb: loginDb });
};

exports.login2 = (req, res) => {
  res.send({ loginForm: req.body.loginForm, loginDb2: loginDb2 });
};

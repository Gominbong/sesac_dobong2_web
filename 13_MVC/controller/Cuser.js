const User = require("../model/User");

exports.getUser = (req, res) => {
  console.log(User.userInfo());
  res.render("user", {
    userInfo: User.userInfo(),
  });
};

const Visitor = require("../model/Visitor");
// console.log(Visitor.getVisitors());
exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  //   res.render("visitors", { data: Visitor.getVisitors() });
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};

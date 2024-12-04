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

exports.getVisitor = (req, res) => {
  console.log(req.params);
  Visitor.getVisitor(req.params.id, (result) => {
    console.log("한 개의 데이터 Cvisitor.js", result);
    res.send(result);
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + " 번 id 삭제 완료");
  });
};

exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정 완료");
  });
  // res.send("response patch!");
};

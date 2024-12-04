// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// TODO: 모델 코드
exports.CreateUser = (data, cb) => {
  conn.query(
    `insert into user(userid, name, pw) values("${data.userid}", "${data.name}", "${data.pw}")`,
    (err, rows) => {
      try {
        cb(err);
      } catch (e) {}
    }
  );
};

exports.UserSignin = (data, cb) => {
  conn.query(
    `select * from user where userid="${data.userid}" and pw="${data.pw}"`,
    (err, rows) => {
      cb(rows);
    }
  );
};

exports.UserProfile = (data, cb) => {
  conn.query(
    `select * from user where userid="${data.userid}"`,
    (err, rows) => {
      cb(rows);
    }
  );
};

exports.EditUserProfile = (data, cb) => {
  conn.query(
    `update user set name="${data.name}", pw="${data.pw}" where userid="${data.userid}"`,
    (err, rows) => {
      cb(rows);
    }
  );
};

exports.DeleteUserProfile = (data, cb) => {
  conn.query(`delete from user where userid="${data.userid}"`);
  cb();
};

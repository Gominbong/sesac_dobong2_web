const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});
exports.getVisitors = (cb) => {
  //   return [
  //     { id: 1, name: "홍길동", comment: "내가 왔다" },
  //     { id: 2, name: "이찬혁", comment: "으라차차" },
  //   ];

  conn.query(`select * from visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("visitor 테이블 전체 조회", rows);

    cb(rows);
  });
};

// 2. 특정 데이터 조회
exports.getVisitor = (id, cb) => {
  conn.query(`select * from visitor where id = ${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("visitor 테이블 한 개 조회", rows);
    cb(rows[0]);
  });
};

// 3. 데이터 등록
exports.postVisitor = (data, cb) => {
  conn.query(
    `insert into visitor values(null, "${data.name}", "${data.comment}")`,
    (err, rows) => {
      if (err) throw err;
      console.log("model post", rows);
      cb(rows.insertId);
    }
  );
};

// 4. 데이터 삭제
exports.deleteVisitor = (id, cb) => {
  conn.query(`delete from visitor where id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("모델 Visitor.js 특정 데이터 삭제", rows);
    cb();
  });
};

exports.patchVisitor = (data, cb) => {
  console.log("model data", data);
  conn.query(
    `update visitor set name="${data.name}", comment="${data.comment}" where id=${data.id}  `,
    (err, rows) => {
      if (err) throw err;
      console.log("visitor.js 수정", rows);
      cb();
    }
  );
};

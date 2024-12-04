const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;
console.log("PORT number", PORT);
console.log("DB_PASSWORD = ", process.env.DB_PASSWORD);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("get요청입니다.");
});

app.post("/test", (req, res) => {
  console.log("ㅇㅇㅇㅇ");
  console.log(req.body);
  res.send(req.body);
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

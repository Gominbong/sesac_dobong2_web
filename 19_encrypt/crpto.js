const crypto = require("crypto");
/*
1. crypto를 통해 단방향 암호화 구현 > 복호화 불가능
- createHash(알고리즘)
- pdkdf2Sync(평문, salt, 반복횟수, 출력바이트, 해시알고리즘)
*/

// 1-1) createHash(알고리즘) .update(문자열).digest(인코딩)
// 인코딩 방식 : base64, hex, latin1, binary, ascii, utf8, utf16le

const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log(createHashPW("1234")); // 1234 -> 3d2f1b4b7e1c4b3
console.log(createHashPW("1234")); // 1234 -> 3d2f1b4b7e1c4b3
console.log(createHashPW("1234.")); // 1234 -> 3d2f1b4b7e1c4b3

// 1-2)
//- pdkdf2Sync(평문, salt, 반복횟수, 출력바이트, 해시알고리즘).toString(인코딩)

function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";
  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm)
    .toString("base64");
  return { salt, hash };
} // db에 salt와 hash 모두 저장 해야함

console.log("pbkdf2Sync >> ", saltAndHashPw("1234"));
console.log("pbkdf2Sync >> ", saltAndHashPw("1234"));
console.log("pbkdf2Sync >> ", saltAndHashPw("1234"));

function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100; //saltAndHashPw에서 사용한 값과 동일해야함
  const keylen = 64; //saltAndHashPw에서 사용한 값과 동일해야함
  const algorithm = "sha512"; //saltAndHashPw에서 사용한 값과 동일해야함

  // pbkd2Sync 의 모든 인자가 똑같다면 해시값도 똑같다.
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm)
    .toString("base64");
  return savedHash === hash;
}

const realPw = "qwer1234";
console.log("=================");
const data = saltAndHashPw(realPw);
const { salt: DBsalt, hash: DBhash } = data;
console.log(data);
console.log("======비밀번호 일치 여부 확인 ======");
console.log(checkPw("qwer1234!", DBsalt, DBhash));
console.log(checkPw("qwer1234", DBsalt, DBhash));

/*
2. 암호화 알고리즘
- createCipher(알고리즘, key) 암호화 
- createDecipher(알고리즘, key) 복호화

*/

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // 비밀수
const algorithm = "aes-256-cbc"; // 암호화 알고리즘
const originalMessage = "hello world!"; //원본 메세지, 평문

function encrypt(text) {
  // 1. 암호화 객체 생성
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // 2. 실제 데이터 암호화
  let encrypt = cipher.update(text, "utf8", "base64");

  // 3. 최종 결과 생성
  encrypt += cipher.final("base64");
  return encrypt;
}

// console.log(encrypt(originalMessage));
// console.log(encrypt(originalMessage));
function decrypt(encryptedMessage, key, iv) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let result = decipher.update(encryptedMessage, "base64", "utf8");
}

function decrypt(encryptedText) {
  // 1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  // 2. 실제 데이터 복호화
  // base64 방식으로 인코딩된 문자열이 uft8로 복호화됨
  let decrypt = decipher.update(encryptedText, "base64", "utf8");

  // 3. 최종 결과 생성

  decrypt += decipher.final("utf8");
  return decrypt;
}

const encryptedMessage = encrypt(originalMessage);
console.log("암호화된 문장", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log("복호화된 문장", decryptedMessage);

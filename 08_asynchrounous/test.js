function call(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  })
    .then(function (name) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          console.log(name + "반가워");
          resolve("back");
        }, 1000);
      });
    })
    .then(function (back) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          console.log(back);
          console.log(back + "을 실행했구나");
          resolve("callback hell");
        }, 1000);
      });
    })
    .then(function (message) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          console.log("여기는" + message);
          resolve();
        }, 1000);
      });
    });
}

let asd = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
};

let exec = async function () {
  await asd("kim");
  await asd("kim 반가워");
  await asd("back 을 실행했구나");
  await asd("여기는 callback hell");
};

call("kim");
//exec();

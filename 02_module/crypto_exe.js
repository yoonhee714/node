//crypto_exe.js
const { rejects } = require("assert");
const crypto = require("crypto");
const { resolve } = require("path");

let pass = crypto.createHash("sha512").update("test1234").digest("base64");
// test 1234 =>lajf;llfj;sldfjkdfjdk
// test 1234 =>(salt)lajf;llfj;sldfjkdfjdk

console.log(pass);

//salt값을 생성하는 함수
//random 값이 만들어짐
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        //실패
        reject(err);
      }
      //성공
      resolve(buf.toString("base64"));
    });
  });
  // promise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => console.error(err));
};
//createSalt();//함수호출
//salt 값을 활용해서 평문 ->암호화문 변경
const createCryptoPassword = async (trPw) => {
  let salt = await createSalt();
  console.log(salt);
  salt =
    "K74MSLkafRuKZ1Ooucvh2xa4Q3nz+R/hFWIShN96SPHNcem+uQ6mFMe9kkJQqp5EaoZnJeaFpl310TmlzRgNyQ==";
  pw =
    "v556OBCplzQ3aGd7GoL+D0FGacLFb8Kg7ZPTFJ53397rF9lY0/g5REgm8ETM8TYGDtCUVN2cQKsPmpUzsg24WQ==";
  crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, buf) => {
    if (err) {
      console.log("err=>", err);
    }
    //console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if (pw == crPw) {
      console.log("비밀번호가 동일함");
    } else {
      console.log("비밀번호를 확인하세요");
    }
  });
};
createCryptoPassword("test1111");

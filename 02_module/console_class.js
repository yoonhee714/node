// console_class.js
const { Console } = require("console");
const fs = require("fs");
const { defultNum } = require("./helloworld");

const output = fs.createWriteStream("./stdout.log");
const errput = fs.createWriteStream("./stderr.log");

const logger = new Console({ stdout: output, stderr: errput });
logger.log("디폴트값:%d", defultNum);
logger.error("에러가 발생했습니다.");

for (let i = 0; i < 10; i++) {
  logger.log(`i의 값은 ${i}`); //=> 파일에 작성
  console.log(`i의 값은 ${i}`); //=> 콘솔에 출력
}

//fs_write.js
const fs = require("fs"); //import하기
//fs.readfile / fs.readFileSync 활용해서 stdout.log 정보를 읽어들이고
fs.readfile(
  "./stdout.log",
  "안녕하세요",
  { encoding: "utf8", flag: "a" },
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
  }
);

fs.writeFile(
  "./file_write.txt", //저장위치
  "\n안녕하세요2\n", //쓸 내용
  "\nwrite test\n",
  { encoding: "utf8", flag: "a" }, //옵션
  (err) => {
    //콜백함수
    if (err) {
      console.error("예외발생");
      return;
    }
    console.log("파일생성완료!");
  }
); //end of fs.writeFile();

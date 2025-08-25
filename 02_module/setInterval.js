//setInterval.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//count: 100 -> 0 1씩 감소
let count = 100;
let timer = setInterval(() => {
  count--;
  // console.log(`현재 count:${count}`);
}, 1000);

let wordAry = "Lorem ipsum dolor sit amet" // Nemo maxime mollitia doloribus adipisci id, molestias voluptas optio. Asperiores temporibus ad enim facilis quasi eaque, officia, culpa vero vel, laudantium fugit" //띄우고싶을때
  .split(" ");

function myFunction() {
  // 100이 완료되기전에 배열에 있는 값을 clear하면 성공
  // 100이 완료 된후 배열에 값이 있으면 실패
  if (count < 0) {
    clearInterval(timer);
    rl.close(); //stream은 사용후 close();
    return;
  }
  rl.question("단어를 입력하세요", (answer) => {
    let search = answer;
    let idx = wordAry.indexOf(search);
    wordAry.splice(idx, 1); //삭제
    wordAry.forEach((word) => {
      console.log(word);
    });
    myFunction();
  });
  if (wordAry.length == 0) {
    clearInterval(timer);
    console.log("성공");
    rl.close();
    return;
  } else if (count <= 0) {
    clearInterval(timer);
    console.log("실패");
    rl.close();
    return;
  }
  //   if (wordAry.length == 0) {
  //     break;
  //   }
  // }
}
myFunction();

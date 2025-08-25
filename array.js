// [].sort()

let fruits = ["apple", "cherry", "banana"];

fruits.sort();
fruits.forEach((fruit) => {
  console.log(fruit);
});

let numbers = [1, 10, 100, 2, 12, 44];

numbers.sort(function (a, b) {
  if (a > b) {
    // ( b > a ) 오름차순 내림차순
    return 1; //위치를 변경 : 양의값
  } else {
    return -1; //위치를 유지 : 음의값
  }
});
numbers.forEach((number) => {
  console.log(number);
});

//filter()
//[10,23,46,17,56].filter(()=>{}); //화살표함수
[10, 23, 46, 17, 56]
  .filter((elem, idx, ary) => {
    //console.log(elem);
    if (elem > 30) {
      //30보다 큰값을 새롭게 생성
      return true;
    }
  })
  .forEach((elem) => {
    console.log(elem); //46,56
  });

//point가 30보다큰..
[
  { name: "Hong", point: 10 },
  { name: "kim", point: 23 },
  { name: "lee", point: 56 },
]

  .filter((elem, idx, ary) => {
    //console.log(elem);
    if (elem.point > 30) {
      //30보다 큰값을 새롭게 생성
      return true;
    }
  })
  .forEach((elem) => {
    console.log("이름:" + elem, name);
  });

//map (mapping)
// A->A'
//{name, age, point} =>{name, point}

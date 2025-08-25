//[].reduce().
let result = [10, 15, 20, 25, 30].reduce((acc, elem) => {
  console.log(acc, elem);
  //첫번째 : 0,10
  //두번째 : 10,15
  //세번째 : 15,20
  //네번째 : 20,25
  //다섯번째 : 25,30
  if (elem % 2 == 0) {
    acc.push(elem);
  }
  return acc + elem; //다음순번의 acc값.
}, []); //[].push(10)추가
console.log(result); //[10,20,30]

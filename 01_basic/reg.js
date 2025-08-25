//<<정규식 함수- 책 P65>>

let reg = /World/gi;
//reg = new RegExp("World");

let str = `Hello Hi..
World!
World`;

console.log(str.replace(/World/gi, "세상!"));
console.log(reg.exec(str));

//console.log(reg.test(str));

//g 옵션 앞에 포함된단어는 세상!으로 바꾼다
//i 옵션 이그노 앞에 포함된 단어는 대소문자 구분없이 세상! 으로 바꾼다
//m 옵션 멀티라인

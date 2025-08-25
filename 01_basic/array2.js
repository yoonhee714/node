fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((response) => response.json())
  .then((result) => {
    console.log(result); //result가 배열
    // code here
    // 댓글번호 : 123
    // 댓글번호 : 117
    result
      .filter((elem, idx, ary) => {
        //reply '연습' 포함된 댓글번호
        //'글등록연습'.indexOf('연습') => 없을경우 -1 반환
        if (elem.replyer == "user03") {
          return true;
        }
      })

      .forEach((elem) => {
        console.log("댓글번호:" + elem.replyNo);
      });
  })
  .catch(console.log);

fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((response) => response.json())
  .then((result) => {
    console.log(result); //result가 배열
    // code here
    // 댓글번호 : 123
    // 댓글번호 : 117
    result
      .filter((elem, idx, ary) => {
        //reply '연습' 포함된 댓글번호
        //'글등록연습'.indexOf('연습') => 없을경우 -1 반환
        if (elem.replyer == "user03") {
          return true;
        }
      })

      .forEach((elem) => {
        console.log("댓글번호:" + elem.replyNo);
      });
  })
  .catch(console.log);

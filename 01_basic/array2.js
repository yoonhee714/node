fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((response) => response.json())
  .then((result) => {
    console.log(result); //result가 배열
    // code here
    // 댓글번호 : 123
    // 댓글번호 : 117
    result
      .filter((elem, idx, ary) => {
        if (elem.replyer == "user03") {
          return true;
        }
      })

      .forEach((elem) => {
        console.log("댓글번호:" + elem.replyNo);
      });
  })
  .catch(console.log);

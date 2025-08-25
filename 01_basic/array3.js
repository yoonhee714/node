fetch("http://192.168.0.83/HelloJSP/mock.json")
  .then((Response) => Response.json())
  .then((data) => {
    //console.log(data);
    data
      .map((elem) => {
        //fn,in =>name
        const newElem = {
          id: elem.id,
          name: elem.first_name + "/" + elem.last_name,
          email: elem.email,
          salary: elem.salary,
        };
        return newElem;
      })
      .foreEach((elem) => console.log(elem.no + ":" + elem.name));
  })
  .catch(console.log);

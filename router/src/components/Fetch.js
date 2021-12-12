import React, { useEffect } from "react";

function Fetch() {
  useEffect(() => {
    callRequest();
    item = "123";
  }, []);

  var item = "14";
  const callRequest = async () => {
    // console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));
    // PROMISE ^

    // let data;
    // data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // console.log(data);
    // RESPONSE ^

    // item = await data.json();
    // console.log(item);
    // OBJECT ^

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response_value) => {
        response_value.json().then((object_response) => {
          item = object_response;
          console.log(object_response);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>{item}</p>
      <button onClick={callRequest}>Call1 Request</button>
    </div>
  );
}

export default Fetch;

// fetch= () {
//   return new Promise((resolve,reject)=>{
//     // ....
//     resolve(true)
//     // ....
//     reject(false)
//     // ....
//   })
// }

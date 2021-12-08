import React from "react";

function Fetch() {
  const callRequest = async () => {
    console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));
    // PROMISE ^

    let data;
    data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(data);
    // RESPONSE ^

    let item = await data.json();
    console.log(item);
    // OBJECT ^
  };

  return <button onClick={callRequest}>Call Request</button>;
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

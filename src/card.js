import React, { useState } from "react";

function Card() {
  const [count, setCount] = useState(0); //A1

  const increment = () => {
    setCount(count + 1);
  };

  var data = 12; //B3

  const addData = () => {
    data = data + 2;
    console.log("data value is:", data);
  };

  return (
    <div>
      <h1>count Value:{count}</h1>
      <button onClick={increment}>Call Increment</button>

      <h1>data Value: 12</h1>
      <button onClick={addData}>Call Add Data</button>
    </div>
  );
}

export default Card;

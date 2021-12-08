import React, { useState } from "react";

function Card() {
  const [isRed, setRed] = useState(false);
  const changeColor = () => {
    setRed(!isRed);
  };
  return (
    <div>
      <p className="red">asd</p>
      <p className={isRed ? "red" : ""}>asd</p>
      <button onClick={changeColor}>Button</button>
    </div>
  );
}

export default Card;

import React from "react";

function Card() {
  let changedValue = ($event) => {
    console.log($event.target.value);
  };
  return (
    <div style={styleSheet}>
      <input onChange={changedValue} />
    </div>
  );
}

const styleSheet = {
  margin: "200px",
};
export default Card;

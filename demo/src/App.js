import "./App.css";
// import Tweet from "./card";
// import ColorChange from "./changeColor";
// import InputBox from "./inputBox";

function App() {
  var arr = [1, 2, 3];
  return (
    <div>
      {arr.map((asd) => (
        <p>{asd}</p>
      ))}
      {/* <p>This below code is from Cards.js</p> */}
      {/* <Tweet /> */}
      {/* <p>This below code is from ChangeColor.js</p> */}
      {/* <ColorChange /> */}
      {/* <p>This below code is from useEffect.js</p> */}
      {/* <InputBox /> */}
    </div>
  );
}

export default App;

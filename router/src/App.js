import "./App.css";
import Routing from "./components/Routing";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div>
      {/* UNCOMMENT THIS FOR ROUTING */}
      {/* <Routing /> */}
      {/* UNCOMMENT THIS FOR FETCH REQUEST */}
      <Fetch />
    </div>
  );
}

export default App;

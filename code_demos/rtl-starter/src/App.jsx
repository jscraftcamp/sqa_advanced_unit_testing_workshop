import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Clicker } from "./act_example/Clicker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Clicker />
    </div>
  );
}

export default App;

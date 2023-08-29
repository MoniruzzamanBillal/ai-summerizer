import { useState } from "react";
import Hero from "./Component/Hero";
import Demo from "./Component/Demo";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="con">
        <h1 className=" black_btn p-6 "> this is heading </h1>
      </div>

      <Hero />
      <Demo />
    </>
  );
}

export default App;

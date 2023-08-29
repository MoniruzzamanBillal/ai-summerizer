import { useState } from "react";
import Hero from "./Component/Hero";
import Demo from "./Component/Demo";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Demo />
    </>
  );
}

export default App;

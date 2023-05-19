import React, { useState } from "react";

function App() {
  // If the equal side of the equality its an array you can declare variables like this:
  const [count, setCount] = useState(0); //This is the statehook
  // Using this we can render everytime we press the button
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

import React from "react";

function Counter({ number, OnIncrease, OnDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={OnIncrease}>+1</button>
      <button onClick={OnDecrease}>-1</button>
    </div>
  );
}

export default Counter;

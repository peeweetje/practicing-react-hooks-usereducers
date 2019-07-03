import React, { useReducer } from "react";
import counterReducer from "./reducers/counterReducer";

export const increment = "INCREMENT";
export const decrement = "DECREMENT";

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div className="App">
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: increment })}>increment</button>
      <button onClick={() => dispatch({ type: decrement })}>decrement</button>
    </div>
  );
};

export default Counter;

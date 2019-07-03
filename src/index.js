import React from "react";
import ReactDOM from "react-dom";
import TodosApp from "./todos";
import Counter from "./counter";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <TodosApp />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

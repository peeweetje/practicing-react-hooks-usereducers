import React, { useReducer, useState } from "react";
import todoReducer from "./reducers/todoReducer";

const Todo = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(todoReducer, {
    todos: [],
    todoCount: 0
  });
  const [value, setValue] = useState();

  return (
    <div className="todos-box">
      <div> My number of todos: {todoCount}</div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", value });
          setValue("");
        }}
      >
        <input value={value} onChange={e => setValue(e.target.value)} />
      </form>

      {todos.map((todo, index) => (
        <div
          className="todo-container"
          key={todo.value}
          onClick={() => dispatch({ type: "TOGGLE_TODO", index })}
          style={{
            textDecoration: todo.completed ? "line-through" : ""
          }}
        >
          {todo.value}
        </div>
      ))}
    </div>
  );
};

export default Todo;

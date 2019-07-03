function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { value: action.value, completed: false }],
        todoCount: state.todoCount + 1
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        todoCount: state.todoCount
      };
    default:
      return state;
  }
}

export default todoReducer;

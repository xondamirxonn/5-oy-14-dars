const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TROUGH_TODO":
     return {
       ...state,
       todos: state.todos.map((todo) =>
         todo.id === action.payload
           ? { ...todo, completed: !todo.completed }
           : todo
       ),
     };
    default:
      return state;
  }
}

export default todoReducer;

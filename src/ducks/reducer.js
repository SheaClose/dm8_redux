const ADD_TODO = "ADD_TODO";
const NOT_TODO = "NOT_TODO";

const initialState = {
  todos: [],
  notTodo: ""
};

export default function reducer(state = initialState, action) {
  console.log("state: ", state, action);

  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload]
      });
    case NOT_TODO:
      return Object.assign({}, state, {
        notTodo: action.payload
      });
    default:
      return state;
  }
}

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload
  };
}
export function notTodo(payload) {
  return {
    type: NOT_TODO,
    payload
  };
}

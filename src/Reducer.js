const initialState = {
  count: 0,
  users: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "fetchUsers":
      return { ...state, users: action.payload };
    default:
      return { ...state };
  }
}

export const { increment, decrement } = reducer;

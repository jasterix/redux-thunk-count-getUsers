import axios from "axios";
import thunk from "thunk";

export const increment = () => ({
  type: "increment"
});

export const decrement = () => ({
  type: "decrement"
});

export const fetchUsers = (payload) => ({
  type: "fetchUsers",
  payload: payload
});

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch({ type: "fetchUsers", payload: users });
      });
  };
};

import * as types from "./actionTypes";
const initAuth = {
  isAuth: false,
  isLoading: false,
  isError: false,
  error: "",
  token: "",
};
export const reducer = (state = initAuth, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

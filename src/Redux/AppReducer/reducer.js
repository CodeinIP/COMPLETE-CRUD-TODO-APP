import * as types from "./actionTypes";
const initState = {
  allTasks: [],
  singleTask: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_ALL_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allTasks: payload,
      };
    case types.GET_ALL_TASKS_FAILURE:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case types.GET_TAST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_TAST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singleTask: payload,
      };
    case types.GET_TAST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

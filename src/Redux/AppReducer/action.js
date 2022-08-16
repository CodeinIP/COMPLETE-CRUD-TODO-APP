import axios from "axios";
import * as types from "./actionTypes";
export const getTasksList = (params) => (dispatch) => {
  dispatch({ type: types.GET_ALL_TASKS_REQUEST });
  return axios
    .get("http://localhost:8080/tasks", { params: params })
    .then((res) =>
      dispatch({ type: types.GET_ALL_TASKS_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_ALL_TASKS_FAILURE, payload: err.message })
    );
};

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

export const getTask = (id) => (dispatch) => {
  dispatch({ type: types.GET_TAST_REQUEST });
  return axios
    .get(`http://localhost:8080/tasks/${id}`)
    .then((res) =>
      dispatch({ type: types.GET_TAST_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_TAST_FAILURE, payload: err.message })
    );
};
export const addTask = (payload) => () => {
  return axios
    .post("http://localhost:8080/tasks", payload);
};

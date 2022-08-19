import React from "react";
import TodoCalender from "../Components/TodoCalender";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTasksList } from "../Redux/AppReducer/action";
const AllTasks = () => {
    const store = useSelector((store) => store.appReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTasksList());
    }, []);
  return (
    <>
      <TodoCalender store={store} />
    </>
  );
};

export default AllTasks;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../Redux/AppReducer/action";
import TitleDesc from "../Components/TitleDesc";
import AddandList from "../Components/AddandList";
import CreateTask from "../Components/CreateTask";
const SingleTask = () => {
  const { taskId } = useParams();

  const dispatch = useDispatch();
  const singleTask = useSelector((store) => store.appReducer.singleTask);
  useEffect(() => {
    dispatch(getTask(taskId));
  }, [taskId]);
console.log(singleTask);
  return (
    <div className="singleTask">
      <div>
        <TitleDesc singleTask={singleTask} />
      </div>
      <div>
        <AddandList singleTask={singleTask} />
      </div>
      <div>
        <CreateTask singleTask={singleTask} />
      </div>
    </div>
  );
};

export default SingleTask;

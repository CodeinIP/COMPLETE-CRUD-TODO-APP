import React from "react";
import { useSelector } from "react-redux";
const AddandList = () => {
  const subTask = useSelector((store) => store.appReducer.singleTask.subTasks);
  console.log(subTask);
  const handleSubStatus = (e) => {
    console.log(e.target.checked)
  };
  return (
    <>
      <div className="addSubTask">
        <input type="text" />
        <button>ADD</button>
      </div>
      <div className="subTaskList">
        {
          subTask?.map((ele) => (
            <div key={ele.id}>
              <input
                type="checkbox"
                onChange={handleSubStatus}
                checked={ele.status}
              />
              <p>{ele.title}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default AddandList;

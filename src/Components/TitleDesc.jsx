import React from "react";

const TitleDesc = ({ singleTask }) => {
  const { title, status } = singleTask;
  console.log(status=="todo");
  return (
    <>
      <h2>{title}</h2>
      <p>DESCRIPTION</p>
      <div>
        <div>
          <input type="checkbox" defaultChecked={status == "todo" ? true : false} />
          <p>Todo</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>In Progress</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Done</p>
        </div>
      </div>
      <span>Tag (multiple possible)</span>
      <div>
        <div>
          <input type="checkbox" />
          <p>Official</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Personal</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Others</p>
        </div>
      </div>
    </>
  );
};

export default TitleDesc;

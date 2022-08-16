import React from "react";
import Task from "./Task";
import styles from "./todocalender.module.css";
const TodoCalender = ({ store }) => {
  const { allTasks, isError, isLoading, errorMessage } = { ...store };
  const Todo = allTasks.filter((ele) => ele.status === "todo");
  const InProgress = allTasks.filter((ele) => ele.status === "inprogress");
  const Done = allTasks.filter((ele) => ele.status === "done");
  console.log(Todo, InProgress, Done);
  return (
    <>
      {isError ? (
        <div>{errorMessage}</div>
      ) : isLoading ? (
        <div>Loading</div>
      ) : (
        <div className={styles.calender}>
          <div className={styles.todo}>
            <h3>TODO</h3>
            <div className={styles.todo_list}>
              <Task tasks={Todo} />
            </div>
          </div>
          <div className={styles.in_progress}>
            <h3>IN-PROGRESS</h3>
            <div className={styles.in_progress_list}>
              <Task tasks={InProgress} />
            </div>
          </div>
          <div className={styles.done}>
            <h3>DONE</h3>
            <div className={styles.done_list}>
              <Task tasks={Done} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoCalender;

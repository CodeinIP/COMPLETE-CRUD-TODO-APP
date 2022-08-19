import React from "react";
import styles from "./todocalender.module.css";
import { Link } from "react-router-dom";
const Task = ({ tasks }) => {
  return (
    <>
      {tasks?.length > 0 &&
        tasks.map((ele) => (
          <div className={styles.task} key={ele.id}>
            <Link to={`/task/${ele.id}`}>
              <div className={styles.desc_time}>
                <h3>{ele.title}</h3>
                <p>{ele.date}</p>
              </div>
              <span>Description</span>
              <div className={styles.sub_tasks}>
                {ele.subTasks?.length > 0 &&
                  ele.subTasks.map((sub) => (
                    <div key={sub.id}>
                      <input type="checkbox" />
                      <p>{sub.title}</p>
                    </div>
                  ))}
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default Task;

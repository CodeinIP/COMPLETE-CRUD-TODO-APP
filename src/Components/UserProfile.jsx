import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { FaUserSecret } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getTasksList } from "../Redux/AppReducer/action";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.appReducer.allTasks);
  const officialLen = tasks.filter((ele) => ele.category === "Official");
  const othersLen = tasks.filter((ele) => ele.category === "Others");
  const personalLen = tasks.filter((ele) => ele.category === "Personal");
  console.log(officialLen.length, othersLen.length, personalLen.length);
  console.log(tasks.length);
  return (
    <div>
      <div className={styles.user_logo}>
        <Link to="/">
          <FaUserSecret />
        </Link>
      </div>
      <div className={styles.user_name}>User Name</div>
      <div className={styles.tasks}>
        <Button onClick={() => dispatch(getTasksList())}>
          All
          <span>{tasks.length}</span>
        </Button>
        <Button
          onClick={() => dispatch(getTasksList({ category: "Personal" }))}
        >
          Personal
          <span>{personalLen.length}</span>
        </Button>
        <Button
          onClick={() => dispatch(getTasksList({ category: "Official" }))}
        >
          Official
          <span>{officialLen.length}</span>
        </Button>
        <Button onClick={() => dispatch(getTasksList({ category: "Others" }))}>
          Others
          <span>{othersLen.length}</span>
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
export const Button = styled.button`
  border: 2px solid gray;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 10px;
  color: gray;
  width: 90%;
  margin: 5px;
  &:hover {
    background-color: lightgray;
    color: black;
  }
  &:nth-child(1) {
    border-color: lightpink;
  }
  &:nth-child(2) {
    border-color: lightblue;
  }
  &:nth-child(3) {
    border-color: lightgreen;
  }
  &:nth-child(4) {
    border-color: lightorange;
  }
`;

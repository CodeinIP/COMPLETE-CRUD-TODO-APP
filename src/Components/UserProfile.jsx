import React from "react";
import styles from "./UserProfile.module.css";
import { FaUserSecret } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getTasksList } from "../Redux/AppReducer/action";
const UserProfile = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.user_logo}>
        <FaUserSecret />
      </div>
      <div className={styles.user_name}>User Name</div>
      <div className={styles.tasks}>
        <Button onClick={() => dispatch(getTasksList())}>All</Button>
        <Button
          onClick={() => dispatch(getTasksList({ category: "Personal" }))}
        >
          Personal
        </Button>
        <Button
          onClick={() => dispatch(getTasksList({ category: "Official" }))}
        >
          Official
        </Button>
        <Button onClick={() => dispatch(getTasksList({ category: "Others" }))}>
          Others
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
  width: 120px;
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

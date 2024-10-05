import React, { useReducer } from "react";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return <div className={` ${classes.list}`}>{props.info}</div>;
};
export default UserList;

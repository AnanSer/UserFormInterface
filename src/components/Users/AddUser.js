import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUsers = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">UserName</label>
        <input type="text"></input>
        <label htmlFor="age">Age(Years)</label>
        <input type="text" id="age"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUsers;

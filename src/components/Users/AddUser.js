import React from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
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
        <Button type="button">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;

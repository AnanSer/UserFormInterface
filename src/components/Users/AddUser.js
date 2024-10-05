import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
  };

  // if (enteredUserName.length == 0) {
  //   alert("enter the age please");
  // }

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onClick={submitHandler}>
        <label htmlFor="userName">UserName</label>
        <input type="text" onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age(Years)</label>
        <input type="number" id="age" onChange={ageChangeHandler}></input>
        <Button type="button">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;

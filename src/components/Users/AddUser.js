import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import UserList from "../UI/UserList";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (event) => {
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 0) return;
    event.preventDefault();
    console.log(enteredUserName, enteredAge);

    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">UserName</label>
          <input
            id="name"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      <UserList
        info={`${enteredUserName} ${enteredAge}`}
        className={classes.Card}
      />
    </div>
  );
};

export default AddUsers;

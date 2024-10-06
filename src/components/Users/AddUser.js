import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      return setError({
        title: "invalid input!",
        message: "please enter a valid name and age.",
      });
    if (+enteredAge < 0)
      return setError({
        title: "invalid age!",
        message: "please enter valid age (> 0).",
      });

    props.onAddUser(enteredUserName, enteredAge);

    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUsers;

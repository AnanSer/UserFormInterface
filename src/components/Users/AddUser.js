import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    const enteredName = nameInputRef.current.value; //using refs
    const enteredUserAge = ageInputRef.current.value;

    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0)
      return setError({
        title: "invalid input!",
        message: "please enter a valid name and age.",
      });
    if (+enteredUserAge < 0)
      return setError({
        title: "invalid age!",
        message: "please enter valid age (> 0).",
      });

    props.onAddUser(enteredName, enteredUserAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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

          <input id="name" type="text" ref={nameInputRef}></input>

          <label htmlFor="age">Age(Years)</label>

          <input type="number" id="age" ref={ageInputRef}></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;

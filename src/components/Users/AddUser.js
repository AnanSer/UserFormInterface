import React from "react";
import "./AddUser.css";

const AddUsers = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">UserName</label>
        <input type="text"></input>
        <label htmlFor="age">Age(Years)</label>
        <input type="text" id="age"></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUsers;

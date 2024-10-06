import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import "./App.css";
import UserList from "./components/Users/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((previousAddUser) => {
      return [
        ...previousAddUser,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;

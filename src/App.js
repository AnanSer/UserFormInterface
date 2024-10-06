import React from "react";

import AddUser from "./components/Users/AddUser";
import "./App.css";
import UserList from "./components/Users/UserList";

const App = () => {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
};

export default App;

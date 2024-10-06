import React, { useReducer } from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <div>
        <ul>
          {props.users.map((user) => (
            <li>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
export default UserList;

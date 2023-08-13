import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        msg: "Please enter valid name and age (non-empty values)",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        msg: "Please enter valid a age (>0)",
      });
      return;
    }

    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  return [
    error && (
      <ErrorModal
        key ="error-modal"
        title={error.title}
        msg={error.msg}
        onConfirm={errorHandler}
      ></ErrorModal>
    ),
    <Card  key ="Card-key" className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={nameHandler}
        ></input>
        <label htmlFor="age">Age(years)</label>
        <input
          id="age"
          type="number"
          value={userAge}
          onChange={ageHandler}
        ></input>
        <Button type="submit"> Add User</Button>
      </form>
    </Card>,
  ];
};
export default AddUser;

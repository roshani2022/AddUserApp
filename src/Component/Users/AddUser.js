import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputref = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enterdName = nameInputRef.current.value;
    const enterdAge = ageInputRef.current.value;
    const enterdcollege = collegeInputref.current.value;
    console.log(enterdcollege);
    if (
      enterdName.trim().length === 0 ||
      enterdAge.trim().length === 0 ||
      enterdcollege.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        msg: "Please enter valid name and age (non-empty values)",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "Invalid age",
        msg: "Please enter valid a age (>0)",
      });
      return;
    }

    props.onAddUser(enterdName, enterdAge, enterdcollege);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputref.current.value = "";
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <label htmlFor="college">College Name </label>
          <input id="college" type="text" ref={collegeInputref}></input>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;

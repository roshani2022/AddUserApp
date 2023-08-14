//import React, { useState } from "react";    // this is uded when we usec react.fragment
import React, { useState ,Fragment} from "react";
import "./App.css";
import AddUser from "./Component/Users/AddUser";
import UsersList from "./Component/Users/UsersList";
const App = () => {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, college:uCollege, id: Math.random().toString() },
      ];
    });
  };
  return (
    // <>
    //   <AddUser onAddUser={addUserHandler}></AddUser>
    //   <UsersList users={usersList}></UsersList>
    // </>

    // Alternative of above

    // <React.Fragment>
    //    <AddUser onAddUser={addUserHandler}></AddUser>
    //    <UsersList users={usersList}></UsersList>
    //  </React.Fragment>

<Fragment>
<AddUser onAddUser={addUserHandler}></AddUser>
<UsersList users={usersList}></UsersList>
</Fragment>
    
    
  );
};

export default App;

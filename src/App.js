import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {userList.length > 0 && <UserList users={userList} />}
    </div>
  );
};

export default App;

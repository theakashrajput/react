import { useState } from "react";
import CreateUserData from "./components/CreateUserData";
import ReadUserData from "./components/ReadUserData";

const App = () => {
  
  const [users, setUsers] = useState([]);

  return (
    <>
      <CreateUserData users={users} setUsers={setUsers} />
      <ReadUserData users={users} setUsers={setUsers} />
    </>
  );
};

export default App;

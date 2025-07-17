import { useState } from "react";

const CreateUserData = (props) => {
  const { users, setUsers } = props;

  const [userName, setuserName] = useState("");
  const [userAge, setuserAge] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setuserName("");
    setuserAge("");
    const newUser = { name: userName, age: userAge };
    setUsers([...users, newUser]);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>User Register</h1>
      <input
        onChange={(e) => setuserName(e.target.value)}
        value={userName}
        type="text"
        placeholder="username"
        autoFocus
        required
      />
      <input
        onChange={(e) => setuserAge(e.target.value)}
        value={userAge}
        type="text"
        placeholder="age"
        required
      />
      <button>Submit</button>
    </form>
  );
};

export default CreateUserData;

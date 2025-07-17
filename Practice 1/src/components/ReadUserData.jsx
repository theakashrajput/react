const ReadUserData = (props) => {
  const { users } = props;

  const renderUserData = users.map((user, idx) => {
    return (
      <li key={idx}>
        Name: {user.name}, Age: {user.age}
      </li>
    );
  });

  return (
    <>
      <h1>User Data</h1>
      <ol>{renderUserData}</ol>
    </>
  );
};

export default ReadUserData;

import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
  const [taskData, setTaskData] = useState([]);

  return (
    <div className="bg-gray-700 w-full h-screen flex p-5 select-none">
      <Create taskData={taskData} setTaskData={setTaskData} />
      <Read taskData={taskData} setTaskData={setTaskData} />
    </div>
  );
};

export default App;

import { createContext, useState } from "react";
export const toDOContext = createContext(null);

const Wrapper = (props) => {
  const [taskData, setTaskData] = useState([]);
  return (
    <toDOContext.Provider value={{ taskData, setTaskData }}>
      {props.children}
    </toDOContext.Provider>
  );
};

export default Wrapper;

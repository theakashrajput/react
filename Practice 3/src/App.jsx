import { useState } from "react";
import UserInputComp from "./components/userInputComp";
import RenderData from "./components/renderData";

const App = () => {
  const [toDos, setToDos] = useState([]);

  return (
    <div className="w-full h-screen bg-zinc-800 text-zinc-100 p-5 select-none">
      <UserInputComp toDos={toDos} setToDos={setToDos} />
      <RenderData toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;

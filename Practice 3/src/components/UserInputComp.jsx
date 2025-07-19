import { nanoid } from "nanoid";
import { useState } from "react";

const UserInputComp = (props) => {
  const { toDos, setToDos } = props;
  const [userInput, setUserInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      const newToDo = {
        id: nanoid(),
        task: userInput,
        isCompleted: false,
      };
      setToDos([...toDos, newToDo]);
    }
    setUserInput("");
  };

  return (
    <>
      <h2 className="text-2xl">My To DO App</h2>
      <form
        onSubmit={handleFormSubmit}
        className="border-2 border-zinc-100 rounded-md py-5 w-[350px] flex items-baseline flex-col gap-5"
      >
        <label>
          Task:
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            placeholder="Enter your task"
            className="border-2 border-zinc-50 rounded-sm ml-3 py-1 px-2"
          />
        </label>
        <button className="bg-emerald-700 py-1 px-3 rounded-md ml-5 cursor-pointer hover:bg-emerald-900 active:scale-[0.9]">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserInputComp;

const Read = (props) => {
  const { taskData, setTaskData } = props;

  const handleDelete = (id) => {
    setTaskData(taskData.filter((ele) => ele.id !== id));
  };

  const handleLine = (id) => {
    setTaskData(
      taskData.map((ele) => {
        if (ele.id === id) {
          ele.isCompleted = !ele.isCompleted;
        }
        return ele;
      })
    );
  };

  const renderData = taskData.map((ele) => {
    return (
      <div
        key={ele.id}
        className="w-[100%] bg-cyan-950 flex justify-between py-2 px-4 items-center text-zinc-100 text-xl rounded-md"
      >
        <h4
          onClick={() => handleLine(ele.id)}
          className={`cursor-pointer ${ele.isCompleted ? "line-through" : ""}`}
        >
          {ele.title}
        </h4>
        <button
          onClick={() => handleDelete(ele.id)}
          className={`bg-red-600 text-zinc-200 py-2 px-3 rounded-md ml-6 font-semibold text-sm tracking-wide cursor-pointer active:scale-[0.95] `}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="w-[70%]">
      <div className="w-[80%] flex justify-between items-center">
        <h1 className="font-semibold text-5xl tracking-wider mb-7 text-zinc-300">
          Your Tasks:
        </h1>
        <button
          onClick={() => setTaskData([])}
          className="bg-orange-400 text-zinc-200 py-2 px-3 rounded-md ml-6 font-semibold tracking-wide cursor-pointer active:scale-[0.95]"
        >
          Clear All
        </button>
      </div>
      <div className="w-[80%] overflow-auto scrollbar-none flex flex-col gap-3 max-h-[70%] overflow-y-auto custom-scrollbar">
        {renderData}
      </div>
    </div>
  );
};

export default Read;

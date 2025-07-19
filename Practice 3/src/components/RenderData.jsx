const RenderData = (props) => {
  const { toDos, setToDos } = props;

  const handleDelete = (id) => {
    setToDos(toDos.filter((ele) => ele.id !== id));
  };

  const handleToggle = (id) => {
    setToDos(
      toDos.map((ele) => {
        if (ele.id === id) {
          ele.isCompleted = !ele.isCompleted;
        }
        return ele;
      })
    );
  };
  const renderToDos = toDos.map((ele) => (
    <div key={ele.id} className="flex items-center justify-between">
      {/* Task Text with Ellipsis and Hover Expansion */}
      <div
        onClick={() => handleToggle(ele.id)}
        className={`max-w-[75%] cursor-pointer truncate ${
          ele.isCompleted ? "line-through" : ""
        }`}
        title={ele.task}
      >
        {ele.task}
      </div>

      {/* Delete Button */}
      <div
        className="bg-red-600 py-1 px-3 ml-5 rounded-md text-sm font-semibold tracking-wide cursor-pointer hover:bg-red-700 active:scale-95 transition-all duration-150"
        onClick={() => handleDelete(ele.id)}
      >
        Delete
      </div>
    </div>
  ));

  return (
    <div className="mt-5 w-[300px] border-2 border-zinc-400 p-3">
      <div className="flex justify-between mb-5">
        <h2 className="font-semibold text-2xl">Tasks:</h2>
        <button
          className="bg-amber-400 py-1 text-sm font-semibold tracking-wide px-3 rounded-md ml-5 cursor-pointer hover:bg-yellow-600 active:scale-[0.9]"
          onClick={() => setToDos([])}
        >
          Clear All
        </button>
      </div>
      <div className="w-full flex flex-col gap-2.5">{renderToDos}</div>
    </div>
  );
};

export default RenderData;

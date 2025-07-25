import nanoId from "nano-id";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { toDOContext } from "../Wrapper";

const Create = () => {
  const { taskData, setTaskData } = useContext(toDOContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    if (data.title.trim() === "") {
      return;
    }
    data.title;
    data.id = nanoId();
    data.isCompleted = false;

    setTaskData([...taskData, data]);

    toast.success("ToDO Created successfully");

    reset();
  };

  return (
    <div className="w-[30%]">
      <h1 className="font-semibold text-4xl tracking-wider mb-7 text-zinc-300">
        My ToDO
      </h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <input
          {...register("title", { required: "Title cann't be empty" })}
          type="text"
          className="bg-amber-50 py-2 px-3 text-lg rounded-sm"
        />
        <button className="bg-emerald-600 text-zinc-200 py-2.5 px-4 rounded-md ml-6 font-semibold tracking-wide cursor-pointer active:scale-[0.95]">
          Add
        </button>
      </form>
      {errors?.title?.message && (
        <small className="text-red-400">{errors?.title?.message}</small>
      )}
    </div>
  );
};

export default Create;

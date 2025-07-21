import { useNavigate } from "react-router-dom";

const UpdateServices = () => {
  const navigation = useNavigate();
  return (
    <div className="border-t-2 border-white w-full h-[400px] pt-5">
      <h1 className="text-2xl">Update Services</h1>
      <div>
        <div className="flex gap-10 mt-8">
          <div className="border-2 bg-zinc-100 p-5 w-fit rounded-md text-zinc-800">
            <h1 className="text-5xl mb-5">Service 1</h1>
            <button className="bg-emerald-600 text-zinc-50 rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-emerald-800 active:scale-[0.9]">
              Update Service
            </button>
          </div>
          <div className="border-2 bg-zinc-100 p-5 w-fit rounded-md text-zinc-800">
            <h1 className="text-5xl mb-5">Service 2</h1>
            <button className="bg-emerald-600 text-zinc-50 rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-emerald-800 active:scale-[0.9]">
              Update Service
            </button>
          </div>
        </div>
        <button
          onClick={() => navigation(-1)}
          className="bg-orange-600 text-white py-1.5 px-3 rounded-sm mt-4 tracking-wide hover:bg-orange-700 active:scale-95 cursor-pointer"
        >
          ⬅️ Go Back
        </button>
      </div>
    </div>
  );
};

export default UpdateServices;

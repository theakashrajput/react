import { Outlet, useNavigate } from "react-router-dom";

const Services = () => {
  const navigation = useNavigate();
  return (
    <div className="p-20">
      <h1 className="text-4xl">Our Services</h1>
      <div className="flex gap-8 my-5">
        <button
          onClick={() => navigation("/services/getservices")}
          className="bg-cyan-600 text-white py-1.5 px-3 rounded-sm mt-4 tracking-wide hover:bg-cyan-800 active:scale-95 cursor-pointer"
        >
          Get Service
        </button>
        <button
          onClick={() => navigation("/services/updateservices")}
          className="bg-cyan-600 text-white py-1.5 px-3 rounded-sm mt-4 tracking-wide hover:bg-cyan-800 active:scale-95 cursor-pointer"
        >
          Update Service
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Services;

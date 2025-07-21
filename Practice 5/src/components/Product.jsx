import { useNavigate } from "react-router-dom";

const Product = () => {
  let navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/product/details");
  };
  return (
    <div className="p-20 flex gap-10">
      <div className="border-2 bg-zinc-100 p-5 w-fit rounded-md text-zinc-800">
        <h1 className="text-5xl mb-5">Product 1</h1>
        <button
          onClick={handleNavigation}
          className="bg-emerald-600 text-zinc-50 rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-emerald-800 active:scale-[0.9]"
        >
          See Details
        </button>
      </div>
      <div className="border-2 bg-zinc-100 p-5 w-fit rounded-md text-zinc-800">
        <h1 className="text-5xl mb-5">Product 2</h1>
        <button
          onClick={handleNavigation}
          className="bg-emerald-600 text-zinc-50 rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-emerald-800 active:scale-[0.9]"
        >
          See Details
        </button>
      </div>
      <div className="border-2 bg-zinc-100 p-5 w-fit rounded-md text-zinc-800">
        <h1 className="text-5xl mb-5">Product 3</h1>
        <button
          onClick={handleNavigation}
          className="bg-emerald-600 text-zinc-50 rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-emerald-800 active:scale-[0.9]"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Product;

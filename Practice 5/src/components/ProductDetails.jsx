import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col gap-10 w-full h-screen">
      <div className="w-[20%] h-[400px] bg-zinc-100 rounded-sm p-5 text-zinc-800">
        <div className="w-full h-40 bg-zinc-300 rounded-sm">Product Img</div>
        <h1 className="bg-zinc-300 text-3xl mt-5 mb-3 font-medium">
          Product Name
        </h1>
        <p className="h-20 bg-zinc-300">Product Description</p>
        <button className="bg-cyan-600 text-white py-1.5 px-3 rounded-sm mt-4 tracking-wide hover:bg-cyan-800 active:scale-95 cursor-pointer">
          Buy Now
        </button>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-orange-400 text-white py-1.5 px-3 rounded-sm mt-4 tracking-wide hover:bg-orange-600 active:scale-95 cursor-pointer"
      >
        ⬅️ Go Back
      </button>
    </div>
  );
};

export default ProductDetails;

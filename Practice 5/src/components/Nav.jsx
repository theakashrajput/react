import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full py-5 flex justify-center gap-20 text-lg absolute top-0 left-0 bg-zinc-800">
      <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to="/">Home</NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to="/about">About</NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to="/services">Services</NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to="/product">Product</NavLink>
    </div>
  );
};

export default Nav;

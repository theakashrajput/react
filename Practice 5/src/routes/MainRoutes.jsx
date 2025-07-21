import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Product from "../components/Product";
import ProductDetails from "../components/ProductDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/details" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;

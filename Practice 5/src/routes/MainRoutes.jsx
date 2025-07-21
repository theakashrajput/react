import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Product from "../components/Product";
import ProductDetails from "../components/ProductDetails";
import GetServices from "../components/GetServices";
import UpdateServices from "../components/UpdateServices";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />}>
        <Route path="/services/getservices" element={<GetServices />} />
        <Route path="/services/updateservices" element={<UpdateServices />} />
      </Route>
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;

import Navigation from "./Components/Navigation";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Workflow from "./Components/Workflow";
import PoductPage from "./Pages/PoductPage";
import CategoryProduct from "./Pages/CategoryProduct";
import CartPage from "./Pages/CartPage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/Workflow" element={<Workflow />} />
        <Route path="/all-products" element={<PoductPage />} />
        <Route path="/category-product/:categoryId" element={<CategoryProduct />} />
        <Route path="/cart-details" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Workflow from "./Components/Workflow";
import PoductPage from "./Pages/PoductPage";
import CategoryProduct from "./Pages/CategoryProduct";
import CartPage from "./Pages/CartPage";

import MainLayout from "./Components/Main";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path = "/registration" element={<RegistrationPage/>}/>
        <Route element={<MainLayout />}>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Workflow" element={<Workflow />} />
          <Route path="/all-products" element={<PoductPage />} />
          <Route
            path="/category-product/:categoryId"
            element={<CategoryProduct />}
          />
          <Route path="/cart-details" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

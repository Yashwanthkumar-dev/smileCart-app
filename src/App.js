import HomePage from "./Pages/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./Pages/Contact";
import PoductPage from "./Pages/PoductPage";
import CategoryProduct from "./Pages/CategoryProduct";
import CartPage from "./Pages/CartPage";

import MainLayout from "./Components/Main";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import OrderPage from "./Pages/OrderPage";

import SideBar from "./Components/SideBar";
import About from "./Pages/About";
import AdminDashboard from "./AdminPage/AdminDashboard";
import AdminProductPage from "./AdminPage/AdminProductPage";
import AdminAddProduct from "./AdminPage/AdminAddProduct";
import AdminUpdateProduct from "./AdminPage/AdminUploadProduct";
import AdminUserPage from "./AdminPage/AdminUserPage";

const App = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex">
          {isAdminPage && <SideBar />}
          <div className={isAdminPage ? "flex-1 ml-[16.66%]" : "w-full"}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/registration" element={<RegistrationPage />} />

              <Route element={<MainLayout />}>
                <Route path="/home-page" element={<HomePage />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/all-products" element={<PoductPage />} />
                <Route path="/my-orders" element={<OrderPage />} />
                <Route
                  path="/category-product/:categoryId"
                  element={<CategoryProduct />}
                />
                <Route path="/cart-details" element={<CartPage />} />
              </Route>

              <Route
                path="/admin/AdminDashboard"
                element={<AdminDashboard />}
              />
              <Route path="/admin/product" element={<AdminProductPage />} />

              <Route path="/admin/user" element={<AdminUserPage />} />
              <Route path="/admin/update" element={<AdminUpdateProduct />} />
              <Route path="/admin/add" element={<AdminAddProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

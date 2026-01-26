import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

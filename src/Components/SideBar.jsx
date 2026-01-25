import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  User,
  LogOut,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      name: "dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/AdminDashboard",
    },
    {
      name: "product",
      icon: <ShoppingBag size={20} />,
      path: "/admin/product",
    },
    {
      name: "order",
      icon: <ClipboardList size={20} />,
      path: "/admin/product/order",
    },
    {
      name: "user",
      icon: <User size={20} />,
      path: "/admin/product/user",
    },
  ];
  return (
    <>
      <>
        <div className=" border h-screen w-2/12 fixed left-0 top-0 bg-white p-4 shadow-md flex-col flex gap-4 pl-10">
          <h1 className="font-poppins text-green-600 font-medium -tracking-wide text-xl mb-20">
            SmileCart
          </h1>
          {sideBarMenu.map((menu, index) => {
            // Inga check panrom: current path matches menu path?
            const isActive = location.pathname === menu.path;

            return (
              <div key={index} onClick={() => navigate(menu.path)}>
                <div
                  className={`flex items-center gap-x-2 py-3 px-2 rounded duration-300 cursor-pointer text-[19px] hover:mr-4
                          ${
                            isActive
                              ? "bg-green-600 text-white shadow-lg mr-4" // Active state style
                              : "text-gray-600 hover:bg-gray-200" // Normal state style
                          }`}
                >
                  <i>{menu.icon}</i>
                  <h1 className="font-poppins font-semibold capitalize">
                    {menu.name}
                  </h1>
                </div>
              </div>
            );
          })}
          <div
            className="mb-6 flex items-center hover:bg-red-50 rounded-xl px-4 py-3 text-red-500 cursor-pointer duration-300"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <LogOut size={20} />
            <span className="font-poppins ml-3 font-semibold capitalize">
              Logout
            </span>
          </div>
        </div>
      </>
    </>
  );
}
export default SideBar;

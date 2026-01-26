import { Package2Icon, Search } from "lucide-react";

function AdminProductPage() {
  return (
    <>
      <div className="text-poppins flex items-center ml-8 mt-5 gap-x-3 mr-20 py-4 relative">
        <i className=" p-3 rounded-xl bg-green-700 text-white">
          <Package2Icon />
        </i>
        <div>
          <h1 className="font-semibold text-[20px] tracking-wide capitalize text-gray-700">
            product management
          </h1>
          <p className="font-poppins font-medium text-green-500 text-[13px]">
            {" "}
            see all smile cart products
          </p>
        </div>
        <button
          className="bg-amber-600 text-white px-4 py-2 rounded-md border-2 border-transparent font-poppins font-medium absolute
          right-36 hover:bg-white  hover:border-amber-900 hover:border-2 hover:text-amber-900 duration-500 "
        >
          Add Product
        </button>
        <button
          className="bg-transparent text-orange-900 border-2 border-orange-900 px-4 py-2 rounded-md font-poppins
          font-medium absolute right-0 hover:bg-orange-900 hover:text-white hover:border-transparent duration-[400ms]"
        >
          Edit Product
        </button>
      </div>

      <div className=" mr-[76px] flex items-center float-end mt-6">
        <i className="border-2 p-[4px] text-gray-200 border-r-0 rounded-l-lg py-3 pl-2 pr-3  outline-none">
          <Search />
        </i>
        <input type="text" className="border-2 w-[400px] border-l-0 rounded-r-lg placeholder:font-poppins
        placeholder:text-gray-400 placeholder:capitalize  py-3  outline-none text-gray-600"  placeholder="search product...." />
      </div>
    </>
  );
}

export default AdminProductPage;

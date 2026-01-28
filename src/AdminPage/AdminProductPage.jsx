import { Package2Icon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { adminProductList, deleteProductById } from "../Api/Api";
import { Link } from "react-router-dom";

function AdminProductPage() {
  const [allProduct, setAllProduct] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const product = await adminProductList();
        setAllProduct(product);
        setError(false);
      } catch (error) {
        setError(true);
        console.log("error message :", error);
      }
    };
    fetchProductList();
  }, []);

  const fetchProductDeleteDataById = async (productId) => {
    try {
      await deleteProductById(productId);
      setAllProduct((prev) => prev.filter((p) => p.id !== productId));
      console.log("success message : product was deleted successfully");
      // window.location.reload();
    } catch (error) {
      console.log("error message :", error);
    }
  };

  if (fetchProductDeleteDataById) {
    return (
      <div>
        <h1 className="text-red text-3xl text-center">product was deleted suucessfully </h1>
      </div>
    );
  }

  const filterProduct = allProduct.filter((pro) => {
    return (
      pro.productName.toLowerCase().includes(search.toLowerCase()) ||
      pro.productDescription.toLowerCase().includes(search.toLowerCase())
    );
  });
  const deleteAllProduct = async () => {
    try {
      await deleteAllProduct();
      console.log("All product are deleted successfully");
    } catch (error) {
      console.log("error message :", error);
    }
  };
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-red-600 font-poppins font-medium capitalize text-[20px]">
          failed to fetch data...
        </h1>
      </div>
    );
  }

  return (
    <div className="px-8 py-6 font-poppins">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-x-3">
          <div className="p-3 rounded-xl bg-green-700 text-white">
            <Package2Icon size={24} />
          </div>
          <div>
            <h1 className="font-semibold text-xl tracking-wide capitalize text-gray-700">
              product management
            </h1>
            <p className="font-medium text-green-500 text-sm">
              see all smile cart products
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            to="/admin/add"
            className="bg-amber-600 text-white px-5 py-2 rounded-md border-2 border-amber-600 font-medium hover:bg-white hover:text-amber-900 transition duration-300"
          >
            Add Product
          </Link>
          <button className="bg-transparent text-orange-900 border-2 border-orange-900 px-5 py-2 rounded-md font-medium hover:bg-orange-900 hover:text-white transition duration-300">
            Edit Product
          </button>

          <button
            onClick={() => deleteAllProduct()}
            className="rounded-lg px-5 py-2 bg-red-600 font-poppins font-medium text-white capitalize tracking-wide border-transparent border-2
            hover:border-red-600 hover:text-red-600 transition duration-500 hover:bg-transparent"
          >
            delete All
          </button>
        </div>
      </div>
      {/* search */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center">
          <div className="border-2 border-r-0 p-3 rounded-l-lg text-gray-400 bg-white">
            <Search size={20} />
          </div>
          <input
            type="text"
            className="border-2 w-[300px] md:w-[400px] border-l-0 rounded-r-lg py-2.5 outline-none text-gray-600"
            placeholder="search product...."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      {/* search */}

      <div className="overflow-x-auto shadow-sm rounded-lg border">
        <table className="w-full text-left border-collapse bg-white">
          <thead className="bg-green-100 border-b font-mono ">
            <tr className="uppercase  text-gray-700 tracking-wider text-[18px]">
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Image</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Description</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filterProduct && filterProduct.length > 0 ? (
              filterProduct.map((pro) => (
                <tr
                  key={pro.id}
                  className="hover:bg-green-50 transition duration-150 font-mono"
                >
                  <td className="p-4 text-gray-600">#{pro.id}</td>
                  <td className="p-4">
                    <img
                      src={`data:${pro.imageType};base64,${pro.imageData}`}
                      alt={pro.productName}
                      className="w-12 h-12 object-cover rounded-md shadow-sm"
                    />
                  </td>
                  <td className="p-4 font-medium text-gray-800 capitalize">
                    {pro.productName}
                  </td>
                  <td className="p-4 text-gray-500 text-sm max-w-xs truncate">
                    {pro.productDescription}
                  </td>
                  <td className="p-4 font-semibold text-gray-700">
                    ₹{pro.productPrice}
                  </td>
                  <td>
                    <button
                      onClick={() => fetchProductDeleteDataById(pro.id)}
                      className="px-4 py-2 bg-red-500 font-poppins font-medium capitalize text-white rounded-lg"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-10 text-center text-gray-400">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProductPage;

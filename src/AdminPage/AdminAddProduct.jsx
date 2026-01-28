import { useState } from "react";
import { Info, Upload, X } from "lucide-react";
import { adminAddAllProducts } from "../Api/Api";

const AdminAddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [isTrending, setIsTrending] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePublish = async () => {
    const formData = new FormData();

    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productDescription", productDescription);
    formData.append("categoryName", categoryName);
    formData.append("isTrending", isTrending);
    formData.append("productImage", imageFile);

    try {
      const response = await adminAddAllProducts(formData);
      console.log(response.data);

      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setCategoryName("");
      setIsTrending(false);
      setImageFile(null);
      setPreview(null);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="flex justify-between items-center mb-8 bg-white p-5 rounded-lg shadow-sm">
        <div>
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <p>Fill the form to add a new product to inventory</p>
        </div>

        <button
          onClick={handlePublish}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium outline-none"
        >
          Publish
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 border-b pb-2 mb-4">
            <Info className="text-green-600" />
            <span className="font-semibold">Product Information</span>
          </div>

          <input
            type="text"
            placeholder="Product Name"
            className="w-full border p-3 rounded"
            onChange={(e) => setProductName(e.target.value)}
          />

          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Price"
              className="w-1/2 border p-3 rounded"
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category Name"
              className="w-1/2 border p-3 rounded"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Description"
            className="w-full border p-3 rounded h-32"
            onChange={(e) => setProductDescription(e.target.value)}
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => setIsTrending(e.target.checked)}
            />
            Trending Product?
          </label>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Product Image</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex flex-col items-center justify-center relative">
            {!preview ? (
              <>
                <Upload className="text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 text-center px-4">
                  Click to upload product image
                </p>
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <div className="relative w-full h-full p-2">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded"
                />
                <button
                  onClick={() => {
                    setPreview(null);
                    setImageFile(null);
                  }}
                  className="absolute top-4 right-4 bg-red-500 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;

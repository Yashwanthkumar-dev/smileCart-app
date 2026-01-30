import { Info, Upload, Package, DollarSign, Tag, FileText } from "lucide-react";
import { useState } from "react";
import { UpdateProduct } from "../Api/Api";

function AdminUpdateProduct() {
  const [oldProductName, setOldProductName] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [categoryName, setcategoryName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleFormData = async () => {
    const updateFormData = new FormData();
    updateFormData.append("oldProductName", oldProductName);
    updateFormData.append("newProductName", newProductName);
    updateFormData.append("productPrice", productPrice);
    updateFormData.append("productDescription", productDescription);
    updateFormData.append("categoryName", categoryName);
    updateFormData.append("image", image);

    try {
      const res = await UpdateProduct(updateFormData);
      console.log("Product updated successfully", res);
      alert("Product Updated Macha! ✅");

      if (res === 200) {
        return (
          <div>
            <h1>product was updated successfully</h1>
          </div>
        );
      } else {
        return (
          <div>
            <h1> product was not updated </h1>
          </div>
        );
      }
    } catch (error) {
      console.log("Error message :", error);
      alert("Update panna mudiyla da! ❌");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="bg-white border mx-[1.7rem] mt-5 flex items-center justify-between p-7 rounded-lg shadow-sm">
        <div>
          <h1 className="font-poppins font-semibold tracking-wide text-2xl capitalize text-gray-800 outline-none">
            Update Product
          </h1>
        </div>

        <div>
          <button
            onClick={handleFormData}
            className="font-poppins font-semibold tracking-wide rounded-lg px-6 py-2 bg-green-500 text-white capitalize hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            update now
          </button>
        </div>
      </div>

      <div className="mt-8 border mx-[1.7rem] rounded-lg p-6 bg-white shadow-sm">
        <div className="flex gap-x-3 items-center border-b pb-4 mb-6">
          <Info size={20} className="text-green-600" />
          <h1 className="text-xl font-poppins font-medium capitalize text-gray-700">
            product info
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
                <Package size={16} /> Old Product Name
              </label>
              <input
                type="text"
                className="w-full border-2 p-3 rounded-lg outline-none focus:border-green-500 transition-colors"
                placeholder="Enter current product name..."
                value={oldProductName}
                onChange={(e) => setOldProductName(e.target.value)}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
                <Package size={16} className="text-blue-500" /> New Product Name
              </label>
              <input
                type="text"
                className="w-full border-2 p-3 rounded-lg outline-none focus:border-green-500 transition-colors"
                placeholder="Enter new name..."
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
                  <DollarSign size={16} /> Price
                </label>
                <input
                  type="number"
                  className="w-full border-2 p-3 rounded-lg outline-none focus:border-green-500 transition-colors"
                  placeholder="₹ 0.00"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
                  <Tag size={16} /> Category
                </label>
                <input
                  type="text"
                  className="w-full border-2 p-3 rounded-lg outline-none focus:border-green-500 transition-colors"
                  placeholder="Category name"
                  value={categoryName}
                  onChange={(e) => setcategoryName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
                <FileText size={16} /> Description
              </label>
              <textarea
                className="w-full border-2 p-3 rounded-lg outline-none focus:border-green-500 h-32 resize-none transition-colors"
                placeholder="Tell something about the product..."
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Product Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center bg-gray-50 hover:bg-green-50 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImage}
                />
                {preview ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={preview}
                      alt="preview"
                      className="h-32 w-32 object-cover rounded-lg shadow-md mb-2"
                    />
                    <p className="text-xs text-green-600 font-medium">
                      Image selected!
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-sm text-gray-500">
                      Click or Drag image here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdateProduct;

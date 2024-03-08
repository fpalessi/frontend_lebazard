import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
// eslint-disable-next-line react/prop-types
const AdminCreateProductModal = ({ isOpen, closeModal }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/Products`,
        newProduct
      );
      alert("Product successfully created.");
    } catch (error) {
      alert("An error happenned while adding the product.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Product Modal"
    >
      <div className="flex min-h-full flex-1 flex-col justify-center p-2 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add New Product
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  value={newProduct.title}
                  onChange={handleInputChange}
                  type="title"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Brand
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="brand"
                  name="brand"
                  type="brand"
                  value={newProduct.brand}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Rating
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="rating"
                  name="rating"
                  type="rating"
                  value={newProduct.rating}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Stock
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="stock"
                  name="stock"
                  type="stock"
                  value={newProduct.stock}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="image"
                  name="image"
                  type="text"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="category"
                  name="category"
                  type="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleAddProduct}
                className="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Save Changes
              </button>
            </div>
            <button
              onClick={closeModal}
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default AdminCreateProductModal;

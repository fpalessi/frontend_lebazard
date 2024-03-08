/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const AdminEditProductModal = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...data });
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/Products/${editedProduct.id}`,
        editedProduct
      );
    } catch (error) {
      alert("Ha ocurrido un error mientras editabas el producto.");
    }
  };
  useEffect(() => {
    openModal();
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Product Modal"
    >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit Product
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
                  value={editedProduct.title}
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
                  value={editedProduct.price}
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
                  value={editedProduct.brand}
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
                  value={editedProduct.description}
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
                  value={editedProduct.rating}
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
                  value={editedProduct.stock}
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
                  value={editedProduct.image}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSaveChanges}
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

export default AdminEditProductModal;

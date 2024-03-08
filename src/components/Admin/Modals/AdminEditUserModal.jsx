/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const AdminEditUserModal = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...data });
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/Users/${editedUser.id}`,
        editedUser
      );

      alert("Has editado el usuario correctamente");
    } catch (error) {
      alert("Ha ocurrido un error mientras editabas el usuario.");
    }
  };
  useEffect(() => {
    openModal();
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit User Modal"
    >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit User
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  value={editedUser.name}
                  onChange={handleInputChange}
                  type="name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="city"
                  value={editedUser.city}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone number
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="phoneNumber"
                  value={editedUser.phoneNumber}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="address"
                  value={editedUser.address}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Role
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="role"
                  name="role"
                  type="role"
                  value={editedUser.role}
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

export default AdminEditUserModal;

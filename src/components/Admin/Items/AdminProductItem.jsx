import { useState } from "react";
import AdminEditProductModal from "../Modals/AdminEditProductModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const AdminProductItem = ({ data }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/Products/${data.id}`
      );
      confirm(`Sure about removing ${data.title}?`);
      navigate("/admin/products");
    } catch (error) {
      alert(`There was an error`);
    }
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.title}
      </th>
      <td className="px-6 py-4">{data.price}€</td>
      <td className="px-6 py-4">{data.brand}</td>
      <td className="px-6 py-4">{data.category}</td>
      <td className="px-6 py-4">{data.description}</td>
      <td className="px-6 py-4">{data.rating}</td>
      <td className="px-6 py-4">{data.stock}</td>
      <td className="px-6 py-4">
        {isEditing ? (
          <AdminEditProductModal data={data} onCancel={handleCancelEdit} />
        ) : (
          <button
            onClick={handleEditClick}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1"
          >
            Edit
          </button>
        )}
        <button
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminProductItem;

/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminEditUserModal from "../Modals/AdminEditUserModal";

const AdminUserItem = ({ data }) => {
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
        `${import.meta.env.VITE_BACKEND_URL}/Users/${data.id}`
      );
      confirm(`Sure about removing user with ${data.email}?`);
      navigate("/admin/");
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
        {data.email}
      </th>
      <td className="px-6 py-4">{data.name}</td>
      <td className="px-6 py-4">{data.city}</td>
      <td className="px-6 py-4">{data.phoneNumber}</td>
      <td className="px-6 py-4">{data.address}</td>
      <td className="px-6 py-4">{data.role}</td>
      <td className="px-6 py-4">
        {isEditing ? (
          <AdminEditUserModal data={data} onCancel={handleCancelEdit} />
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

export default AdminUserItem;

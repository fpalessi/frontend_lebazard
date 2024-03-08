/* eslint-disable react/prop-types */
const AdminOrderItem = ({ data }) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.id}
      </th>
      <td className="px-6 py-4">{data.total}€</td>
      <td className="px-6 py-4">{data.date}</td>
      <td className="px-6 py-4">{data.userId}</td>
    </tr>
  );
};

export default AdminOrderItem;

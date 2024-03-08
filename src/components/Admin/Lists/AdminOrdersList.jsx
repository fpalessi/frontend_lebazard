import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Spinner";
import AdminCreateProductModal from "../Modals/AdminCreateProductModal";
import { fetchOrders } from "../../../redux/features/order/orderThunk";
import AdminOrderItem from "../Items/AdminOrderItem";

const AdminOrdersList = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { orders, isLoading, error } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      {orders ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  User phone
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((product) => (
                <AdminOrderItem key={product.id} data={product} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>Something went wrong. Try again.</h2>
      )}

      {isLoading ? <Spinner /> : null}

      {!isLoading && error ? <h2>Something went wrong. Try again.</h2> : null}

      <AdminCreateProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
      />
    </>
  );
};

export default AdminOrdersList;

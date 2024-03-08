import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/features/product/productThunk";
import AdminProductItem from "../Items/AdminProductItem";
import Spinner from "../../Spinner";
import AdminCreateProductModal from "../Modals/AdminCreateProductModal";

const AdminProductsList = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {products ? (
        <>
          <button
            onClick={() => setIsAddProductModalOpen(true)}
            className="flex m-10 justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            + Add New Product
          </button>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Brand
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <AdminProductItem key={product.id} data={product} />
                ))}
              </tbody>
            </table>
          </div>
        </>
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

export default AdminProductsList;

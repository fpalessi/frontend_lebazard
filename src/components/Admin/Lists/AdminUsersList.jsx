import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../redux/features/user/userThunk";
import AdminUserItem from "../Items/AdminUserItem";
import Spinner from "../../Spinner";
import AdminCreateUserModal from "../Modals/AdminCreateUserModal";

const AdminUsersList = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      {users ? (
        <>
          {" "}
          <>
            <button
              onClick={() => setIsAddUserModalOpen(true)}
              className="flex m-10 justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              + Add New User
            </button>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      City
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Role
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <AdminUserItem key={user.id} data={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </>
      ) : (
        <h2>Something went wrong. Try again.</h2>
      )}

      {isLoading ? <Spinner /> : null}

      {!isLoading && error ? <h2>Something went wrong. Try again.</h2> : null}

      <AdminCreateUserModal
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
      />
    </>
  );
};

export default AdminUsersList;

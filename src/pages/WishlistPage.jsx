import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/features/wishlist/wishlistSlice";
import { toast } from "sonner";
import { addItem } from "../redux/features/cart/cartSlice";

const WishlistPage = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const handleRemoveFromWishList = (product) => {
    dispatch(removeFromWishlist(product));
    toast.error(`${product.title.slice(0, 20)} was removed from your wishlist`);
  };
  const handleAddProductToCart = (product) => {
    dispatch(addItem(product));
    toast.success(`${product?.title.slice(0, 20)} was added to cart`);
  };
  return (
    <div className="bg-gray-50 p-10">
      <h1 className="mb-10 text-center text-2xl font-bold">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center p-10">
          You do not have any items in your wishlist
        </p>
      ) : null}

      {wishlist.map((product) => (
        <div
          key={product.id}
          className="mx-auto max-w-3xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
        >
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start gap-2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-lg sm:w-40 object-contain"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between ">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-md text-gray-700">{product.brand}</p>{" "}
                  <p className="mt-1 text-xs text-gray-700">
                    {product.description}
                  </p>
                  <p className="mt-1 text-xs text-gray-700">
                    Stock: {product.stock} units.
                  </p>
                  <div className="flex justify-between mt-4">
                    {" "}
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-700 hover:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                      type="button"
                      onClick={() => {
                        handleAddProductToCart(product);
                      }}
                    >
                      ADD TO CART
                    </button>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 mt-2"
                      onClick={() => {
                        handleRemoveFromWishList(product);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistPage;

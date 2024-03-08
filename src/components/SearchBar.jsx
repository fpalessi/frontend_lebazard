import { useDispatch } from "react-redux";
import { setSearchProduct } from "../redux/features/filter/filterSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center">
      <div className="flex space-x-1">
        <input
          type="text"
          className="block w-full px-2 py-1.5 text-emerald-700 bg-white border rounded-full border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          onChange={(e) => dispatch(setSearchProduct(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBar;

import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { setCategory } from "../redux/features/filter/filterSlice";
import { useEffect } from "react";
import { fetchProducts } from "../redux/features/product/productThunk";
import ProductSkeleton from "./ProductSkeleton";
import { categories } from "../constants";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.product);
  const { category, searchedProduct } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let data;

  if (category === "all") {
    data = products;
  } else {
    data = products?.filter((item) => item.category.includes(category));
  }

  if (searchedProduct) {
    data = products?.filter((product) =>
      product.title.toLowerCase().includes(searchedProduct.toLowerCase())
    );
  }

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <h2 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
              Store
            </h2>
            <div className="flex items-center" id="store-nav-content">
              <select
                className="pl-3 inline-block no-underline hover:text-black cursor-pointer"
                href="#"
                defaultValue={category}
                onChange={(e) => dispatch(setCategory(e.target.value))}
              >
                {categories.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>{" "}
            </div>
          </div>
        </nav>

        {isLoading ? <ProductSkeleton cards={29} /> : null}

        {data ? (
          data.map((product) => <ProductItem key={product.id} data={product} />)
        ) : (
          <p>Sorry we could not find anything</p>
        )}

        {!isLoading && error ? <h2>Something went wrong. Try again.</h2> : null}
      </div>
    </section>
  );
};

export default ProductList;

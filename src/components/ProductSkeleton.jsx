import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// eslint-disable-next-line react/prop-types
const ProductSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div
        key={i}
        className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col border-solid border-gray-200 mt-10 "
      >
        <div>
          <Skeleton width={"16rem"} height={"12rem"} />
        </div>
        <Skeleton width={"10rem"} />
        <Skeleton width={"5rem"} />
      </div>
    ));
};

export default ProductSkeleton;

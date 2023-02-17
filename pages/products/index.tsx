import React, { useEffect, useRef, useState } from "react";
import useData from "../../hooks/useGetData";
import Card from "../../component/Card";
import useProtectedRoute from "../../hooks/useProtectedRoute";
import Loader from "../../component/Loader";

const Products = () => {
  useProtectedRoute();
  const containerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [cat, setCat] = useState("");
  let url;
  if (cat.length < 1 || cat == "All") {
    url = "https://dummyjson.com/products";
  } else {
    url = `https://dummyjson.com/products/category/${cat}`;
  }
  const { data, isLoading, error } = useData(url, "products");
  const {
    isLoading: catLoading,
    error: catError,
    data: catData,
  } = useData("https://dummyjson.com/products/categories", "categories");

  useEffect(() => {
    const container = containerRef.current;

    const interval = setInterval(() => {
      if (container) {
        const { scrollLeft, offsetWidth, scrollWidth } = container;
        const isEndReached = scrollLeft + offsetWidth === scrollWidth;
        const isStartReached = scrollLeft === 0;

        if (isEndReached) {
          setDirection("left");
        } else if (isStartReached) {
          setDirection("right");
        }

        if (direction === "right") {
          container.scrollBy({
            left: container.offsetWidth,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: -container.offsetWidth,
            behavior: "smooth",
          });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [direction]);

  if (isLoading || catLoading) return <Loader />;
  if (error || catError) console.log(error);

  const categoryList = [...catData, "All"].reverse().map((c, i) => {
    return (
      <span
        className="min-w-[100px] px-6 py-2 w-full bg-white h-[50px] cursor-pointer grid place-content-center rounded-3xl text-[14px] border-[1px]"
        key={i}
        onClick={() => setCat(c)}
      >
        {c}
      </span>
    );
  });

  const productList = data?.products?.map((product: any) => {
    return <Card key={product.id} category={product} />;
  });

  return (
    <div className="my-6 mx-8">
      <div
        className="my-4 w-full overflow-x-scroll flex gap-3 items-center  
      "
        ref={containerRef}
      >
        {categoryList}
      </div>
      <h3 className="text-2xl font-bold">Products</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productList}
      </div>
    </div>
  );
};

export default Products;

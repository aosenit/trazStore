import React, { useState } from "react";
import useAllProducts from "../../hooks/useAllProducts";

import { useRouter } from "next/router";
import Loader from "../Loader";
import useData from "../../hooks/useGetData";
import useCategory from "../../state-manager/useCategory";

const MainOne = () => {
  const { products: data, isLoading, isError } = useAllProducts();

  const router = useRouter();
  const items = data?.products.slice(0, 10).map((item: any) => {
    return (
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10"
        key={item.id}
        onClick={() => router.push(`/products/${item.id}`)}
      >
        <div className="w-full grid bg-gray-200 place-content-center p-6 ">
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-[250px] object-contain"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-sm mb-2">{item.description}</div>
          <p className=" text-3xl text-green-400">${item.price}</p>
        </div>
      </div>
    );
  });

  if (isError) return <div>Failed to load products</div>;
  if (isLoading) return <Loader />;

  return (
    <section className="">
      <div className="py-20 px-8 text-center ">
        <h2 className="text-4xl mb-6">
          Obsessive Attention. Intelligent Effort.
        </h2>
        <p className=" font-light">
          Functional handbags made of luxurious materials to improve people s
          lives in small but mighty ways.
        </p>
      </div>
      <div className="flex flex-wrap mx-8 lg:w-[85%] lg:mx-auto ">
        {data && items}
      </div>
    </section>
  );
};

export default MainOne;

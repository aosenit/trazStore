import { useRouter } from "next/router";
import React from "react";

const Card = ({ category }: any) => {
  const router = useRouter();
  return (
    <div
      className=" h-[300px] my-3 cursor-pointer"
      onClick={() => router.push(`/products/${category.id}`)}
    >
      <div className="bg-gray-200 h-3/4 overflow-hidden w-full flex items-center justify-center p-5">
        <img
          src={category.images[0]}
          alt={category.title}
          className="w-full object-contain  h-[100%]"
        />
      </div>
      <p className="text-[14px] font-light mt-2">{category.title}</p>
      <h4 className="text-xl font-semibold">${category.price}</h4>
    </div>
  );
};

export default Card;

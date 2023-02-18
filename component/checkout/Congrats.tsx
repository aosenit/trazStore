import Link from "next/link";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Congrats = () => {
  return (
    <div className="my-40 grid place-content-center mx-auto">
      <div className="px-8 max-w-[400px] flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-md border-green-500 border-[1px] grid place-content-center">
          <BsFillCheckCircleFill className="text-green-500 text-[25px]" />
        </div>
        <h3 className="text-2xl">We are on it</h3>
        <p className="text-[16px] text-gray-500 text-center">
          Your Payment has been received, you will get notification for your
          order state
        </p>
        <button className="bg-black text-white py-3 px-20 cursor-pointer">
          <Link href={"/"} className="">
            Go back Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Congrats;

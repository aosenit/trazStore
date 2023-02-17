import { useState } from "react";
interface IProps {
  value: number;
  setValue(value: number): void;
}

export const QuantityHandler: React.FC<IProps | any> = ({
  value,
  setValue,
}) => {
  return (
    <div className="">
      <h3 className="text-gray-500 text-lg my-1">Quantity</h3>
      <div className="text-2xl flex items-center justify-evenly gap-4 border-[1px] w-[50%] py-2 font-extralight">
        <span
          onClick={() => setValue((prev: number) => (prev == 1 ? 1 : prev - 1))}
        >
          -
        </span>
        <span>{value}</span>
        <span onClick={() => setValue((prev: number) => prev + 1)}>+</span>
      </div>
    </div>
  );
};

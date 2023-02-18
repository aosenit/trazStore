import React from "react";
import Congrats from "../../component/checkout/Congrats";

const Checkout = () => {
  return (
    <div className="pt-[100px]">
      <div className="bg-gray-100">
        <ul className="steps my-6 w-full text-[14px]">
          <li className="step step-success">Shipping</li>
          <li className="step step-success">Payment</li>
          <li className="step step-success">Review</li>
        </ul>
      </div>
      <Congrats />
    </div>
  );
};

export default Checkout;

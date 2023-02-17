import React, { useEffect, useState } from "react";
import useProtectedRoute from "../../hooks/useProtectedRoute";
import useCart from "../../hooks/useCart";
import { useAuth } from "../../state-manager/useAuth";
import { useCartState } from "../../state-manager/useCartState";
import { useRouter } from "next/router";

const Carts = () => {
  //   useProtectedRoute();
  const router = useRouter();
  const { cartDoc } = useCartState();
  const total = cartDoc?.reduce(
    (acc: any, item: any) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="md:my-20">
      <div className="mx-8 md:w-[60%] md:mx-auto">
        <div className="flex justify-between items-center my-6">
          <h3 className="text-2xl">Your Cart</h3>
          <p
            onClick={() => router.push("/products")}
            className="text-[16px] underline cursor-pointer"
          >
            Continue Shopping{" "}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-[14px]">Product</p>
          <p className="text-[14px]">Total</p>
        </div>
        <hr className="border-[1px] border-gray-200 my-2" />
        <div className="grid gap-10 my-5">
          {" "}
          {cartDoc?.map((cart: any, i: number) => {
            return (
              <div className="flex justify-between items-center " key={i}>
                <div className="flex gap-3 items-center">
                  <img
                    src={cart.src}
                    alt="cart image"
                    className="w-[100px] h-[70px]"
                  />
                  <p className="text-[14px]">{cart?.name}</p>
                </div>
                <h3 className="text-lg">{cart.quantity}</h3>
                <h3 className="text-xl">
                  $
                  {(Math.round(cart.price * cart.quantity * 100) / 100).toFixed(
                    2
                  )}
                </h3>
              </div>
            );
          })}
        </div>
        <hr className="border-[1px] border-gray-200 my-2" />
        <div className="md:flex items-end flex-col">
          <div className="my-5 flex items-center gap-5 text-center justify-center">
            <h4 className="text-xl">Subtotal:</h4>
            <p className="text-lg">${total}</p>
          </div>
          <p className="text-gray-400 my-2">
            Taxes and shipping calculated at checkout
          </p>
          <button className="my-2 w-full px-5 py-4 bg-black text-white transition hover:bg-gray-900 md:w-[300px]">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carts;

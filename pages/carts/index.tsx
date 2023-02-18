import React, { useEffect, useState } from "react";
import useProtectedRoute from "../../hooks/useProtectedRoute";
import useCart from "../../hooks/useCart";
import { useAuth } from "../../state-manager/useAuth";
import { useCartState } from "../../state-manager/useCartState";
import { useRouter } from "next/router";
import Loader from "../../component/Loader";

const Carts = () => {
  useProtectedRoute();
  const router = useRouter();
  const { getCart, loading: cartLoading } = useCart();

  const { cartDoc, setCartDoc } = useCartState();
  const [clicked, setClicked] = useState(false);

  const { user } = useAuth();
  const { deleteCart, loading } = useCart();

  const total = cartDoc?.reduce(
    (acc: any, item: any) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const getCartInfo = async () => {
      const newCart = await getCart(user?.uid);

      setCartDoc(newCart);
    };

    getCartInfo();
  }, [user?.uid, clicked]);

  if (loading) return <Loader />;

  if (cartDoc?.length < 1)
    return (
      <div className="grid place-content-center pt-[200px] mb-[100px] md:my-20 text-center">
        <h2 className="text-xl">Opps!! No Item in Cart</h2>
        <p
          onClick={() => router.push("/products")}
          className="text-[16px] underline cursor-pointer"
        >
          Continue Shopping{" "}
        </p>
      </div>
    );

  return (
    <section className="pt-[100px] mb-10 md:my-20">
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
          <p className="text-[14px]">Quantity</p>
          <p className="text-[14px]">Total</p>
        </div>
        <hr className="border-[1px] border-gray-200 my-2" />
        <div className="grid gap-10 my-5">
          {" "}
          {cartDoc?.map((cart: any, i: number) => {
            return (
              <div className="flex justify-between items-center " key={i}>
                <div className="flex gap-3 flex-col items-start">
                  <img
                    src={cart.src}
                    alt="cart image"
                    className="w-[100px] h-[70px] "
                  />
                  <p className="text-[14px]">{cart?.name}</p>
                </div>
                <h3 className="text-lg  ">
                  <span>{cart.quantity}</span>
                </h3>
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
            <p className="text-lg">
              ${(Math.round(total * 100) / 100).toFixed(2)}
            </p>
          </div>
          <p className="text-gray-400 my-2">
            Taxes and shipping calculated at checkout
          </p>
          <button
            className="my-2 w-full px-5 py-4 bg-black text-white transition hover:bg-gray-900 md:w-[300px] cursor-pointer"
            onClick={() => {
              deleteCart(user?.uid, setCartDoc);
              router.push("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carts;

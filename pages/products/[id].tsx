import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../component/Card";
import useProduct from "../../hooks/useProduct";
import useData from "../../hooks/useGetData";
import { QuantityHandler } from "../../component/QuantityHandler";
import useProtectedRoute from "../../hooks/useProtectedRoute";
import { useAuth } from "../../state-manager/useAuth";

import { db, addDoc, collection } from "../../firebase/Firebase";
import useCart from "../../hooks/useCart";
import { useCartState } from "../../state-manager/useCartState";
import Loader from "../../component/Loader";

interface IInitialState {
  name: string;
  src: string;
  price: any;
  userId: string;
  quantity: number;
}

// const initialCartState: IInitialState = {
//   name: "",
//   src: "",
//   price: "",
//   userId: "",
//   quantity: 1,
// };

const Product = () => {
  useProtectedRoute();
  const router = useRouter();
  const { user } = useAuth();
  const [value, setValue] = useState(1);

  const { getCart, loading: cartLoading } = useCart();
  const { cartDoc, setCartDoc } = useCartState();

  const { id } = router.query;
  const { data, isLoading, error } = useProduct(id);
  const [clicked, setClicked] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCartInfo = async () => {
      const newCart = await getCart(user?.uid);

      setCartDoc(newCart);
    };

    getCartInfo();
  }, [user?.uid, clicked]);
  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useData(
    `https://dummyjson.com/products/category/${data?.category}`,
    "category"
  );

  if (cartLoading || categoryLoading) return <Loader />;
  if (error || categoryError) console.log(error);

  const categoryList = categoryData?.products?.map((category: any) => {
    return <Card key={category.id} category={category} />;
  });

  const newPrice = () => {
    return (
      data?.price -
      (data?.price * data?.discountPercentage) / 100
    ).toFixed(2);
  };

  const addToCart = async () => {
    const cart: IInitialState = {
      name: data.title,
      src: data.thumbnail,
      price: newPrice(),
      quantity: value,
      userId: user.uid,
    };
    setLoading(true);
    setClicked(true);
    try {
      const docRef = await addDoc(collection(db, "cart"), cart);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
      setValue(1);
      setClicked(false);
    }
  };

  return (
    <div className="w-full overflow-hidden px-8 py-5">
      <div className="lg:grid grid-cols-3 gap-8 lg:my-6">
        <div className="w-full carousel lg:col-span-2 lg:grid grid-cols-2 gap-4">
          {data?.images.map((image: string, i: number) => {
            return (
              <div className="carousel-item w-full relative" key={i}>
                <div className="w-full bg-gray-200 grid place-content-center p-5 cursor-pointer">
                  <img
                    src={image}
                    className="object-contain h-[250px]"
                    alt={data.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          {" "}
          <div className="my-4 text-xl">
            <h2 className="text-3xl">{data?.title}</h2>
            <p className="text-[14px] font-light my-3">{data?.description}</p>
            <div className="flex items-center gap-3 font-light">
              <p className="line-through">${data?.price} </p>
              <p>${newPrice()}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <QuantityHandler setValue={setValue} value={value} />
            <button
              className="border-[1px] w-full py-3 cursor-pointer"
              onClick={addToCart}
            >
              {loading ? "Loading..." : "Add to Cart"}
            </button>
            <button className="bg-black w-full py-3 text-white cursor-pointer">
              Buy it now
            </button>
          </div>
          <div className="font-light py-6">
            <h3 className="text-lg">Free Shipping</h3>
            <p className="text-[14px]">
              We offer free worldwide express shipping on all orders. You will
              receive your order an estimated 1–4 days after shipment.
            </p>
          </div>
          <div className="font-light py-2">
            <h3 className="text-lg">Hassle-Free Exchanges</h3>
            <p className="text-[14px]">
              Exchanges are free. Try from the comfort of your home. We will
              collect from your home, work or an alternative address.
            </p>
          </div>
        </div>
      </div>
      {categoryData.products.length > 1 && (
        <div className="mt-8 lg:my-16">
          <h3 className="text-lg font-semibold">You may Also like</h3>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categoryList}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

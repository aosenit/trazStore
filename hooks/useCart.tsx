import React, { useState } from "react";
import { collection, getDocs, db, query, where } from "../firebase/Firebase";

const useCart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCart = async (id: any) => {
    setLoading(true);
    try {
      const q = query(collection(db, "cart"), where("userId", "==", id));
      const querySnapshot = await getDocs(q);

      const cartData: any = [];

      querySnapshot.forEach((doc) => {
        cartData.push(doc.data());
      });
      return cartData;
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { getCart, loading };
};

export default useCart;

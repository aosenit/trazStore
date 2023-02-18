import React, { useState } from "react";
import {
  collection,
  getDocs,
  db,
  query,
  where,
  deleteDoc,
} from "../firebase/Firebase";

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

  async function deleteCart(
    uid: string,
    setCartData: (cartData: any[]) => void
  ) {
    setLoading(true);
    try {
      const q = query(collection(db, "cart"), where("userId", "==", uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const docRef = doc.ref;
        deleteDoc(docRef);
      });
      const updatedCartData = await getCart(uid);
      setCartData(updatedCartData);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { getCart, deleteCart, loading };
};

export default useCart;

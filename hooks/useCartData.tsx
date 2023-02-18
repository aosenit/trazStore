import { db, collection, query, where, onSnapshot } from "../firebase/Firebase";
import { useEffect } from "react";
import { useCartState } from "../state-manager/useCartState";

export function useCartData(uid: string) {
  const { setCartDoc } = useCartState();

  useEffect(() => {
    const q = query(collection(db, "cart"), where("uid", "==", uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newCartData: any = [];

      querySnapshot.forEach((doc) => {
        newCartData.push({ id: doc.id, ...doc.data() });
      });

      setCartDoc(newCartData);
    });

    return unsubscribe;
  }, [uid, setCartDoc]);
}

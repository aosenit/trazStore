import { useEffect } from "react";
import { useCartData } from "./useCartData";

function GetCart({ uid }: any) {
  useCartData(uid);

  return null;
}

export default GetCart;

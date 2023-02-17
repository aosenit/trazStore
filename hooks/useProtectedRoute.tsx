import React, { useEffect } from "react";
import { useAuth } from "../state-manager/useAuth";
import { useRouter } from "next/router";

const useProtectedRoute = () => {
  const { user } = useAuth();
  const token = user?.uid;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (!token && isProtectedRoute(router.pathname)) {
        router.replace("/signin");
      } else if (token && router.pathname === "/signin") {
        router.replace("/products");
      } else if (!token && isDynamicProtectedRoute(router.pathname)) {
        router.replace("/signin");
      }
    };

    handleRouteChange();
  }, [router, token]);
};

export default useProtectedRoute;

const isProtectedRoute = (pathname: string) => {
  const protectedRoutes = ["/products", "/carts", "/checkout"];
  return protectedRoutes.some((route) => pathname.includes(route));
};

const isDynamicProtectedRoute = (pathname: string) => {
  return pathname.startsWith("/products/") && pathname.split("/").length === 3;
};

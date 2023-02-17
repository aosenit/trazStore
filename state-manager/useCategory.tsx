import React, { createContext, useContext, useState } from "react";
import useData from "../hooks/useGetData";

interface ICategory {
  isLoading: boolean;
  error: any;
  data: string[];
}

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const CategoryContext = createContext<ICategory>(initialState);

export const CategoryProvider = ({ children }: any) => {
  const { isLoading, error, data } = useData(
    "https://dummyjson.com/products/categories",
    "categories"
  );
  if (isLoading) return <>Loading</>;
  if (error) return <>Error Occured!</>;

  return (
    <CategoryContext.Provider value={{ isLoading, error, data }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);
export default useCategory;

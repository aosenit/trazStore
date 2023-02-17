import useSWR from "swr";
import axios from "axios";

const useAllProducts = () => {
  const { data, error } = useSWR("products", async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  });

  return { products: data, isLoading: !error && !data, isError: error };
};

export default useAllProducts;

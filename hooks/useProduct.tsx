import useSWR from "swr";
import axios from "axios";

const useProduct = (id: any) => {
  const fetcher = () =>
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => res.data);

  const { data, error, isLoading } = useSWR(["product", id], fetcher);

  return { data, error, isLoading };
};

export default useProduct;

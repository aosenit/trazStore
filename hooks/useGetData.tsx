import useSWR from "swr";
import axios from "axios";

const useData = (url: string, key: string) => {
  const fetcher = () => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR([key, url], fetcher);

  return { data, error, isLoading };
};

export default useData;

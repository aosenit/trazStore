import axios from "axios";
import React, { useState } from "react";
import useSWR from "swr";

const usePost = (url: string, userData: any) => {
  const [loading, setLoading] = useState(false);
  const postData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(url, userData);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading };
};

export default usePost;

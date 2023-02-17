import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
} from "../firebase/Firebase";

interface ISingIn {
  password: string;
  email: string;
}

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const signIn = async (data: any) => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = res.user;
      return user;
    } catch (error: any) {
      const errorMessage = error.message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: any) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = res.user;
      return user;
    } catch (error: any) {
      const errorMessage = error.message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return { signIn, signUp, loading, error };
};

export default useRegister;

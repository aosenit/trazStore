import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { useAuth } from "../../state-manager/useAuth";
import { useRouter } from "next/router";
import usePost from "../../hooks/usePost";
import useProtectedRoute from "../../hooks/useProtectedRoute";
import useRegister from "../../hooks/useRegister";

interface ISignUp {
  email: string;
  password: string;
}

const initialState = {
  email: "",
  password: "",
};

const SignIn: NextPage = () => {
  useProtectedRoute();
  const [data, setData] = useState<ISignUp>(initialState);
  const { signIn, loading, error } = useRegister();
  const { dispatch } = useAuth();
  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn(data);

    if (res) {
      dispatch({ type: "login", payload: res?.providerData[0] });
      setData(initialState);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In Page</title>
        <meta
          name="description"
          content="This is the sign up page of the website."
        />
      </Head>
      <div className="w-full h-[calc(100vh_-_100px)] pt-20">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="grid gap-4 pt-8">
          <div className="mx-8 grid gap-4  justify-center ">
            {" "}
            <input
              placeholder="Email"
              type="email"
              className="input input-bordered min-w-full  w-[300px] max-w-xs"
              value={data.email}
              name="email"
              onChange={onChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full max-w-xs"
              value={data.password}
              onChange={onChange}
            />
            <a href="#" className="text-left underline  ">
              Forget Password
            </a>
          </div>

          <div className="flex justify-center pt-6">
            <button
              className="btn px-10 py-2 disabled:bg-slate-200 disabled:pointer-events-none"
              type="submit"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>
          <a href="/signup" className="text-center underline ">
            Create account
          </a>
        </form>
      </div>
    </>
  );
};

export default SignIn;

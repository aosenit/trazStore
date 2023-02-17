import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import useProtectedRoute from "../../hooks/useProtectedRoute";
import { useAuth } from "../../state-manager/useAuth";
import usePost from "../../hooks/usePost";
import useRegister from "../../hooks/useRegister";
import { useRouter } from "next/router";

interface ISignUp {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: ISignUp = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

const SignUp: NextPage = () => {
  useProtectedRoute();

  const router = useRouter();
  const { dispatch } = useAuth();
  const { signUp, loading, error } = useRegister();
  const [data, setData] = useState<ISignUp>(initialState);
  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signUp(data);

    if (res) {
      dispatch({ type: "login", payload: res?.providerData[0] });
      setData(initialState);
      router.push("/signin");
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up Page</title>
        <meta
          name="description"
          content="This is the sign up page of the website."
        />
      </Head>
      <div className="w-full h-[calc(100vh_-_100px)] pt-20">
        <h1 className="text-3xl font-bold text-center">Create an Account</h1>
        <form onSubmit={handleSubmit} className="grid gap-4 pt-8">
          <div className="mx-8 grid gap-4 justify-center">
            <input
              onChange={onChange}
              value={data.firstName}
              type="text"
              placeholder="First Name"
              className="input input-bordered min-w-full  w-[300px] max-w-xs"
              name="firstName"
            />
            <input
              onChange={onChange}
              value={data.lastName}
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs"
              name="lastName"
            />
            <input
              onChange={onChange}
              value={data.email}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              name="email"
            />

            <input
              onChange={onChange}
              value={data.username}
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs"
              name="username"
            />
            <input
              onChange={onChange}
              value={data.password}
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
              name="password"
            />
          </div>

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="btn px-10 py-2 disabled:bg-slate-200 disabled:pointer-events-none"
              disabled={loading}
            >
              {loading ? "Loading..." : "Create"}
            </button>
          </div>

          <p
            onClick={() => router.push("/signin")}
            className="text-center underline "
          >
            Already have an account
          </p>

          {error && (
            <p className="text-[14px] bg-red-500 text-white px-2 py-1 text-center mx-8">
              {error}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;

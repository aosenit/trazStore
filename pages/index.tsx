import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../component/home/Hero";
import MainOne from "../component/home/MainOne";
import useProtectedRoute from "../hooks/useProtectedRoute";

const Home: NextPage = () => {
  useProtectedRoute();
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of the website."
        />
      </Head>
      <Hero />
      <MainOne />
    </>
  );
};

export default Home;

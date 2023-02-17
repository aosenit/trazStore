import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const Layout = ({ children }: any) => {
  const router = useRouter();

  const [theme, setTheme] = useState("light");

  const themes = ["dark", "light"];
  let change = 0;
  const changeTheme = () => {
    change > themes.length - 1 ? change == 0 : change++;

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div data-theme={theme} className="h-full w-full">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      {router.pathname !== "/404" && (
        <header>
          <Header setTheme={setTheme} theme={theme} />
        </header>
      )}
      <main>{children}</main>
      {router.pathname !== "/404" && <Footer />}
    </div>
  );
};

export default Layout;

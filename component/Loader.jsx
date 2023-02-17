import React from "react";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <section className="grid place-content-center h-screen w-full">
      <ReactLoading type={"spin"} color={"green"} height={50} width={50} />
    </section>
  );
};

export default Loader;

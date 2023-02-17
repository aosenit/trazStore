import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh_-_100px)] bg-[url('https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=800')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl ">Industrial design meets fashion</h1>
          <p className="mb-5">Atypical leather goods</p>

          <button className="btn btn-outline text-green-400">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

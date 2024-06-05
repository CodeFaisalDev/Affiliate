import React from "react";

const Hero = () => {
  return (
    <div
      className="hero h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="hero-content text-center bg-opacity-50 bg-gray-800 p-10 rounded-md">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">Amazon Best Finds</h1>
          <p className="py-6 text-white">
            Get the best product form amazon in all categories
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

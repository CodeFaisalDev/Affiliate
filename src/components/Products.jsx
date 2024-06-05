import React from "react";

const Products = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-4xl font-semibold mb-5">All Finds</h1>
      </div>

      <div className="grid grid-cols-3 gap-3">

      <div className="card mb-6 card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Product Name</h2>
          <p>Product Description</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Now</button>
          </div>
        </div>
      </div>

      
      </div>
    </div>
  );
};

export default Products;

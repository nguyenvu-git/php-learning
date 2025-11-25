import React from "react";
import { useState, useEffect } from "react";

const ProductList = ({ product }) => {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {product.map((item) => (
          <div className="border" key={item.id}>
            <img src={item.thumbnail} alt="" />
            <p className="">{item.title}</p>
            <p className="">{item.price}</p>
          </div>
        ))}
      </div>

      
    </>
  );
};

export default ProductList;

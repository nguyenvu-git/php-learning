import React from "react";
import ProductCardd from "./ProductCardd";
const ProductListt = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-4">
      {products.map((item) => (
        <ProductCardd key={item.id} item={item}></ProductCardd>
      ))}
    </div>
  );
};

export default ProductListt;

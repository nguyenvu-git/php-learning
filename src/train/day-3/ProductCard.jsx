import React from "react";
import { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
const ProductCard = ({ category }) => {
  return (
    <>
      <div className="gap-2 flex flex-wrap">
        {category.map((cate) => (
          <div className="" key={cate.slug}>
            <p className="">{cate.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;

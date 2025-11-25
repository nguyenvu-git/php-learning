import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${item.id}`)}
      className="border-2 border-gray-300 rounded p-2 w-[200px] hover:border-black cursor-pointer"
    >
      <img
        src={item.thumbnail}
        alt=""
        className="w-full h-[150px] object-cover rounded"
      />
      <h3 className="mt-2 text-[14px] font-medium">{item.title}</h3>
      <p className="mt-1 font-semibold">{item.price}</p>
    </div>
  );
};

export default ProductCard;

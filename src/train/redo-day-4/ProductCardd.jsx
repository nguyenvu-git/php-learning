import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCardd = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${item.id}`)}
      className="border p-4 rounded-lg shadow-md"
    >
      <img src={item.thumbnail} alt="" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </div>
  );
};

export default ProductCardd;

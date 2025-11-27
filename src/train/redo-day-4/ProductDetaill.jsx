import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const ProductDetaill = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <p>Đang tải sản phẩm...</p>;
  }
  return (
    <div className="flex flex-wrap gap-6">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-[300px] rounded"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-lg mt-2 font-medium">${product.price}</p>
        <p className="mt-2">⭐ {product.rating}</p>
        <p className="mt-4">{product.description}</p>
        <p className="mt-2 italic">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetaill;

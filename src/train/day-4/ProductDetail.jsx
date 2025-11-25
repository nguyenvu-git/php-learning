
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found</div>;
  return (
    <div className="w-[80%] mx-auto my-6">
      <button
        className="mb-4 px-4 py-2 border rounded"
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </button>

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
    </div>
  );
};

export default ProductDetail;

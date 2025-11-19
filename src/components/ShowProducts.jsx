import { useState, useEffect } from "react";
export default function ShowProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
      {loading && <p>Dang tai ...</p>}
      <div className="w-[80%] mx-auto flex flex-wrap gap-4">
        <p>dn</p>
        {product.map((pr) => (
          <div key={pr.slug} className="">
            <img src={pr.url} alt="" />
            <p className="">{pr.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

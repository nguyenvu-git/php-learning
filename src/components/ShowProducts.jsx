import { useState, useEffect, use } from "react";
export default function ShowProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState([]);
  const [selected, setSelected] = useState(false);
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

  const fetchCategory = async (cate) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${cate}`
      );
      const data = await res.json();
      setActiveCategory(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
    setSelected(true);
  }, []);

  const handleClickCate = (cate) => {
    fetchCategory(cate);
  };
  return (
    <>
      {loading && <p>Dang tai ...</p>}
      <div className="w-[80%] mx-auto flex flex-wrap gap-4">
        <p>dn</p>
        {product.map((pr) => (
          <div
            key={pr.slug}
            className=""
            onClick={() => handleClickCate(pr.slug)}
          >
            <img src={pr.url} alt="" />
            <p className="">{pr.name}</p>
          </div>
        ))}

        {!loading && selected && (
          <>
            <h3>📦 Sản phẩm trong danh mục: {selected}</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 20,
                marginTop: 20,
              }}
            >
              {activeCategory.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: 15,
                    border: "1px solid #ddd",
                    borderRadius: 10,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: 140,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                  <h4 style={{ fontSize: 16, marginTop: 10 }}>{item.title}</h4>
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    ${item.price}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

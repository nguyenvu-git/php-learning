import { useState, useEffect } from "react";
export default function HomeProducts() {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProduct(data.products);
        setFilter(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...product];

    if (search.trim() !== "") {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }

    setFilter(result);
  }, [product, search, category]);

  return (
    <>
      {loading && <p>Dang tai ...</p>}
      <div className="w-[80%] mx-auto">
        <input
          type="search"
          className=" w-full border-2 hover border-gray-500 focus:border-black p-4 rounded-2xl"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          value={search}
        />

        <div className="mt-2">
          <select
            className="py-2 px-4 border-2 rounded-[6px] border-gray-500 focus:border-black"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-4">
          {filter.length > 0 ? (
            filter.map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-500 py-4 px-2 w-[30%] rounded-sm hover:border-black"
              >
                <img src={item.thumbnail} className="" alt="" />
                <p className="text-[14px] mt-2">{item.title}</p>
                <p className="font-medium">{item.price}$</p>
              </div>
            ))
          ) : (
            <p className="mt-4 text-gray-600">Không tìm thấy sản phẩm nào</p>
          )}
        </div>
      </div>
    </>
  );
}

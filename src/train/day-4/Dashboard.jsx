import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import FilterBar from "./FilterBar";
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterCate, setFilterCate] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);

        const uniqueCategories = [
          ...new Set(data.products.map((p) => p.category)),
        ];
        setCategory(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (search.trim() !== "") {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filterCate !== "all") {
      result = result.filter((item) => item.category === filterCate);
    }

    setFilter(result);
    setPage(1);
  }, [filterCate, search, products]);

  const start = (page - 1) * limit;
  const end = start + limit;
  const currentPageData = filter.slice(start, end);
  const totalPages = Math.ceil(filter.length / limit);

  return (
    <>
      <div className="w-[80%] mx-auto mt-24">
        <FilterBar
          categories={category}
          onCharge={(e) => setFilterCate(e.target.value)}
          onSearch={(e) => setSearch(e.target.value)}
        ></FilterBar>

        <ProductList products={currentPageData} />

        {filter.length > limit && (
          <div className="flex items-center gap-4 my-6 justify-center">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Trang trước
            </button>

            <span>
              {page}/{totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Trang sau
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;

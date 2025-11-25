import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterCate, setFilterCate] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 9;
  useEffect(() => {
    const handleViewCategory = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategory(data);
      } catch (error) {
        console(error);
      } finally {
        setLoading(false);
      }
    };
    handleViewCategory();
  }, []);

  useEffect(() => {
    const handleViewProducts = async () => {
      setLoading(true);
      try {
        const skip = (page - 1) * limit;
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        const data = await res.json();
        setProduct(data.products);
        setFilter(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleViewProducts();
  }, [page]);

  useEffect(() => {
    let result = [...product];

    if (filterCate !== "all") {
      result = result.filter((item) => item.category === filterCate);
    }

    if (search.trim() !== "") {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilter(result);
  }, [filterCate, product, search]);
  useEffect;
  return (
    <>
      <div className="w-[80%] mx-auto">
        <FilterBar
          onCharge={(e) => setFilterCate(e.target.value)}
          onSearch={(e) => setSearch(e.target.value)}
        ></FilterBar>
        <ProductCard category={category}></ProductCard>
        <ProductList product={filter}></ProductList>

        {/* {filter.length > 9 && (
          <div className="flex items-center gap-4 my-6 justify-center">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Trang trước
            </button>

            <span>Trang {page}</span>

            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => setPage(page + 1)}
            >
              Trang sau
            </button>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Dashboard;

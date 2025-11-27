import React from "react";
import FilterBarr from "./FilterBarr";
import { useState, useEffect } from "react";
import ProductListt from "./ProductListt";
const Dashboardd = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const [filterCate, setFilterCate] = useState("all");
  const [category, setCategory] = useState([]);
  
  const [page, setPage] = useState(1);
  const limit = 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  const currentPageData = filter.slice(start, end);
  const totalPages = Math.ceil(filter.length / limit);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const data = await response.json();
        setProducts(data.products);
        setFilter(data.products);
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
  }, [search, products, filterCate]);

  return (
    <div className="w-[80%] mx-auto mt-10">
      <FilterBarr
        onSearch={(e) => setSearch(e.target.value)}
        category={category}
        onChange={(e) => setFilterCate(e.target.value)}
      ></FilterBarr>
      <ProductListt products={currentPageData}></ProductListt>

      {filter.length > limit && (
        <div className="flex justify-center gap-4 my-6">
          <button
            onClick={() => setPage(page - 1)}
            className="border p-2 rounded-full cursor-pointer"
            disabled={page === 1}
          >
            Sau
          </button>
          <p>
            {page}/{totalPages}
          </p>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="border p-2 rounded-full cursor-pointer"
          >
            Truoc
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboardd;

import React from "react";

const FilterBar = ({ categories = [], onSearch, onCharge }) => {
  return (
    <div className="flex flex-col flex-wrap gap-4 my-4">
      <input
        type="text"
        placeholder="Search product..."
        onChange={onSearch}
        className="p-2 border rounded w-[100%] focus:outline-none focus:border-black"
      />
      <select
        onChange={onCharge}
        className="w-[30%] p-2 border rounded focus:outline-none focus:border-black"
      >
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;

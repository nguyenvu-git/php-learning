import React from "react";

const FilterBarr = ({ onSearch, category, onChange }) => {
  return (
    <div className="">
      <input
        onChange={onSearch}
        type="text"
        className="w-full py-2 px-4 border rounded-2xl"
        placeholder="Search"
      />

      <select onChange={onChange} className="py-2 px-4 border rounded-2xl mt-4">
        <option value="all">All</option>
        {category.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBarr;

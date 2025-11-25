import React from "react";

const FilterBar = ({ onCharge, onSearch, onSale }) => {
  return (
    <div className="w-full">
      <input
        onChange={onSearch}
        type="search"
        className=" w-full px-4 py-2 border rounded-2xl"
        placeholder="Search"
      />
      <div className="flex gap-2">
        <select onChange={onCharge} className="rounded-2xl p-2 border mt-2">
          <option value="all">All</option>
          <option value="beauty">Beautiful</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>

        {/* <select onChange={onCharge} className="rounded-2xl p-2 border mt-2">
          <option value="all">All</option>
          <option value="beauty">Beautiful</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select> */}
      </div>
    </div>
  );
};

export default FilterBar;

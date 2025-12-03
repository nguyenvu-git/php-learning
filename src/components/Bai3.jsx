import React from "react";
import { useState } from "react";
const Bai3 = () => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    alert("Bạn đã nhấn nút!");
  };

  const showArray = () => {
    const arr = ["Nguyen", "Hoang", "Hai", "Giang", "Huy"];

    console.log(arr);
  };

  const handleInputChange = (e) => {
    if (inputValue === "") {
      alert("Vui long nhap du lieu");
    }
  };
  return (
    <div className="w-[80%] mx-auto mt-6 flex flex-col gap-4 mb-4">
      <button
        onClick={handleClick}
        className="py-2 px-4 rounded-2xl border hover:border-2 w-[30%]"
      >
        Click
      </button>

      <div className="">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="py-2 px-4 border rounded-2xl w-[80%]"
          placeholder="Nhap"
        ></input>
        <button
          onClick={handleInputChange}
          className="ml-4 py-2 px-6 rounded-2xl border hover:border-2"
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Bai3;

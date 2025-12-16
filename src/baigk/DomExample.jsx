import { useState } from "react";

export default function DomExample() {
  const [title, setTitle] = useState("Xin chào DOM!");
  const [firstParagraphClass, setFirstParagraphClass] = useState("text-black");

  const handleChangeContent = () => {
    setTitle("Nội dung đã thay đổi!");
    setFirstParagraphClass("text-red-600"); 
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">{title}</h1>

      <p className={`mb-2 ${firstParagraphClass}`}>
        Đây là một đoạn văn có class.
      </p>
      <p className="mb-2 font-semibold">
        Đây là đoạn văn thứ hai có cùng class.
      </p>

      <button
        onClick={handleChangeContent}
        className="mb-4 px-2 py-1 border rounded"
      >
        Thay đổi nội dung
      </button>

      <ul>
        <li className="bg-yellow-300 mb-1 px-2">Phần tử 1</li>
        <li className="mb-1 px-2">Phần tử 2</li>
        <li className="mb-1 px-2">Phần tử 3</li>
      </ul>
    </div>
  );
}

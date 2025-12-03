import { useRef } from "react";

export default function TextInspector() {
  const textRef = useRef();

  const handleGetColor = () => {
    const color = getComputedStyle(textRef.current).color;
    alert(`Màu hiện tại: ${color}`);
  };

  const handleGetStyle = () => {
    const style = getComputedStyle(textRef.current);
    alert(`Kích thước: ${style.fontSize}\nĐộ đậm: ${style.fontWeight}`);
  };

  return (
    <div className="p-6">
      <p ref={textRef} className="text-red-500 text-lg font-medium mb-4">
        Đây là đoạn văn mẫu
      </p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition"
        onClick={handleGetColor}
      >
        Lấy mã màu
      </button>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        onClick={handleGetStyle}
      >
        Lấy kích thước/độ đậm
      </button>
    </div>
  );
}

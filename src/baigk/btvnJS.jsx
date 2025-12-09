import React from "react";
import { useState } from "react";
const BtvnJS = () => {
  const [dom, setDom] = useState(false);

  const [img, setImg] = useState(true);
  const [text, setText] = useState(false);

  const handleChangeImg = () => {
    setImg(!img);
    setText(!text);
  };
  const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };

  const oneUpFive = () => {
    let i = 1;
    while (i < 5) {
      i++;
      console.log(i);
    }
  };

  const oneUpFive2 = () => {
    let i = 1;
    do {
      i++;
      console.log(i);
    } while (i < 5);
  };

  const oneUpFive3 = () => {
    for (let i = 1; i <= 5; i++) {
      if (i === 5) break;
      console.log(i);
    }
  };

  const checkForEvenNumber = () => {
    for (let i = 1; i <= 10; i++) {
      if (i % 2 !== 0) continue;
      console.log(i);
    }
  };

  const testSetTimeout = () => {
    setTimeout(() => {
      console.log("Hello after 2 seconds");
    }, 2000);

    setInterval(() => {
      console.log("Hello every 3 seconds");
    }, 3000);
  };

  const arrayList = () => {
    // 1. Khai báo chuỗi
    let text = " JavaScript là một ngôn ngữ lập trình tuyệt vời! ";

    // 2. Lấy độ dài chuỗi
    console.log("Độ dài chuỗi:", text.length);

    // 3. Lấy ký tự trong chuỗi
    console.log("Ký tự đầu tiên:", text.charAt(0));
    console.log("Mã ASCII của ký tự đầu:", text.charCodeAt(0));
    console.log("Dùng cú pháp []:", text[0]);

    // 4. Cắt chuỗi
    console.log("slice(2, 10):", text.slice(2, 10));
    console.log("substring(2, 10):", text.substring(2, 10));
    console.log("substr(2, 10):", text.substr(2, 10));

    // 5. Chuyển đổi chữ hoa, chữ thường
    console.log("Viết hoa:", text.toUpperCase());
    console.log("Viết thường:", text.toLowerCase());

    // 6. Nối chuỗi
    let str1 = "Xin chào";
    let str2 = "JavaScript";
    console.log("Nối bằng concat():", str1.concat(" ", str2));
    console.log("Nối bằng dấu + :", str1 + " " + str2);

    // 7. Loại bỏ khoảng trắng
    console.log("Sau trim():", text.trim());
    console.log("Sau trimStart():", text.trimStart());
    console.log("Sau trimEnd():", text.trimEnd());

    // 8. Kiểm tra chuỗi
    console.log("Có chứa 'JavaScript'?", text.includes("JavaScript"));
    console.log("Bắt đầu bằng 'JavaScript'?", text.startsWith("JavaScript"));
    console.log("Kết thúc bằng 'vời!'?", text.endsWith("vời!"));

    // 9. Tìm kiếm chuỗi
    console.log("Vị trí đầu tiên của 'a':", text.indexOf("a"));
    console.log("Vị trí cuối cùng của 'a':", text.lastIndexOf("a"));
    console.log("Vị trí 'lập trình':", text.search("lập trình"));

    // 10. Thay thế chuỗi
    console.log(
      "Thay 'JavaScript' thành 'JS':",
      text.replace("JavaScript", "JS")
    );
    console.log("Thay tất cả 'a' thành 'A':", text.replaceAll("a", "A"));

    // 11. Tách chuỗi
    let words = "HTML, CSS, JavaScript, React";
    console.log("Tách thành mảng:", words.split(", "));

    // 12. Template Literals
    let name = "Alice";
    let age = 25;
    let message = `Tên: ${name}, Tuổi: ${age}, đang học ${str2}`;
    console.log(message);

    // 13. Chuỗi nhiều dòng
    let multiLine = `Dòng 1
Dòng 2
Dòng 3`;
    console.log(multiLine);
  };

  const timeJS = () => {
    // 1. Tạo đối tượng ngày giờ
    let myDate = new Date();
    console.log("Thời gian hiện tại:", myDate);

    // 2. Lấy năm, tháng, ngày
    console.log("Năm:", myDate.getFullYear());
    console.log("Tháng:", myDate.getMonth() + 1);
    console.log("Ngày:", myDate.getDate());

    // 3. Lấy giờ, phút, giây
    console.log("Giờ:", myDate.getHours());
    console.log("Phút:", myDate.getMinutes());
    console.log("Giây:", myDate.getSeconds());

    // 4. Chỉnh sửa ngày tháng
    myDate.setFullYear(2025);
    myDate.setMonth(5); // Tháng 6
    myDate.setDate(15);
    console.log("Sau chỉnh sửa:", myDate);

    // 5. Định dạng ngày
    console.log("toDateString():", myDate.toDateString());
    console.log("ISO:", myDate.toISOString());
    console.log("Locale (vi-VN):", myDate.toLocaleDateString("vi-VN"));

    // 6. Lấy timestamp
    console.log("Timestamp:", myDate.getTime());

    // 7. Khoảng cách giữa 2 ngày
    let startDate = new Date("2024-03-01");
    let endDate = new Date("2024-03-05");
    let diffTime = endDate - startDate;
    let diffDays = diffTime / (1000 * 60 * 60 * 24);
    console.log(
      `Khoảng cách giữa ${startDate.toDateString()} và ${endDate.toDateString()} là: ${diffDays} ngày`
    );

    // 8. Cộng / trừ ngày
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + 7);
    console.log("7 ngày sau:", newDate);

    newDate.setDate(newDate.getDate() - 14);
    console.log("14 ngày trước:", newDate);
  };

  const MathJs = () => {
    // 1. Hằng số toán học
    console.log("Số PI:", Math.PI);
    console.log("Số Euler (e):", Math.E);
    console.log("Căn bậc hai của 2:", Math.SQRT2);

    // 2. Giá trị tuyệt đối
    console.log("|-10| =", Math.abs(-10));

    // 3. Làm tròn
    console.log("floor(4.7):", Math.floor(4.7));
    console.log("ceil(4.3):", Math.ceil(4.3));
    console.log("round(4.5):", Math.round(4.5));

    // 4. Lũy thừa và căn bậc hai
    console.log("2^3 =", Math.pow(2, 3));
    console.log("sqrt(16) =", Math.sqrt(16));

    // 5. Tìm số lớn nhất, nhỏ nhất
    console.log("Max:", Math.max(10, 20, 5, 40));
    console.log("Min:", Math.min(10, 20, 5, 40));

    // 6. Lượng giác
    console.log("sin 90°:", Math.sin((90 * Math.PI) / 180));
    console.log("cos 0°:", Math.cos(0));

    // 7. Số ngẫu nhiên
    console.log("Random 0-1:", Math.random());
    console.log("Random 1-100:", Math.floor(Math.random() * 100) + 1);

    // 8. Logarit
    console.log("ln(10):", Math.log(10));
    console.log("log10(100):", Math.log10(100));
  };

  const ArrayNormal = () => {
    let fruits = ["Táo", "Chuối", "Cam", "Dâu"];

    console.log("Mảng ban đầu:", fruits);

    // 1. length
    console.log("Độ dài mảng:", fruits.length);

    // 2. push()
    fruits.push("Xoài");
    console.log("Sau push:", fruits);

    // 3. pop()
    fruits.pop();
    console.log("Sau pop:", fruits);

    // 4. unshift()
    fruits.unshift("Nho");
    console.log("Sau unshift:", fruits);

    // 5. shift()
    fruits.shift();
    console.log("Sau shift:", fruits);

    // 6. slice()
    let citrus = fruits.slice(1, 3);
    console.log("slice:", citrus);

    // 7. concat()
    let moreFruits = fruits.concat(["Xoài", "Dưa hấu"]);
    console.log("concat:", moreFruits);

    // 8. indexOf()
    console.log("Vị trí của Cam:", fruits.indexOf("Cam"));

    // 9. includes()
    console.log("Có Dưa hấu không?", fruits.includes("Dưa hấu"));
  };

  const ArrayHard = () => {
    let fruits = ["Táo", "Chuối", "Cam", "Dâu"];

    // 10. sort()
    fruits.sort();
    console.log("Sau sort:", fruits);

    // 11. reverse()
    fruits.reverse();
    console.log("Sau reverse:", fruits);

    // 12. forEach()
    console.log("Duyệt mảng:");
    fruits.forEach((fruit) => console.log(fruit));

    // 13. map()
    let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
    console.log("In hoa:", upperCaseFruits);

    // 14. filter()
    let shortNames = fruits.filter((fruit) => fruit.length <= 3);
    console.log("Tên <= 3 ký tự:", shortNames);

    // 15. reduce()
    let numbers = [10, 20, 30, 40];
    let total = numbers.reduce((sum, num) => sum + num, 0);
    console.log("Tổng mảng:", total);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        {dom && (
          <div className="">
            <h1>Xin chao DOM</h1>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}

        {img && (
          <div className="w-[200px] h-[200px]">
            <img
              src="\vite.svg"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {text && (
          <div>
            <h2>Day la doan van ban thay the hinh anh</h2>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-4 mt-4 w-[80%] mx-auto">
        <button
          onClick={() => console.log(factorial(5))}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 1
        </button>
        <button
          onClick={() => oneUpFive()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 2
        </button>
        <button
          onClick={() => oneUpFive2()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 3
        </button>
        <button
          onClick={() => oneUpFive3()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 4
        </button>
        <button
          onClick={() => checkForEvenNumber()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 5
        </button>
        <button
          onClick={() => testSetTimeout()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 6
        </button>
        <button
          onClick={() => arrayList()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 7
        </button>
        <button
          onClick={() => timeJS()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 8
        </button>
        <button
          onClick={() => MathJs()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 9
        </button>
        <button
          onClick={() => ArrayNormal()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 10
        </button>
        <button
          onClick={() => ArrayHard()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Cau 11
        </button>
        <button
          onClick={() => setDom(!dom)}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Doi tuong cua DOM 1
        </button>

        <button
          onClick={() => handleChangeImg()}
          className="rounded-2xl border p-2 cursor-pointer"
        >
          Doi tuong cua DOM 2
        </button>
      </div>
    </>
  );
};

export default BtvnJS;

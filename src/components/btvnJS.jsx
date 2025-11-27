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
    let text = "JavaScript lang ngu phap don gian";

    console.log("Do dai chuoi: " + text.length);

    console.log("Ky tu dau tien: " + text.charAt(0));
    console.log("Ma ASCII ky tu dau tien: " + text.charCodeAt(0));
    console.log("Vi tri cua chuoi 'don': " + text.indexOf("don"));
    console.log("Dung cu phap [] de truy xuat ky tu: " + text[0]);

    console.log("Cat chuoi: " + text.slice(0, 10));
    console.log("substring: " + text.substring(2, 10));
    console.log("substr: " + text.substr(2, 10));

    console.log("Chuyen chuoi thanh chu hoa: " + text.toUpperCase());
    console.log("Chuyen chuoi thanh chu thuong: " + text.toLowerCase());

    let str1 = " Hello ";
    let str2 = "JavaScript";
    console.log("Noi bang concat(): " + str1.concat(str2));
    console.log("Noi bang + : " + str1 + " " + str2);

    console.log("Loai bo khoang trang bang trim(): " + text.trim());
    console.log("Chuoi sau khi trimStart(): " + text.trimStart());
    console.log("Chuoi sau khi trimEnd(): " + text.trimEnd());

    console.log(
      "Chuoi co chua JavaScript khong? " + text.includes("JavaScript")
    );
    console.log(
      "Chuoi co bat dau bang JavaScript khong? " + text.startsWith("JavaScript")
    );
    console.log(
      "Chuoi co ket thuc bang don gian khong? " + text.endsWith("don gian")
    );

    console.log("Vi tri dau tien cua chuoi 'a': " + text.indexOf("a"));
    console.log("Vi tri cuoi cung cua chuoi 'a': " + text.lastIndexOf("a"));
    console.log("Vi tri cua chuoi 'a' sau vi tri 5: " + text.indexOf("a", 5));
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

import Header from "./Header";
import {useState } from "react";

export default function BTVN1() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: name.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();
      console.log("Token:", data.token);
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Đăng nhập thành công!");
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
      }
      // localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <p>Dang tai ........</p>}
      <Header></Header>
      <div className="w-full flex h-100 mt-30">
        <div className="w-[80%] border-2 rounded-2xl p-4 flex flex-col justify-center items-center mx-auto mt-6">
          <p className="text-2xl font-semibold flex justify-center">
            Đăng nhập
          </p>
          <div className="flex-col flex w-[80%] gap-4 mt-12">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-[30px] py-6 px-4 border-2 rounded-2xl focus:border-3"
              placeholder="User Name"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="h-[30px] py-6 px-4 border-2 rounded-2xl focus:border-3"
              placeholder="Password"
            />

            <div className="flex gap-4 w-full mt-10">
              <button className="flex-1 py-4 rounded-4xl border-2 border-gray-500 hover:border-black text-gray-500 hover:text-black  font-medium cursor-pointer">
                Đăng ký
              </button>
              <button
                onClick={handleSignUp}
                className="flex-1 py-4 rounded-4xl bg-green-500 hover:bg-green-600 text-white font-medium cursor-pointer"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

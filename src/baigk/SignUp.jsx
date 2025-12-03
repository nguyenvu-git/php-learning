import { useState } from "react";

export default function SignUp({ setSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    let newErrors = { name: "", email: "", password: "", confirm: "" };

    if (!name.trim()) {
      newErrors.name = "Vui lòng nhập tên";
      hasError = true;
    }

    if (!email.trim()) {
      newErrors.email = "Vui lòng nhập email";
      hasError = true;
    }

    if (!password.trim()) {
      newErrors.password = "Vui lòng nhập password";
      hasError = true;
    } else if (password.length < 6) {
      newErrors.password = "Password ít nhất 6 ký tự";
      hasError = true;
    }

    if (!confirm.trim()) {
      newErrors.confirm = "Vui lòng nhập lại password.";
      hasError = true;
    } else if (confirm !== password) {
      newErrors.confirm = "Password không trùng khớp.";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log({
        name,
        email,
        password,
        confirm,
      });
      alert("Đăng ký thành công");
      setSubmit(false);
    }
  };

  return (
    <>
      <p className="w-full text-center text-4xl font-semibold mb-6">Sign Up</p>

      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-3">
          <input
            value={name}
            type="text"
            className={`py-2 px-4 border ${
              errors.name ? "border-red-500" : ""
            } rounded-xl `}
            placeholder="User name"
            onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <p className="text-red-500 text-[10px] min-h-[16px] text">{errors.name}</p>

          <input
            value={email}
            type="email"
            className={`py-2 px-4 border ${
              errors.email ? "border-red-500" : ""
            } rounded-xl`}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-red-500 text-[10px] min-h-[16px]">
            {errors.email}
          </p>

          <input
            value={password}
            type="password"
            className={`py-2 px-4 border ${
              errors.password ? "border-red-500" : ""
            } rounded-xl`}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 text-[10px] min-h-[16px]">
            {errors.password}
          </p>

          {/* CONFIRM */}
          <input
            value={confirm}
            type="password"
            className={`py-2 px-4 border ${
              errors.confirm ? "border-red-500" : ""
            } rounded-xl`}
            placeholder="Confirm"
            onChange={(e) => setConfirm(e.target.value)}
          />
          <p className="text-red-500 text-[10px] min-h-[16px]">
            {errors.confirm}
          </p>
        </div>

        <button
          type="submit"
          className="w-[20%] mx-auto flex items-center justify-center border mt-2 p-2 rounded-2xl cursor-pointer hover:bg-black hover:text-white"
        >
          Create account
        </button>
      </form>
    </>
  );
}

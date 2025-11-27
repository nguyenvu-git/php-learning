import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function HomeWork() {
  return (
    <>
      <Header></Header>
      <div className="w-[80%] mx-auto mt-30">
        <p className="text-2xl font-bold">Danh sách bài tập về nhà</p>
        <div className="flex flex-col gap-2 mt-4">
          <Link className="hover:font-medium" to={"/btvn1"}>
            Trang đăng nhập (Auth)
          </Link>
          <Link className="hover:font-medium" to={"/product"}>
            Products
          </Link>
          <Link className="hover:font-medium" to={"/btvnjs"}>
            BTVN JS
          </Link>
        </div>
      </div>
    </>
  );
}

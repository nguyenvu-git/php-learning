import { NavLink, Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <p className="text-2xl font-bold">Danh sách bài tập</p>
        <div className="flex flex-col gap-2 mt-4">
          <Link to={"/"} className="hover:font-medium">
            Home
          </Link>
          <Link className="hover:font-medium" to={"/bai1"}>
            Bai 1 - 12/11/2025
          </Link>
          <Link className="hover:font-medium" to={"/btvn1"}>
            BTVN buổi 1
          </Link>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="flex px-6 py-8 items-center bg-amber-100 mb-4 fixed top-0 left-0 w-full">
        <h1 className="text-[24px] font-serif text-red-700">hnguyen</h1>

        <ul className="flex gap-6 ml-24">
          <Link
            to={"/"}
            className="font-medium text-gray-500 hover:text-black cursor-pointer"
          >
            Home
          </Link>
          <Link
            to={"/homeschool"}
            className="font-medium text-gray-500 hover:text-black cursor-pointer"
          >
            Bài trên lớp
          </Link>
          <Link
            to={"/homework"}
            className="font-medium text-gray-500 hover:text-black cursor-pointer"
          >
            Bài tập về nhà
          </Link>
          <li className="font-medium text-gray-500 hover:text-black cursor-pointer">
            F&Q
          </li>
        </ul>
      </div>
    </>
  );
}

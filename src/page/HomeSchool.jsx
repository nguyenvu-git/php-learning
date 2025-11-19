import Header from "../components/Header"
import { Link } from "react-router-dom"
export default function HomeSchool(){
    return<>
    <Header></Header>
    <div className="w-[80%] mx-auto mt-30">
        <p className="text-2xl font-bold">Danh sách bài tập trên lớp</p>
        <div className="flex flex-col gap-2 mt-4">
          <Link className="hover:font-medium" to={"/bai1"}>
            Bai 1 - 12/11/2025
          </Link>
          <Link className="hover:font-medium" to={"/bai2"}>
            Bai 2 - 19/11/2025
          </Link>
        </div>
      </div>
    </>
}
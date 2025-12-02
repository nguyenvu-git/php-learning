import "./App.css";
import Bai1 from "./components/Bai1";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import BTVN1 from "./components/BTVN1";
import HomeSchool from "./page/HomeSchool";
import HomeWork from "./page/HomeWork";
import ShowProducts from "./components/ShowProducts";
import Bai2 from "./components/Bai2";
import HomeProducts from "./train/day-1/HomeProducts";
import Home from "./train/day-2/Home";
import Dashboard from "./train/day-3/Dashboard";
import Dashboards from "./train/day-4/Dashboard";
import ProductDetail from "./train/day-4/ProductDetail";
import Bai3 from "./components/Bai3";
import Dashboardd from "./train/redo-day-4/Dashboardd";
import ProductDetaill from "./train/redo-day-4/ProductDetaill";
import BtvnJS from "./components/btvnJS";
import AvatarUpload from "./train/day-5/AvatarUpload";
import StudentList from "./train/day-6/StudentList";
import TextInspector from "./components/TextInspector";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/homeschool" element={<HomeSchool></HomeSchool>}></Route>
        <Route path="/homework" element={<HomeWork></HomeWork>}></Route>
        <Route path="/bai1" element={<Bai1></Bai1>}></Route>
        <Route path="/bai2" element={<Bai2></Bai2>}></Route>
        <Route path="/bai3" element={<Bai3></Bai3>}></Route>
        <Route path="/btvn1" element={<BTVN1></BTVN1>}></Route>
        <Route path="/product" element={<ShowProducts></ShowProducts>}></Route>
        <Route path="/btvnjs" element={<BtvnJS></BtvnJS>}></Route>
        <Route
          path="/inspectorColor"
          element={<TextInspector></TextInspector>}
        ></Route>
        {/* <Route path="/" element={<Dashboards />} />
        <Route path="/products/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/" element={<Dashboardd />} />
        <Route path="/products/:id" element={<ProductDetaill />} /> */}
      </Routes>

      {/* training */}
      {/* <HomeProducts></HomeProducts> */}
      <Home></Home>
      {/* <Dashboard></Dashboard> */}

      {/* <Dashboards></Dashboards> */}
      {/* <AvatarUpload></AvatarUpload> */}
      <StudentList></StudentList>
    </>
  );
}

export default App;

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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/homeschool" element={<HomeSchool></HomeSchool>}></Route>
        <Route path="/homework" element={<HomeWork></HomeWork>}></Route>
        <Route path="/bai1" element={<Bai1></Bai1>}></Route>
        <Route path="/bai2" element={<Bai2></Bai2>}></Route>
        <Route path="/btvn1" element={<BTVN1></BTVN1>}></Route>
        <Route path="/product" element={<ShowProducts></ShowProducts>}></Route>
      </Routes>

      {/* training */}
      {/* <HomeProducts></HomeProducts> */}
      <Home></Home>
    </>
  );
}

export default App;

import './App.css'
import Bai1 from "./components/Bai1";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import BTVN1 from "./components/BTVN1";
function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/bai1" element={<Bai1></Bai1>}></Route>
        <Route path="/btvn1" element={<BTVN1></BTVN1>}></Route>
      </Routes>
    </>
  )
}

export default App

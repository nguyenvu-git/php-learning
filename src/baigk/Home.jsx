import { useState } from "react";
import Molder from "./Moldal";
export default function Home() {
  const [clickSignUp, setClickSignUp] = useState(false);
  return (
    <>
      <div className="w-[80%] mx-auto flex justify-center">
        <button
          onClick={() => setClickSignUp(true)}
          className="px-6 py-4 border rounded-4xl hover:border-2 cursor-pointer"
        >
          Sign Up
        </button>
        {clickSignUp && <Molder onClose={() => setClickSignUp(false)}></Molder>}
      </div>
    </>
  );
}

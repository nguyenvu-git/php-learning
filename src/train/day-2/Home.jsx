import { useState } from "react";
import Molder from "./Moldal";
export default function Home() {
  const [clickSignUp, setClickSignUp] = useState(false);
  return (
    <>
      <div className="w-[80%] mx-auto flex justify-center">
        <button
          onClick={() => setClickSignUp(true)}
          className="px-2 py-4 border rounded-3xl"
        >
          Sign Up
        </button>
        {clickSignUp && <Molder onClose={() => setClickSignUp(false)}></Molder>}
      </div>
    </>
  );
}

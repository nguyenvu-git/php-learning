import SignUp from "./SignUp";
export default function Molder({ onClose }) {
  return (
    <>
      <div className="fixed w-full inset-0 bg-black/50 h-full bg-opacity-50 flex justify-center items-center">
        <div className="w-[60%] mx-auto rounded-xl z-1000 bg-white p-6">
          <button onClick={onClose} className="w-full text-[24px] flex justify-end cursor-pointer">
            X
          </button>
          <SignUp onClose={onClose} setSubmit={onClose}></SignUp>
        </div>
      </div>
    </>
  );
}

import Header from "./Header";

export default function BTVN1() {
  return (
    <>
      <Header></Header>
      <div className="w-full flex h-100 mt-30">
        <div className="w-[80%] border rounded-2xl p-4 flex flex-col justify-center items-center mx-auto mt-6">
          <p className="text-2xl font-semibold flex justify-center">
            Đăng nhập
          </p>
          <div className="flex-col flex w-[80%] gap-4 mt-12">
            <input
              type="email"
              className="h-[30px] py-6 px-4 border-2 rounded-2xl focus:border-3"
              placeholder="Email"
            />
            <input
              type="password"
              className="h-[30px] py-6 px-4 border-2 rounded-2xl focus:border-3"
              placeholder="Password"
            />

            <div className="flex gap-4 w-full mt-10">
              <button className="flex-1 py-4 rounded-4xl border-2 border-gray-500 hover:border-black text-gray-500 hover:text-black  font-medium cursor-pointer">
                Đăng ký
              </button>
              <button className="flex-1 py-4 rounded-4xl bg-green-500 hover:bg-green-600 text-white font-medium cursor-pointer">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BTVN1() {
  return (
    <>
      <div className="w-full flex">
        <div className="w-[80%] border p-4 flex flex-col justify-center items-center mx-auto mt-6">
          <p className="text-2xl font-semibold flex justify-center">
            Đăng nhập
          </p>
          <div className="flex-col flex w-[80%] gap-4 mt-6">
            <input
              type="email"
              className="h-[30px] py-6 px-4 border-2 rounded-2xl"
              placeholder="Email"
            />
            <input
              type="password"
              className="h-[30px] py-6 px-4 border-2 rounded-2xl"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </>
  );
}

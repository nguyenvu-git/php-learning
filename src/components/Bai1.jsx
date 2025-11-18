import { Link } from "react-router-dom";
export default function Bai1() {
  return (
    <>
      <div className="w-[80%] mx-auto my-6">
        <Link to={"/"} className="hover:font-medium">
          Home
        </Link>
        <h1 className="text-3xl">Hello</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi id
          doloribus ut iste recusandae laboriosam magni perferendis accusantium
          assumenda odit ipsam voluptates nisi, deleniti hic quaerat, nam quae
          ullam commodi. Fugiat recusandae doloribus esse similique, nihil iusto
          deserunt? Quas, culpa. Voluptatum ad laboriosam incidunt? Hic facilis
          veniam velit similique cupiditate eligendi quibusdam quam dolores
          maiores consequuntur harum soluta, architecto magnam. Quis harum modi
          aspernatur at soluta. Corrupti earum doloremque, labore porro omnis
          sapiente pariatur iusto, quos reiciendis, maiores quas. Eos doloremque
          amet facere iste? Ex vero saepe eaque deserunt inventore! Ipsum,
          temporibus eligendi ipsam similique tempora itaque non incidunt dicta
          ex ut? Nostrum adipisci error tenetur esse debitis totam ut quod
          incidunt. Cupiditate placeat impedit, officiis libero repellendus
          maiores est? In aliquam accusamus cupiditate. Saepe debitis earum iste
          repudiandae voluptatem explicabo? Rem ducimus deserunt saepe
          accusantium. Eligendi sunt enim magni molestiae culpa? Autem provident
          deserunt modi! Velit enim rem ipsa.
        </p>
        <b>Bold</b>

        <div className="mt-5">
          <h1 className="text-2xl font-bold">Công cha như núi Thái Sơn</h1>
          <div className="pl-4">
            <p className="">Công cha như núi Thái Sơn,</p>
            <p className="">Nghĩa mẹ như nước trong nguồn xảy ra</p>
            <p className="">Dù cho bế đâu thay đổi</p>
            <p className="">Con vẫn nhớ công ơn cha mẹ</p>
          </div>
        </div>

        <div className="mt-4">
          x<sup>2</sup>
          <sub>2</sub>+ 2*x<sub>1</sub>*x<sub>2</sub>+x<sup>2</sup>
          <sub>2</sub>
        </div>

        <div className="mt-4">
          <p>&lt;</p>
          <p>&gt;</p>
          <p>&#38;</p>
          <p>&#34;</p>
        </div>

        <div className="mt-4">
          <ul>
            <li>Com</li>
            <li>Gao</li>
            <li>Lua</li>
            <li>Tien</li>
            <li>Code</li>
          </ul>
        </div>

        <div className="flex mx-auto mt-4 gap-10 justify-center items-center">
          <div className="">
            <img src="\vite.svg" alt="" />
          </div>
          <ul className="flex gap-10">
            <li>
              <a
                className="font-medium hover:font-bold"
                href="https://www.google.com/maps"
              >
                Home
              </a>
            </li>
            <li>
              <a className="font-medium hover:font-bold" href="tel:0393293422">
                About
              </a>
            </li>
            <li>
              <a className="font-medium hover:font-bold" href="">
                Contact
              </a>
            </li>
            <li>
              <a className="font-medium hover:font-bold" href="">
                Sign In
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <table class="min-w-full border border-gray-300 text-sm text-center">
            <thead class="bg-green-500 text-white">
              <tr>
                <th class="py-2 px-4 border-b">STT</th>
                <th class="py-2 px-4 border-b">Họ tên</th>
                <th class="py-2 px-4 border-b">Mã sinh viên</th>
                <th class="py-2 px-4 border-b">Nhóm</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-100">
                <td class="py-2 px-4 border-b">42</td>
                <td class="py-2 px-4 border-b">Vũ Huy Nguyên</td>
                <td class="py-2 px-4 border-b">74DCTT22452</td>
                <td class="py-2 px-4 border-b">10</td>
              </tr>
              <tr class="hover:bg-gray-100">
                <td class="py-2 px-4 border-b">18</td>
                <td class="py-2 px-4 border-b">Nguyễn Hoàng Hải</td>
                <td class="py-2 px-4 border-b">74DCTT22429</td>
                <td class="py-2 px-4 border-b">10</td>
              </tr>
              <tr class="hover:bg-gray-100">
                <td class="py-2 px-4 border-b">3</td>
                <td class="py-2 px-4 border-b">Hoàng Võ Huy Hoàng</td>
                <td class="py-2 px-4 border-b">74DCTT22429</td>
                <td class="py-2 px-4 border-b">10</td>
              </tr>
              <tr class="hover:bg-gray-100">
                <td colspan="4" class="py-2 px-4 border-b">
                  Tổng số sinh viên: <span class="text-blue-600">2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <div className="border-1 rounded-2xl w-full h-[300px]">
            <div className="ml-2 flex items-center gap-7">
              <p className="font-medium">Email</p>
              <input
                className="mt-2 ml-2 py-1 px-2 border-1 rounded-xl "
                type="email"
              />
            </div>
            <div className="ml-2 flex items-center">
              <p className="font-medium">Password</p>
              <input
                className="mt-2 ml-2 py-1 px-2 border-1 rounded-xl text-[16px]"
                type="password"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

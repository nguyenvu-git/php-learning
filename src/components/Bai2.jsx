export default function Bai2() {
  return (
    <>
      <div className="mt-4 w-[80%] mx-auto">
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
              <td class="py-2 px-4 border-b">4</td>
              <td class="py-2 px-4 border-b">Nguyễn Trường Giang</td>
              <td class="py-2 px-4 border-b">74DCTT22429</td>
              <td class="py-2 px-4 border-b">10</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-2 px-4 border-b">5</td>
              <td class="py-2 px-4 border-b">Lê Đình Quốc Huy</td>
              <td class="py-2 px-4 border-b">74DCTT22429</td>
              <td class="py-2 px-4 border-b">10</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td colspan="4" class="py-2 px-4 border-b">
                Tổng số sinh viên: <span class="text-blue-600">5</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

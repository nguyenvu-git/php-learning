import { use } from "react";
import { useEffect, useState } from "react";
import StudentPopup from "./Popup";
export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("Thêm sinh viên");
  const [selectStudent, setSelectStudent] = useState(null);
  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:8088/trainingphp/list.php");
      const data = await res.json();
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Danh sách sinh viên</h2>
      <button
        onClick={() => {
          setOpen(true);
          setMode("Thêm sinh viên");
          setSelectStudent(null);
        }}
        className="p-2 rounded-2xl bg-blue-500 text-white cursor-pointer font-medium flex justify-self-end"
      >
        Thêm sinh viên
      </button>
      <div className="overflow-x-auto bg-white rounded shadow mt-4">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Mã SV</th>
              <th className="px-4 py-3 text-left">Họ tên</th>
              <th className="px-4 py-3 text-left">Lớp</th>
              <th className="px-4 py-3 text-left"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {students.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-center" colSpan={3}>
                  Chưa có sinh viên
                </td>
              </tr>
            ) : (
              students.map((sv) => (
                <tr key={sv.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{sv.masv}</td>
                  <td className="px-4 py-3">{sv.hoten}</td>
                  <td className="px-4 py-3">{sv.lop}</td>
                  <td className="flex gap-2 justify-center items-center py-2">
                    <button
                      onClick={() => {
                        setOpen(true);
                        setMode("Sửa sinh viên");
                        setSelectStudent(sv);
                      }}
                      className="font-medium rounded-2xl bg-yellow-300 py-2 px-4 text-white cursor-pointer"
                    >
                      Sửa
                    </button>
                    <button className="font-medium rounded-2xl bg-red-400 py-2 px-4 text-white cursor-pointer">
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {open && (
        <StudentPopup
          refresh={fetchStudents}
          title={mode}
          onClose={() => setOpen(false)}
          student={selectStudent}
        ></StudentPopup>
      )}
    </div>
  );
}

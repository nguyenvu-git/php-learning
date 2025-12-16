import React from "react";
import { useState, useEffect } from "react";
export default function StudentPopup({ title, onClose, student, refresh }) {
  const [masv, setMasv] = useState("");
  const [hoten, setHoten] = useState("");
  const [lop, setLop] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    if (student) {
      setMasv(student.masv);
      setHoten(student.hoten);
      setLop(student.lop);
      setId(student.id);
    } else {
      // Form trống khi thêm
      setMasv("");
      setHoten("");
      setLop("");
      setId(null);
    }
  }, [student]);

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("masv", masv);
      formData.append("hoten", hoten);
      formData.append("lop", lop);

      await fetch("http://localhost:8088/trainingphp/add.php", {
        method: "POST",
        body: formData,
      });

      if (refresh) refresh();
      onClose();
    } catch (err) {
      console.error("Lỗi khi thêm sinh viên:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("masv", masv);
      formData.append("hoten", hoten);
      formData.append("lop", lop);

      await fetch("http://localhost:8088/trainingphp/update.php", {
        method: "POST",
        body: formData,
      });

      if (refresh) refresh();
      onClose();
    } catch (err) {
      console.error("Lỗi khi sửa sinh viên:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Mã SV</label>
            <input
              onChange={(e) => setMasv(e.target.value)}
              type="text"
              value={masv}
              className="w-full border rounded px-3 py-2"
              placeholder="Nhập mã sinh viên"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Họ tên</label>
            <input
              onChange={(e) => setHoten(e.target.value)}
              type="text"
              value={hoten}
              className="w-full border rounded px-3 py-2"
              placeholder="Nhập họ tên"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Lớp</label>
            <input
              onChange={(e) => setLop(e.target.value)}
              type="text"
              value={lop}
              className="w-full border rounded px-3 py-2"
              placeholder="Nhập lớp"
            />
          </div>

          {/* Nút Lưu / Huỷ */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border cursor-pointer"
            >
              Huỷ
            </button>

            {/* <button
              onClick={() => {
                handleSave();
              }}
              type="button"
              className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
            >
              Lưu
            </button> */}
            <button
              type="button"
              onClick={() => {
                if (student) {
                  handleUpdate(); // SỬA
                } else {
                  handleSave(); // THÊM
                }
              }}
              className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
            >
              {student ? "Cập nhật" : "Lưu"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

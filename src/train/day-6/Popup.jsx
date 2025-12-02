import React from "react";

export default function StudentPopup({ title = "Thêm sinh viên", onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Tiêu đề */}
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Mã SV</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Nhập mã sinh viên"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Họ tên</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Nhập họ tên"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Lớp</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Nhập lớp"
            />
          </div>

          {/* Nút Lưu / Huỷ */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Huỷ
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { uploadToImgbb } from "./uploadService";

const AvatarUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return alert("Chưa chọn ảnh!");

    setUploading(true);
    setProgress(0);

    try {
      const url = await uploadToImgbb(file, setProgress);
      setUploadedUrl(url);
      alert("Upload thành công!");
    } catch (err) {
      console.error(err);
      alert("Lỗi upload!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-[400px] mx-auto mt-6 border p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Upload Avatar</h2>

      <input type="file" onChange={handleFileChange} />

      {preview && (
        <img
          src={preview}
          className="w-[150px] h-[150px] object-cover rounded mt-4"
        />
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {uploading && (
        <div className="mt-2">
          <p>{progress}%</p>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div
              className="bg-blue-500 h-3 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {uploadedUrl && (
        <div className="mt-4">
          <p className="font-semibold">Ảnh online:</p>
          <a href={uploadedUrl} target="_blank" className="text-blue-500">
            {uploadedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default AvatarUpload;

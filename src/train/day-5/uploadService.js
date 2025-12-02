import axios from "axios";
// import IMGBB_API_KEY from "../../../.env";
const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;
export const uploadToImgbb = async (file, onProgress) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.post(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress(percent);
      },
    }
  );

  return response.data.data.url; // trả về link ảnh
};

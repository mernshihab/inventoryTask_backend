import multer from "multer";
import path from "path";

const singleUploader = (uploadPath, fieldName) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  return multer({ storage }).single(fieldName);
};

export default singleUploader;

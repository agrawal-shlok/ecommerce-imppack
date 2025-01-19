import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuid4 } from "uuid";

// Ensure the uploads directory exists
const uploadsDirectory = path.resolve("uploads");
if (!fs.existsSync(uploadsDirectory)) {
    fs.mkdirSync(uploadsDirectory);
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // Set the upload destination to the uploads directory
        callback(null, uploadsDirectory);
    },
    filename: function (req, file, callback) {
      const fileId = `${uuid4()}`;
      const extension = path.extname(file.originalname); // Retain the original file extension
      const uniqueName = `${fileId}.${extension}`;
      callback(null, uniqueName);
    },
});

// Multer configuration with file size and format validation (optional)
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
    },
    fileFilter: function (req, file, callback) {
        const fileTypes = /jpeg|jpg|png/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);
        if (extName && mimeType) {
            callback(null, true);
        } else {
            callback(new Error("Only image are allowed (jpeg, jpg, png)"));
        }
    },
});


export default upload;

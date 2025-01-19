import express from "express";
import {
  listproduct,
  addproduct,
  removeproduct,
  singleproduct,
} from "../controllers/Productcontroller.js";  // Import your product controller functions
import upload from "../middleware/Multer.js";  // Import your multer middleware
import adminauth from "../middleware/Adminauth.js";  // Middleware to check if admin is authenticated

const productrouter = express.Router();

// Route for adding a product (with image)
productrouter.post(
  "/add",
  adminauth,
  upload.array("image", 10), // 'image' is the field name in the form, allowing up to 10 files
  addproduct
);


// Route for removing a product
productrouter.post("/remove", adminauth, removeproduct);

// Route for getting a single product
productrouter.post("/single", singleproduct);

// Route for listing all products
productrouter.get("/list", listproduct);

export default productrouter;

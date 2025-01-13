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

// Route for adding a product (with images)
productrouter.post(
  "/add",
  adminauth,
  upload.fields([{ name: "image", maxCount: 10 }]),  // Allow multiple images (10 in this case)
  addproduct
);

// Route for removing a product
productrouter.post("/remove", adminauth, removeproduct);

// Route for getting a single product
productrouter.post("/single", singleproduct);

// Route for listing all products
productrouter.get("/list", listproduct);

export default productrouter;

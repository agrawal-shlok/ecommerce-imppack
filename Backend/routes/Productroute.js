import express from "express";
import {
  listproduct,
  addproduct,
  removeproduct,
  singleproduct,
} from "../controllers/Productcontroller.js";
import upload from "../middleware/Multer.js";
import adminauth from "../middleware/Adminauth.js";

const productrouter = express.Router();

productrouter.post(
  "/add",
  adminauth,
  upload.fields([
    { name: "image", maxCount: 10 },
    // { name: "image", maxCount: 1 },
    // { name: "image", maxCount: 1 },
    // { name: "image", maxCount: 1 },
  ]),
  addproduct
);
productrouter.post("/remove",adminauth, removeproduct);
productrouter.post("/single", singleproduct);
productrouter.get("/list", listproduct);

export default productrouter;

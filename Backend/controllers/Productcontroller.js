import fs from "fs";
import path from "path";
import productmodel from "../models/Productmodel.js";

// Function for adding a product
const addproduct = async (req, res) => {
  try {
    const { name, description, price, category, sizes, bestseller, weight } =
      req.body;

    const imagesURLs = [];

    if(req.files){
      req.files.map((file) => {
        imagesURLs.push({
          originalName: file.originalname,
          fileName: file.filename,
          url: `${req.protocol}://${req.get("host")}/uploads/${file.filename}`, // Construct public URL
        });
      });
    }

    // Prepare the product data
    const productdata = {
      name,
      description,
      price: Number(price),
      image: imagesURLs, // Save the relative image paths in the database
      category,
      sizes: JSON.parse(sizes), // Parse sizes as an array
      bestseller: bestseller === "true", // Convert bestseller to boolean
      weight: Number(weight), // Convert weight to a number
      date: Date.now(),
    };

    // Create a new product instance
    const product = new productmodel(productdata);
    await product.save();

    res.json({ success: true, message: "Product added successfully", product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for listing products
const listproduct = async (req, res) => {
  try {
    const products = await productmodel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for removing a product
const removeproduct = async (req, res) => {
  try {
    const product = await productmodel.findByIdAndDelete(req.body.id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    // Optionally delete the images from the server
    product.image.forEach((image) => {
      const imagePath = path.join(__dirname, `../public${image}`);
      fs.unlink(imagePath, (err) => {
        if (err) console.error(`Error deleting file: ${err}`);
      });
    });

    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for getting a single product
const singleproduct = async (req, res) => {
  try {
    const { productid } = req.body;
    const product = await productmodel.findById(productid);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { listproduct, addproduct, removeproduct, singleproduct };

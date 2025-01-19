import fs from "fs";
import path from "path";
import productmodel from "../models/Productmodel.js";

// Function to add a product
export const addproduct = async (req, res) => {
  console.log("Request body:", req.body);
  console.log("Uploaded files:", req.files);

  try {
    // Ensure image are uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    const { name, description, price, category, bestseller, sizes, weight } = req.body;

    // Map over the uploaded files and generate an array of image URLs
    const imageUrls = req.files.map(file => {
      // Assuming the image are stored in the "uploads" folder, adjust the base URL if necessary
      return `http://localhost:10001/uploads/${file.filename}`;
    });

    // Create a new product document with the provided data
    const newProduct = new productmodel({
      name,
      description,
      price,
      category,
      bestseller: bestseller === "true", // Ensure bestseller is treated as a boolean
      sizes: JSON.parse(sizes), // Assuming sizes is passed as a JSON string
      weight: parseFloat(weight), // Ensure weight is a number
      image: imageUrls, // Store image URLs (strings)
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while adding the product",
      error: error.message, // Send detailed error message
    });
  }
};

// Function for listing products
export const listproduct = async (req, res) => {
  try {
    const products = await productmodel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for removing a product
export const removeproduct = async (req, res) => {
  try {
    const product = await productmodel.findByIdAndDelete(req.body.id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    // Optionally delete the image from the server
    product.image.forEach((image) => {
      const imagePath = path.join(__dirname, `../uploads/${image.split('/').pop()}`); // Adjust the path if needed
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
export const singleproduct = async (req, res) => {
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

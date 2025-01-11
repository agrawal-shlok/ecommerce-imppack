import { v2 as cloudinary } from "cloudinary";
import productmodel from "../models/Productmodel.js";

//function for add product
const addproduct = async (req, res) => {
    try {
        const { name, description, price, category, subcategory, sizes, bestseller, weight } = req.body; // Added weight

        const images = [];

        if (req.files.image) {
            for (let index = 0; index < req.files.image.length; index++) {
                const element = req.files.image[index];
                if (element === undefined) continue;
                images.push(element);
            }
        }

        let imagesurl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                return result.secure_url;
            })
        );

        const productdata = {
            name,
            description,
            price: Number(price),
            image: imagesurl,
            category,
            // Parse the subcategory and sizes if they are stringified arrays
            subcategory: JSON.parse(subcategory), // Ensure it's an array after parsing
            sizes: JSON.parse(sizes), // Parse sizes as an array
            bestseller: bestseller === 'true', // Simplified boolean conversion
            weight: Number(weight), // Convert weight to a number
            date: Date.now(),
        };
        

        const product = new productmodel(productdata);
        await product.save();

        res.json({ success: true, message: "Product added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//function for list product
const listproduct = async (req, res) => {
    try {
        const products = await productmodel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//function for remove product
const removeproduct = async (req, res) => {
    try {
        await productmodel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//function for single product info
const singleproduct = async (req, res) => {
    try {
        const { productid } = req.body;
        const product = await productmodel.findById(productid);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { listproduct, addproduct, removeproduct, singleproduct };

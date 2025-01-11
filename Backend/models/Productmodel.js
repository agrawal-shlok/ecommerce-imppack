import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: [String],  // Using an array of strings for image URLs
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: [String],  // Changed to an array of strings for multiple subcategories
        required: true,
    },
    sizes: {
        type: [String],  // Array of size strings, for example: ["kg", "halfkg"]
        required: true,
    },
    bestseller: {
        type: Boolean,
        default: false,  // Default value to false if not specified
    },
    weight: {
        type: Number,  // Added weight for product weight, assuming this field is used
    },
    date: {
        type: Date,
        default: Date.now,  // Stores the date of product creation
    },
});



const productmodel = mongoose.models.product || mongoose.model("product",productschema)
export default productmodel;
import {v2 as cloudinary} from "cloudinary"
import productmodel from "../models/Productmodel.js";

//function for add product

const addproduct = async (req, res) => {
    try {
        
        

        const {name,description,price,category,subcategory,sizes,bestseller} = req.body;
        
        const images = [];

        if(req.files.image){
            for (let index = 0; index < req.files.image.length; index++) {
                const element = req.files.image[index];
                if(element === undefined) continue;
                images.push(element);
            }
        }

        // const image1 =  req.files.image &&req.files.image[0];
        // const image2 =  req.files.image &&req.files.image[0];
        // const image3 =  req.files.image &&req.files.image[0];
        // const image4 =  req.files.image &&req.files.image[0];
        
        
        // const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

        let imagesurl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
                return result.secure_url;
            })
        )
        
        

        const productdata = {
            name,
            description,
            price: Number(price),
            image:imagesurl,
            category,
            subcategory,
            sizes:JSON.parse(sizes),
            bestseller: bestseller === 'true' ? true: false,
            date:Date.now()
        }

        // console.log(productdata);
        

        const product = new productmodel(productdata)
        await product.save()

        res.json({success:true,message:"product added"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
};

//function for list product

const listproduct = async (req, res) => {
    try {
        const products = await productmodel.find({})
        res.json({success:true,products})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
};

//function for remove product

const removeproduct = async (req, res) => {
    try {
        
        await productmodel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"product removed"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
};

//function for single product info

const singleproduct = async (req, res) => {
    try {
        const {productid} = req.body
        const product = await productmodel.findById(productid)
        res.json({success:true,product})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
};

export { listproduct, addproduct, removeproduct, singleproduct };

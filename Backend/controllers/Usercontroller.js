import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
// ROUTE FOR USER LOGIN

import usermodel from "../models/Usermodel.js";

const createtoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};


const loginuser = async (req,res) => {
    try {
        
        const {email,password} = req.body;
        const user = await usermodel.findOne({email})

        if(!user){
            return res.json({success: false,msg:"User doesnot Exists"})
        }

        const ismatch = await bcrypt.compare(password,user.password)

        if(ismatch){
            const token = createtoken(user._id)
            res.json({success:true,token})
        }

        else{
            res.json({success:false,message:"invalid credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}


//ROUTE FOR USER REGISTRATION

const registeruser = async (req,res) => {
    try {
        
        const {name,email,password} = req.body;
        
        //checking user already exists or not
        const exists = await usermodel.findOne({email})
        if(exists){
            return res.json({success: false,msg:"User already Exists"})
        }

        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success: false,msg:"Please enter a valid Email"})
        }

        if (password.length<8) {
            return res.json({success: false,msg:"Please enter a strong password"})
        }
        
        //Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)

        const newuser = new usermodel({
            name,
            email,
            password:hashedpassword
        })
        const user = await newuser.save()

        const token = createtoken(user._id)

        res.json({success:true,token})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//RZOUTE FOR ADMIN LOGIN

const adminlogin = async (req,res) => {
    try {
        
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"invalid credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {loginuser , registeruser, adminlogin}
import ordermodel from "../models/Ordermodel.js";
import usermodel from "../models/Usermodel.js";
import razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

//global variables
const currency = "inr";
const deliverycharge = 100;

//gateway initialize
const razorpayinstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// placing orders using cod method

const placeorder = async (req, res) => {
  try {
    const { userid, items, amount, address } = req.body;
    console.log(req.body);
    

    const orderdata = {
      userid,
      items,
      address,
      amount,
      paymentmethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const neworder = new ordermodel(orderdata);
    await neworder.save();

    await usermodel.findByIdAndUpdate(userid, { cartdata: {} });

    res.json({ success: true, message: "Order placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// placing orders using stripe method

const placeorderstripe = async (req, res) => {};

// placing orders using razorpay method

const placeorderrazorpay = async (req, res) => {
  try {
    const { userid, items, amount, address } = req.body;

    const orderdata = {
      userid,
      items,
      address,
      amount,
      paymentmethod: "razorpay",
      payment: false,
      date: Date.now(),
    };
    const neworder = new ordermodel(orderdata);
    await neworder.save();

    const options = {
      amount: amount * 100,
      currency: currency.toUpperCase(),
      receipt: neworder._id.toString(),
    };

    await razorpayinstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: error });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyrazorpay = async (req, res) => {
  try {
    const { userid, razorpay_order_id } = req.body;
    const orderinfo = await razorpayinstance.orders.fetch(razorpay_order_id);
    if (orderinfo.status === "paid") {
      await ordermodel.findByIdAndUpdate(orderinfo.receipt, { payment: true });
      await usermodel.findByIdAndUpdate(userid, { cartdata: {} });
      res.json({ success: true, message: "payment successfull" });
    } else {
      res.json({ success: false, message: "payment failed" });
    }
  } catch (error) {
    console.log(req.body);
    
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// all orders data for admin panel

const allorders = async (req, res) => {
  try {
    const orders = await ordermodel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// user orders data for frontend

const userorders = async (req, res) => {
  try {
    const { userid } = req.body;
    const orders = await ordermodel.find({ userid });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update order status from admin panel

const updatestatus = async (req, res) => {
  try {
    const { orderid, status } = req.body;

    await ordermodel.findByIdAndUpdate(orderid, { status });

    res.json({ success: true, message: "status updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeorder,
  placeorderstripe,
  placeorderrazorpay,
  allorders,
  userorders,
  updatestatus,
  verifyrazorpay,
};

import mongoose, { Mongoose } from "mongoose";

const connectdb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });

  console.log(`${process.env.MONGODB_URI}`);
  await mongoose.connect(`${process.env.MONGODB_URI}`);
};

export default connectdb;

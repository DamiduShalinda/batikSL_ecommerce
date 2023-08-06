// seedData.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    try {
      // Clear the existing data (optional, only if you want to start fresh)
      await User.deleteMany();
      await Product.deleteMany();
      await Order.deleteMany();

      // Insert user data
      const insertedUsers = await User.insertMany(data.users);
      console.log("Users inserted successfully:", insertedUsers);

      // Insert product data
      const insertedProducts = await Product.insertMany(data.products);
      console.log("Products inserted successfully:", insertedProducts);

      // Insert order data
      const insertedOrders = await Order.insertMany(data.orders);
      console.log("Orders inserted successfully:", insertedOrders);

      process.exit(0); // Exit the script once the data is inserted
    } catch (error) {
      console.error("Error inserting data:", error);
      process.exit(1); // Exit the script with an error code if there's an error
    }
  });

const mongoose = require("mongoose");
const db ="mongodb+srv://joshmartina716:forCLUSTER15!@cluster0.cl8gi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
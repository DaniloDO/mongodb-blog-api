import mongoose from "mongoose";

const connection = await mongoose.connect('mongodb://127.0.0.1/blog_api');

export default connection 
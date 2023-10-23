import mongoose, { Schema } from "mongoose";

const categoriesSchema = new Schema({
    name: String,
    image: String,
    createdAt: Date,
    updatedAt: Date
});

export default categoriesSchema;
import mongoose, { Schema } from "mongoose";

//Defines a Schema to create categories model  
const categoriesSchema = new Schema({
    name: String,
    image: String,
    createdAt: Date,
    updatedAt: Date
});

export default categoriesSchema;
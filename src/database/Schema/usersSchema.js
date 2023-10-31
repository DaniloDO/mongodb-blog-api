import mongoose, { Schema } from "mongoose";

//Defines a Schema to create users model  
const usersSchema = new Schema({
    name: String,
    email: String,
    email_verified_at: Date,
    phone: String,
    password: String,
    createdAt: Date,
    updatedAt: Date
});

export default usersSchema; 
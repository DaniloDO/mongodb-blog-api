import mongoose, { Schema } from "mongoose";

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
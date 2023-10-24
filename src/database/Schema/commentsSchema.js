import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
    content: String,
    createdAt: Date,
    updatedAt: Date
});

export default commentsSchema; 
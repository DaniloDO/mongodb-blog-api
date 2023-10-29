import mongoose, { Schema } from "mongoose";

const postsSchema = new Schema({
    title: String,
    description: String,
    content: String,
    image: String,
    publishedAt: Date,
    createdAt: Date,
    updatedAt: Date,
    userId: [{type: Schema.Types.ObjectId, ref:'users'}]
});

export default postsSchema;
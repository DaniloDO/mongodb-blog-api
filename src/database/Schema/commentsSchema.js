import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
    content: String,
    createdAt: Date,
    updatedAt: Date,
    userId: [{type: Schema.Types.ObjectId, ref: 'users'}],
    postId: [{type: Schema.Types.ObjectId, ref: 'posts'}]
});

export default commentsSchema; 
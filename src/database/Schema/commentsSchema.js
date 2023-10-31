import mongoose, { Schema } from "mongoose";

//Defines a Schema to create comments model  
const commentsSchema = new Schema({
    content: String,
    createdAt: Date,
    updatedAt: Date,
    userId: [{type: Schema.Types.ObjectId, ref: 'users'}],
    postId: [{type: Schema.Types.ObjectId, ref: 'posts'}]
});

export default commentsSchema; 
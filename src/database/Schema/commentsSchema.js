import mongoose, { Schema } from "mongoose";

//Defines a Schema to create comments model  
const commentsSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Please insert content']
    },
    createdAt: {
        type: Date,
        required: [true, 'Timestamp is mandatory']
    },
    updatedAt: {
        type: Date,
        required: [true, 'Timestamp is mandatory']
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Please insert the user this comment belongs to']
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
        required: [true, 'Please insert the post this comment belongs to']
    }
});

export default commentsSchema; 
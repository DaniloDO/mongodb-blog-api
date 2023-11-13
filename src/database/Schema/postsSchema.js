import mongoose, { Schema } from "mongoose";

//Defines a Schema to create posts model  
const postsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
    image: {
        type: String
    },
    publishedAt: {
        type: Date,
        required: [true, 'Timestamp is mandatory']
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
        required: [true, 'Please insert the user relation'],
        ref: 'users'
    }
});

export default postsSchema;
import mongoose, { Schema } from "mongoose";

//Defines a Schema to create categories model  
const categoriesSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    image: {
        type: String,
        required: [true, 'Please insert an image']
    },
    createdAt: {
        type: Date,
        required: [true, 'Timestamp is mandatory']
    },
    updatedAt: {
        type: Date,
        required: [true, 'Timestamp is mandatory']
    }
});

export default categoriesSchema;
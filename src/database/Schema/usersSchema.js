import mongoose, { Schema } from "mongoose";
import validator from 'validator';

//Defines a Schema to create users model  
const usersSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        validate:  [validator.isEmail, 'Please enter a valid email']

    },
    email_verified_at: {
        type: Date,
        required: [true, 'Timestamp is mandatory']
    },
    phone: String,
    password: {
        type: String,
        required: [true, 'Please enter a password']
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

export default usersSchema; 
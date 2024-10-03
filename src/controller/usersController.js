import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

import users from "../database/Model/users.js";
import errorValidation from "../handlers/errorValidation.js";
import errorSearch from "../handlers/errorSearch.js";


//Show all the users in the collection
export const index = async (req, res) => {

    const response = await users.find();

    await res.send(response);
}

//Store a single user in the collection 
export const store = async (req, res) => {

    const {name, email, phone, password} = req.body;

    const timeElapsed = Date.now();
    const timeStamp = new Date(timeElapsed);
    const today = timeStamp.toISOString();

    const email_verified_at = today;
    const createdAt = today;
    const updatedAt = today;

    try {
        const response = await users.create({
            name: name,
            email: email,
            email_verified_at: email_verified_at,
            password: password,
            phone: phone,
            createdAt: createdAt,
            updatedAt: updatedAt
        })

        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorValidation(err);
        res.status(400).send(errorMessage);
        return
    }
};

//Show a unique user in the collection
export const show = async (req, res) => {

    const user = {
        '_id': req.params.userId
    }

    try {
        const response = await users.findOne(user);
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorSearch(err);
        res.status(400).send(errorMessage);
        return
    }
};

//Update a single user data in the collection
export const update = async (req, res) => {

    const {name, email, password, phone} = req.body;

    const user = {
        '_id': req.params.userId
    }

    try {
        const response = await users.findById(user);
        response.name = name;
        response.email = email;
        response.password = password;
        response.phone = phone;
    
        try {
            await response.save();
            await res.send(response)
        }
    
        catch (err) {
            const errorMessage = errorValidation(err)
            res.status(400).send(errorMessage);
            return
        }
    }

    catch (err) {
        const errorMessage = errorSearch(err);
        res.status(400).send(errorMessage);
        return 
    }
}

//Delete permanently a single user in the collection
export const forceDelete = async (req, res) => {

    const user = {
        '_id': req.params.userId
    };

    try {
        const response = await users.deleteOne(user);
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorSearch(err)
        res.status(400).send(errorMessage);
        return
    }
}

//User authentication
export const login = async (req, res) => {

    const {email, password} = req.body;

    const user = {
        'email': email,
    };

    try {
        const response = await users.findOne(user);

        if(response.password === password) {
            const token = jwt.sign({'user': response.id}, 'secretKey', {expiresIn: 60});
            await res.cookie('jwt', token, {httpOnly: true, maxAge: 1000 * 60});
            await res.send(token);
        }
        else {
            res.status(400).send({'users': 'incorrect password'});
            return
        }
    }

    catch(err) {
        const errorMessage = errorSearch(err);
        res.status(400).send(errorMessage);
        return
    }
}
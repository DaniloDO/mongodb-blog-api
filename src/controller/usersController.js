import mongoose from "mongoose";

import users from "../database/Model/users.js";

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

    const response = await users.create({
        name: name,
        email: email,
        email_verified_at: email_verified_at,
        password: password,
        phone: phone,
        createdAt: createdAt,
        updatedAt: updatedAt
    })

    res.send({
        name: name,
        email: email,
        email_verified_at: email_verified_at,
        password: password,
        phone: phone,
        createdAt: createdAt,
        updatedAt: updatedAt
    });

};

//Show a unique user in the collection
export const show = async (req, res) => {

    const user = {
        '_id': req.params.userId
    }

    const response = await users.findOne(user);

    await res.send(response);

};

//Update a single user data in the collection
export const update = async (req, res) => {

    const { name, email, password, phone } = req.body;

    const user = {
        '_id': req.params.userId
    }

    const response = await users.findById(user);

    response.name = name;
    response.email = email;
    response.password = password;
    response.phone = phone;

    await response.save();

    await res.send(response)
}

//Delete permanently a single user in the collection
export const forceDelete = async (req, res) => {

    const user = {
        '_id': req.params.userId
    };

    const response = await users.deleteOne(user);

    await res.send(response);
}


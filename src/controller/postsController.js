import mongoose from "mongoose";

import posts from "../database/Model/posts.js";
import users from "../database/Model/users.js";
import errorSearch from "../handlers/errorSearch.js";
import errorValidation from "../handlers/errorValidation.js";

//Show all the posts in the collection
export const index = async (req, res) => {

    const response = await posts.find().populate({
        path: 'userId',
        select: '_id name email phone'
    });

    await res.send(response);

}

//Store a single post in the collection 
export const store = async (req, res) => {

    const {title, description, content, image, userId} = req.body;

    const timeElapsed = Date.now();
    const timeStamp = new Date(timeElapsed);
    const today = timeStamp.toISOString();

    const createdAt = today;
    const updatedAt = today;
    const publishedAt = today;

    try {
        const response = await posts.create({
            title: title,
            description: description,
            content: content,
            image: image,
            publishedAt: publishedAt,
            createdAt: createdAt,
            updatedAt: updatedAt,
            userId: userId
        });
    
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorValidation(err);
        res.status(400).send(errorMessage);
        return
    }
};

//Show a unique post in the collection
export const show = async (req, res) => {
    const post = {
        '_id': req.params.postId
    }

    try {
        const response = await posts.findOne(post).populate({
            path: 'userId',
            select: '_id name email phone'
        });
    
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorSearch(err);
        res.status(400).send(errorMessage);
        return
    }
}

//Update a single post data in the collection
export const update = async (req, res) => {
    const {title, description, content, image, userId} = req.body; 

    const post = {
        '_id': req.params.postId
    }

    try {
        const response = await posts.findById(post);
    }

    catch (err) {
        const errorMessage = errorSearch(err);
        res.status(400).send(errorMessage);
        return 
    }

    response.title = title;
    response.description = description;
    response.content = content;
    response.image = image;
    response.userId = userId;

    try {
        await response.save();
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorValidation(err)
        res.status(400).send(errorMessage);
        return
    }
}

//Delete permanently a single post in the collection
export const forceDelete = async (req, res) => {

    const post = {
        '_id': req.params.postId
    }

    try {
        const response = await posts.deleteOne(post);
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorSearch(err)
        res.status(400).send(errorMessage);
        return
    }
}

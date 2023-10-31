import mongoose from "mongoose";

import posts from "../database/Model/posts.js";
import users from "../database/Model/users.js";

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


};

//Show a unique post in the collection
export const show = async (req, res) => {
    const post = {
        '_id': req.params.postId
    }

    const response = await posts.findOne(post).populate({
        path: 'userId',
        select: '_id name email phone'
    });

    await res.send(response);
}

//Update a single post data in the collection
export const update = async (req, res) => {
    const {title, description, content, image, userId} = req.body; 

    const post = {
        '_id': req.params.postId
    }

    const response = await posts.findById(post);

    response.title = title;
    response.description = description;
    response.content = content;
    response.image = image;
    response.userId = userId;

    await response.save();
    await res.send(response);
}

//Delete permanently a single post in the collection
export const forceDelete = async (req, res) => {

    const post = {
        '_id': req.params.postId
    }

    const response = await posts.deleteOne(post);
    await res.send(response);
}

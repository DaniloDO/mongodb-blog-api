import mongoose from "mongoose";

import posts from "../database/Model/posts.js";
import users from "../database/Model/users.js";

export const index = async (req, res) => {
    const response = await posts.find().populate({
        path: 'userId',
        select: '_id name email phone'
    });

    await res.send(response);

}

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

export const forceDelete = async (req, res) => {

    const post = {
        '_id': req.params.postId
    }

    const response = await posts.deleteOne(post);
    await res.send(response);
}

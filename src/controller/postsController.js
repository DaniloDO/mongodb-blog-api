import mongoose from "mongoose";

import posts from "../database/Model/posts.js";

export const index = async (req, res) => {
    const response = await posts.find();

    await res.send(response);

}

export const store = async (req, res) => {
    const {title, description, content, image} = req.body;

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
        updatedAt: updatedAt
    });

    await res.send(response);


};

export const show = async (req, res) => {
    const post = {
        '_id': req.params.postId
    }

    const response = await posts.findOne(post);

    await res.send(response);
}

export const update = async (req, res) => {
    const {title, description, content, image} = req.body; 

    const post = {
        '_id': req.params.postId
    }

    const response = await posts.findById(post);

    response.title = title;
    response.description = description;
    response.content = content;
    response.image = image;

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

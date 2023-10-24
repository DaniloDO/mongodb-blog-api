import mongoose from "mongoose";

import comments from "../database/Model/comments.js";

export const index = async (req, res) => {
    const response = await comments.find();

    await res.send(response);
};

export const store = async (req, res) => {
    const { content } = req.body; 

    const timeElapsed = Date.now();
    const timeStamp = new Date(timeElapsed);
    const today = timeStamp.toISOString();

    const createdAt = today;
    const updatedAt = today;

    const response = await comments.create({
        content: content
    });

    await res.send(response);
};

export const show = async (req, res) => {

    const comment = {
        '_id': req.params.commentId
    }

    const response = await comments.findOne(comment);

    await res.send(response);
};

export const update = async (req, res) => {
    const { content } = req.body;

    const comment = {
        '_id': req.params.commentId
    }

    const response = await comments.findById(comment);

    response.content = content;

    await response.save();
    await res.send(response);

};

export const forceDelete = async (req, res) => {

    const comment = {
        '_id': req.params.commentId
    }

    const response = await comments.deleteOne(comment);
    await res.send(response);
};
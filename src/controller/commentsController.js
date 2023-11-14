import mongoose from "mongoose";

import comments from "../database/Model/comments.js";
import errorSearch from "../handlers/errorSearch.js";
import errorValidation from "../handlers/errorValidation.js";

//Show all the comments in the collection
export const index = async (req, res) => {
    const response = await comments.find().populate({
        path: 'userId',
        select: '_id name email phone'
    }).populate({
        path: 'postId',
        select: '_id title description content image'
    });

    await res.send(response);
};

//Store a single comment in the collection 
export const store = async (req, res) => {
    const { content, userId, postId } = req.body; 

    const timeElapsed = Date.now();
    const timeStamp = new Date(timeElapsed);
    const today = timeStamp.toISOString();

    const createdAt = today;
    const updatedAt = today;

    try {
        const response = await comments.create({
            content: content,
            userId: userId,
            postId: postId,
            createdAt: createdAt,
            updatedAt: updatedAt
        });
    
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorValidation(err);
        res.status(400).send(errorMessage);
        return
    }
};

//Show a unique comment in the collection
export const show = async (req, res) => {

    const comment = {
        '_id': req.params.commentId
    }

    try {
        const response = await comments.findOne(comment).populate({
            path: 'userId',
            select: '_id name email phone'
        }).populate({
            path: 'postId',
            select: '_id title description content image'
        });
    
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorSearch(err);
        res.status(400).send(errorMessage);
        return
    }
};

//Update a single comment data in the collection
export const update = async (req, res) => {
    const { content, userId, postId } = req.body;

    const comment = {
        '_id': req.params.commentId
    }

    try {
        const response = await comments.findById(comment);
        response.content = content;
        response.userId = userId;
        response.postId = postId;

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

    catch (err) {
        const errorMessage = errorSearch(err);
        res.status(400).send(errorMessage);
        return 
    }

};

//Delete permanently a single comment in the collection
export const forceDelete = async (req, res) => {

    const comment = {
        '_id': req.params.commentId
    }

    try {
        const response = await comments.deleteOne(comment);
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorSearch(err)
        res.status(400).send(errorMessage);
        return
    }
};
import mongoose from "mongoose";

import categories from "../database/Model/categories.js";
import errorSearch from "../handlers/errorSearch.js";
import errorValidation from "../handlers/errorValidation.js";

//Show all the categories in the collection
export const index = async (req, res) => {
    const response = await categories.find();

    await res.send(response);
};

//Store a single category in the collection 
export const store = async (req, res) => {
    const { name, image } = req.body; 

    const timeElapsed = Date.now();
    const timeStamp = new Date(timeElapsed);
    const today = timeStamp.toISOString();

    const createdAt = today;
    const updatedAt = today;

    try {
        const response = await categories.create({
            name: name,
            image: image,
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

    const category = {
        '_id': req.params.categoryId
    }

    try {
        const response = await categories.findOne(category);
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
    const { name, image } = req.body;

    const category = {
        '_id': req.params.categoryId
    }

    try {
        const response = await categories.findById(category);
        response.name = name;
        response.image = image;

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

    const categoty = {
        '_id': req.params.categoryId
    }

    try {
        const response = await categories.deleteOne(categoty);
        await res.send(response);
    }

    catch (err) {
        const errorMessage = errorSearch(err)
        res.status(400).send(errorMessage);
        return
    }
};
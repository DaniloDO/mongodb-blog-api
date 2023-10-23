import mongoose from "mongoose";

import categories from "../database/Model/categories.js";

export const index = async (req, res) => {
    const response = await categories.find();

    await res.send(response);
};

export const store = async (req, res) => {
    const { name, image } = req.body; 

    const timeElapsed = Date.now();
    const timeStamp = new Date(timeElapsed);
    const today = timeStamp.toISOString();

    const createdAt = today;
    const updatedAt = today;

    const response = await categories.create({
        name: name,
        image: image
    });

    await res.send(response);
};

export const show = async (req, res) => {

    const category = {
        '_id': req.params.categoryId
    }

    const response = await categories.findOne(category);

    await res.send(response);
};

export const update = async (req, res) => {
    const { name, image } = req.body;

    const category = {
        '_id': req.params.categoryId
    }

    const response = await categories.findById(category);

    response.name = name;
    response.image = image;

    await response.save();
    await res.send(response);

};

export const forceDelete = async (req, res) => {

    const categoty = {
        '_id': req.params.categoryId
    }

    const response = await categories.deleteOne(categoty);
    await res.send(response);
};
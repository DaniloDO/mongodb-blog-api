import mongoose, { Schema } from "mongoose";

import categoriesSchema from "../Schema/categoriesSchema.js";

const categories = mongoose.model('categories', categoriesSchema);

export default categories; 
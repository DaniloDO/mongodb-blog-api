import mongoose from "mongoose";

import categoriesSchema from "../Schema/categoriesSchema.js";

//Creation of the categories model following the categoriesSchema
const categories = mongoose.model('categories', categoriesSchema);

export default categories; 
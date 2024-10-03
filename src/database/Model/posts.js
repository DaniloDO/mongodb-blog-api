import mongoose from "mongoose";

import postsSchema from "../Schema/postsSchema.js";

//Creation of the posts model following the postsSchema
const posts = mongoose.model('posts', postsSchema);

export default posts; 
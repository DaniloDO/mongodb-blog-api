import mongoose from "mongoose";

import postsSchema from "../Schema/postsSchema.js";

const posts = mongoose.model('posts', postsSchema);

export default posts; 
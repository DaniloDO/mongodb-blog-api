import mongoose from "mongoose";

import commentsSchema from "../Schema/commentsSchema.js";

const comments = mongoose.model('comments', commentsSchema);

export default comments; 
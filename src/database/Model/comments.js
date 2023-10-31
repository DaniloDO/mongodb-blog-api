import mongoose from "mongoose";

import commentsSchema from "../Schema/commentsSchema.js";

//Creation of the comments model following the commentsSchema
const comments = mongoose.model('comments', commentsSchema);

export default comments; 
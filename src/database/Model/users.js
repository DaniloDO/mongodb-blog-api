import mongoose from "mongoose";

import usersSchema from "../Schema/usersSchema.js";

//Creation of the user model following the usersSchema
const users = mongoose.model('users', usersSchema);

export default users; 
import mongoose from "mongoose";

import usersSchema from "../Schema/usersSchema.js";

const users = mongoose.model('users', usersSchema);

export default users; 
import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import connection from "./database/Config.js";
import usersRouter from "./routes/usersRoutes.js";
import postsRouter from "./routes/postsRoutes.js";
import categoriesRouter from "./routes/categoriesRoutes.js";
import commentsRouter from "./routes/commentsRouter.js";

const port = 3000;
const app = express();

//Routes configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/routes', usersRouter);
app.use('/routes', postsRouter);
app.use('/routes', categoriesRouter);
app.use('/routes', commentsRouter);

app.set('json spaces', 2);

//Database connection
connection;

//Verifying if port is active
app.listen(port, console.log(`Listening on port: ${port}`))

//Landing page route
app.get('/', (req, res) => res.send({response: 'landing page active'}))
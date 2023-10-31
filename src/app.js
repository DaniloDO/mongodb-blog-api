import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import router from "./routes/routes.js";
import connection from "./database/Config.js";

const port = 3000;
const app = express();

//Routes configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/routes', router);

app.set('json spaces', 2);

//Database connection
connection;

//Verifying if port is active
app.listen(port, console.log(`Listening on port: ${port}`))

//Landing page route
app.get('/', (req, res) => res.send({response: 'landing page active'}))
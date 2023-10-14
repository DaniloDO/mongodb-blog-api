import express  from "express";
import router from "./routes/routes.js";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/routes', router);

app.set('json spaces', 2);

app.listen(port, console.log(`Listening on port: ${port}`))

app.get('/', (req, res) => res.send({response: 'landing page active'}))
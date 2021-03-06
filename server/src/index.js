import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './router/router'
import { PORT } from "./constants";
import errorHandler from './errorHandlers/errorHandler'
const app  = express();

app.use('/static',express.static(process.cwd() + '/public/images'));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);
app.use(errorHandler);
app.listen(PORT);

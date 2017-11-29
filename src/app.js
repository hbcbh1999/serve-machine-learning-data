import 'babel-polyfill';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import data from './routes/data';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use('/', data(false));
console.log("MEESHKAN_KEY from the process", process.env.MEESHKAN_KEY);
app.use(`/${process.env.MEESHKAN_KEY || "you-should-never-use-this-for-any-serious-deployment"}`, data(true));

export default app;


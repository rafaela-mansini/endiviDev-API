import express from "express";
import dotenv from "dotenv";
import { routes } from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
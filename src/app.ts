import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todos";

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_DB = process.env.MONGO_DB;

const app: Express = express();
const mongoUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

app.use(cors());
app.use(express.json());
app.use(todoRoutes);

mongoose
  .connect(mongoUrl, {})
  .then(() => {
    app.listen(PORT);
    console.log(`Server runing on http://${HOST}:${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });

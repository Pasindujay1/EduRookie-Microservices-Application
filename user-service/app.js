import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "./config/db_con.js";
import authRouter from "./routes/auth.js";

dotenv.config();
const app = express();

//middlewares
app.use(express.json()); //Send respones in json fomrat
app.use(morgan("tiny")); //log requests
app.use(cors());

//routes
app.use("/", authRouter);

//server config
const PORT = process.env.PORT || 9001;

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`User service is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  });

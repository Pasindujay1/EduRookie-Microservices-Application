import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "./config/db_con.js";
import courseRouter from "./routes/course.js";
import companyRouter from "./routes/company.js";

dotenv.config();

const app = express();

//middlewares
app.use(express.json()); //Send responses in JSON format
app.use(morgan("tiny")); //Log requests
app.use(cors()); //Enable CORS

//routes
app.use("/course", courseRouter);
app.use("/company", companyRouter);

//default route
app.get("/", (req, res) => {
  res.send("Welcome to the Course Service");
});

//server config
const PORT = process.env.PORT || 9005;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});

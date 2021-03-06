import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import signupRouter from "./routes/signup.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/signup", signupRouter);
app.use("/home", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

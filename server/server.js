const express = require("express");
const userRouter = require("./routes/user.js");
const app = express();

const port = 3000;

require("dotenv").config();

require("");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

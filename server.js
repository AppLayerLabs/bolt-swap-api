require("dotenv").config();
const loadRouter = require("./routes/loadRouter.js");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/", loadRouter);
app.listen(3001, () => console.log("Server Started"));


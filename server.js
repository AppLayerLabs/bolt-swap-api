require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const loadRouter = require("./routes/loadRouter");

app.use("/", loadRouter);
app.listen(3001, () => console.log("Server Started"));

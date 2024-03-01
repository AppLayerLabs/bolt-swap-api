require("dotenv").config();
const loadRouter = require("./routes/loadRouter.js");
const express = require("express");
const app = express();
const cors = require("cors");


// Configure CORS middleware options
const corsOptions = {
    origin: '*', // This allows all origins. Adjust as necessary for your use case.
    methods: ['POST', 'GET'], // Allowed request methods
    allowedHeaders: ['Content-Type', 'Accept-Encoding', 'Accept-Language'], // Allowed request headers
    credentials: true, // This allows cookies and other credentials to be sent with the request
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  loadRouter.use(cors(corsOptions));
//--------------------------------------------------------------------------//

app.use(express.json());


app.use("/", loadRouter);
app.listen(3001, () => console.log("Server Started"));


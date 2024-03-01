require("dotenv").config();
const loadRouter = require("./routes/loadRouter.js");
const express = require("express");
const app = express();

//----- CORS options for API server access -----//
const cors = require("cors");

// Define an array of allowed domains
let allowedOrigins;

  allowedOrigins = [
    "*"
  ];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the request origin is in the allowedOrigins array
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Use the cors middleware with the specified options
app.use(cors(corsOptions));
//--------------------------------------------------------------------------//

app.use(express.json());


app.use("/", loadRouter);
app.listen(3001, () => console.log("Server Started"));


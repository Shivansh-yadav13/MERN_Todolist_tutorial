const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

mongoose.connect(process.env.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Connected to the database!")
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })

app.get("/", (req, res) => {
  res.send("Hello youtube");
});



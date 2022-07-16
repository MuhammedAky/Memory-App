const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/posts.js");

const app = express();

app.use(bodyParser.json({ limit:"30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true }));
app.use(cors());

app.use("/posts",postRoutes);

const CONN_URL = "mongodb://127.0.0.1/memories"
const PORT = 5000;

mongoose.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((err) => console.log(`${err} did not connect`));
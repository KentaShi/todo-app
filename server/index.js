const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const todoRoute = require("./routes/todos");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log("Connected to Mongoose...");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos", todoRoute);

app.listen(PORT, () => console.log(`Serever listening on port ${PORT}`));

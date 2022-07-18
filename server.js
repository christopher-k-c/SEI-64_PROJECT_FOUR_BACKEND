const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

const indexRouter = require("./routes/index")

app.use("/", indexRouter)

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

mongoose.connect(process.env.mongoDBURL,
    {useNewUrlParser: true,
        useUnifiedTopology: true},
        () => {
            console.log('MongoDB connected')
        });
        
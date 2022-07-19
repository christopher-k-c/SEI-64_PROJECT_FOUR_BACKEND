const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT;

const indexRouter = require("./routes/index")
const authRouter = require("./routes/auth")

app.use("/", indexRouter);
app.use("/", authRouter);


app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

mongoose.connect(process.env.mongoDBURL,
    {useNewUrlParser: true,
        useUnifiedTopology: true},
        () => {
            console.log('MongoDB connected')
        });
        
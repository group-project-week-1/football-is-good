require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
const router = require("./routes")
app.use(cors())
mongoose.connect('mongodb://localhost:27017/hacktiv8git', {useNewUrlParser: true}, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("MONGOOSE SUCCESS CONNECTED")
    }
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router)


app.listen(PORT, function () {
    console.log(`LISTENING TO PORT ${PORT}`)
})
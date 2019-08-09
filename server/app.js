const cors = require('cors')
if( !process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const env = require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const mogran = require('morgan')
const app = express()
// const errHandler = require('./middlewares/errHandler')
// const routes = require('./routes')
const news = require('./routes/news')

app.use(cors())
app.use(mogran('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Check Connection
mongoose.connect('mongodb://localhost:27017/mongoose-glory',  {useNewUrlParser: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connect to mongodb')
});

// app.use('/', routes)
app.use('/', news)
// app.use(errHandler)

app.listen(process.env.PORT, () => console.log(`You listen on port ${process.env.PORT}`))
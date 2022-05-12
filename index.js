const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require("body-parser");
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const connectDB = require('./server/database/connection')

const app = express()

// mongoose.connect('mongodb://localhost:27017/Eclone').then(() => console.log("Connected to DB")).catch(err => console.log(err))
dotenv.config()
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

connectDB()
app.use(cookieParser())
app.use(bodyparser.urlencoded({ extended : true}))
app.set("view engine", "ejs")

// load assets
app.use('/dist', express.static(path.resolve(__dirname, "assets/dist")))
app.use('/plugins', express.static(path.resolve(__dirname, "assets/plugins")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/userRouter'))
app.use('/', require('./server/routes/productRouter'))
app.use('/', require('./server/routes/categoryRouter'))
app.use('/', require('./server/routes/authRouter'))
app.use('/', require('./server/routes/router'))


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on PORT 3000")
})
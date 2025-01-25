const express = require("express")
const errorHanler = require("./middlewares/errorHandler")
const router = require("./routes/auth")
const connectDB = require("./config/db")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT
const bcrypt = require('bcrypt');
const cors = require("cors")
// Middleware
app.use(express.json())
app.use(cors())

// DataBase connected 
connectDB()
// Router

app.use("/api/auth",require("./routes/auth")) //That is auth router 

app.use(errorHanler)
app.listen(PORT,()=>console.log(`Server is running at port : ${PORT}`))

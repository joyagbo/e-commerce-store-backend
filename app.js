const express = require('express');
const bodyParser = require("body-parser");
const dbConnect = require('./config/dbconnection');
const userRouter = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const app = express();
const dotenv = require('dotenv').config()
const cookieParser = require("cookie-parser")
dbConnect()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());


  



app.use('/api/user',userRouter)
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server listening on PORT ${PORT}`)
})
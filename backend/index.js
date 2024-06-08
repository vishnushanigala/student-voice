const express=require('express');
const app=express();
const jwt=require('jsonwebtoken')
const cors=require('cors')
app.use(cors())

//Environmental variables
require('dotenv').config()
const port=process.env.PORT

//Routes
 const userRoutes=require('./routes/user.route')
 const adminRoutes=require('./routes/admin.route')
 const complaintRoutes=require('./routes/complaint.route')
 const loginRoutes=require('./routes/login.route')
 const {verifyToken,isAdmin}=require('./middleware/authorization')

//mongDB connection
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/complaint")
.then((res)=>{console.log("connected successfully")})
.catch((err)=>{console.log(err)})


 app.use(express.json())
 app.use(express.urlencoded({extended : true}))

// //Routes
 app.use('/complaint',verifyToken,complaintRoutes)
 app.use('/signup',userRoutes)

 app.use('/login',loginRoutes)
 app.use('/admin',verifyToken,isAdmin,adminRoutes)
app.get('/',(req,res)=>{
    res.status(200).send("hello page")
})

//server connection
app.listen(port,()=>{console.log(`server is listening at port ${port}`)})
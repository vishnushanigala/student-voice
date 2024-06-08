const mongoose=require('mongoose')
//const cartModel=require('./cart.model')

const userSchema=mongoose.Schema({ 
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true,
    },
    userId :{
        type : String,
        required : true,
        unique :true
    },
    mobileNumber :{
        type : String,
        required : true,
    },
    gender :{
        type : String,
        
    },
    active :Boolean,
    role :String,
    
    
});

const userModel=mongoose.model("user",userSchema)

module.exports=userModel
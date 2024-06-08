const loginModel=require('../model/login.model')
const userModel=require('../model/user.model')
const jwt=require('jsonwebtoken')
require('dotenv')
const secret=process.env.SECRET

const checkUser=async(req,res)=>{
    try{
        console.log("hi");
        const {email,password}=req.body;
        const user=await userModel.findOne({"email" : email})
        const role=user.role
        const username=user.username
        const userId=user.userId
         console.log(user)
        if(user && user.password===password){
            
            const existingUser= await loginModel.findOne({"email" : email})
            
            if(!existingUser)
                loginModel.create({"email": email,"password" : password})
                
            jwt.sign({user},secret,(err,token)=>{
                if(!err)
                    res.status(200).json({token,role,username,userId})
                else
                    res.status(407).send(false)
            })
        }
        else{
            res.status(404).send(false)
        }

    }
    catch(error){
        res.status(404).send(false)
    }
}

module.exports={
    checkUser
}

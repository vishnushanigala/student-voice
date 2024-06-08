const mongoose=require('mongoose')

const complaintSchema=mongoose.Schema({
    // complaintID : {type : String},
    userId : {type : String, required : true },
    
    category : {type : String, },
    image : {type : String, },
    
    description : {type : String,},
    nature : {type : String, },
    status : {type : String},
})

const complaintModel =mongoose.model("complaint",complaintSchema)

module.exports=complaintModel
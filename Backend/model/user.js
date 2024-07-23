const mongoose=require('mongoose')
const schema=mongoose.Schema({
    Name:String,
    Place:String,
    Age:Number,
    Email:String,
    Education:String,
    Phoneno:Number,
    Password:String,
    Role:{
        type:String,
        default:"user"
    }
})
const userModel=mongoose.model("user",schema)
module.exports=userModel
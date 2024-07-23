const mongoose=require('mongoose')
const schema=mongoose.Schema({
    Title:String,
    Author:String,
    Price:String,
    About:String,
    Available:String,
    Imgurl:String
    
})
const bdetailModel=mongoose.model("bdetail",schema)
module.exports=bdetailModel
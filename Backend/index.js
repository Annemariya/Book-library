//import
var express=require('express')
require('./connection')
var cors=require('cors')

const user=require('./model/user')
const bdetailModel = require('./model/bdetail')
const userModel = require('./model/user')

//initialisation
var app=express()

//middleware
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(express.json())

//api
// to add data to db
app.post('/add',async(req,res)=>{
    try {
        console.log(req.body)
        await user(req.body).save()
        res.send({message:"signed up successfully"})
    } catch (error) {
        console.log(error)
    }
})
// to add book details
app.post('/addb',async(req,res)=>{
    try { 
        console.log(req.body)
        await bdetailModel(req.body).save()
        res.send({message:"Book added successfully"})
    } catch (error) {
        console.log(error)
    }
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    userModel.findOne({Email:email})
    .then(user=>{ 
        if(user){
            if(password===user.Password){
               return res.json("Success")
            }else{
                return res.json("Incorrect Password")
            }
        }else{
            return res.json("No record found")
        }
    })
})

    // to view all the users
    app.get('/view',async(req,res)=>{
        try {
            const data=await user.find()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    })
    // to view all the books
    app.get('/viewb',async(req,res)=>{
        try {
            const data=await bdetailModel.find()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    })

    // to update data
app.put("/edit/:id",async(req,res)=>{
    try {
        var data=await user.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:'updated successfully',data}) 
    } catch (error) {
        console.log(error)
    }
})
app.put("/editb/:id",async(req,res)=>{
    try {
        var data=await bdetailModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:'updated successfully',data}) 
    } catch (error) {
        console.log(error)
    }
})

 // to delete user
 app.delete('/delete/:id',async(req,res)=>{
    try {
        await user.findByIdAndDelete(req.params.id)
        res.send({message:"Deleted successfully"})
    } catch (error) {
        console.log(error)
    }
})
// to delete book
app.delete('/deleteb/:id',async(req,res)=>{
    try {
        await bdetailModel.findByIdAndDelete(req.params.id)
        res.send({message:"Deleted successfully"})
    } catch (error) {
        console.log(error)
    }
})

//port allocation
app.listen(3002,()=>{
    console.log("port is up")
})

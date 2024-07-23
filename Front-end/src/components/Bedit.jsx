import { Box, Button, Card, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Bedit = () => {
  var[inputs,setInputs]=useState({Title:"",Author:"",About:"",Price:"",Available:"",Imgurl:""})
  var navigate=useNavigate()
  var location=useLocation()
  console.log("loc",location.state)


  const inputHandler=(e)=>{
      setInputs({...inputs,[e.target.name]:e.target.value})
      console.log(inputs)
     }


  const addHandler=(e)=>{
      e.preventDefault()
      if(location.state!==null){
            axios.put("http://localhost:3002/editb/"+location.state.val._id,inputs)
              .then((res)=>{})
              .catch((err)=>console.log(err))
          }
          else{
      console.log("clicked")
      axios.post("http://localhost:3002/addb",inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        window.location.reload()
        navigate('/b') 
        console.log(res.data)
      })
  }
}
useEffect(()=>{
    if(location.state!==null){
     setInputs({...inputs,Title:location.state.val.Title,
       Author:location.state.val.Author,
       About:location.state.val.About,
       Price:location.state.val.Price,
       Available:location.state.val.Available,
       Imgurl:location.state.val.Imgurl
       })
    }
    },[])
  return (
    <>
    <section style={{backgroundImage:
           "url('https://farm1.staticflickr.com/130/376152628_249e3630c0_o_d.jpg')",
       height:"100vh",width:"100wh",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition:"center",justifyContent:"center",alignItems:"center",display:"flex"}}>
      <Box style={{margin:'10%',opacity:0.85,width:"70vh",height:"90vh"}}>
        <Card style={{marginTop:'5%',textAlign:'center'}}>
            <Typography style={{fontSize:'20px',color:'darkblue'}}>Book Details</Typography><br/>
            <TextField variant='outlined' id='outlined-basic' label='Title' onChange={inputHandler}
      name="Title"
      value={inputs.Title}/><br/><br/>
            <TextField variant='outlined' id='outlined-basic' label='Author'onChange={inputHandler}
      name="Author"
      value={inputs.Author}/><br/><br/>
            <TextField variant='outlined' id='outlined-basic' label='About' onChange={inputHandler}
      name="About"
      value={inputs.About}/><br/><br/>
            <TextField variant='outlined' id='outlined-basic' label='Image URL' onChange={inputHandler}
      name="Imgurl"
      value={inputs.Imgurl}
            /><br/><br/>
            <TextField variant='outlined' id='outlined-basic' label='Price' onChange={inputHandler}
      name="Price"
      value={inputs.Price}
            /><br/><br/>
            <TextField variant='outlined' id='outlined-basic' label='Available' onChange={inputHandler}
      name="Available"
      value={inputs.Available}
            /><br/><br/>
            <Button variant='contained' onClick={addHandler}><Link to='/b' style={{textDecoration:'none',color:'white'}}>Submit</Link></Button>
        </Card>
      </Box>
      </section>
    </>
  )
}

export default Bedit

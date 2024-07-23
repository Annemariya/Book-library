import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    var[inputs,setInputs]=useState({Name:"",Place:"",Age:"",Email:"",Education:"",Phoneno:"",Password:"",Role:""})
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
            axios.put("http://localhost:3002/edit/"+location.state.val._id,inputs)
              .then((res)=>{
                navigate('/p')
              })
              .catch((err)=>console.log(err))
          }
          else{
        console.log("clicked")
        axios.post("http://localhost:3002/add",inputs)
        .then((res)=>{
          console.log(res)
          alert(res.data.message)
          window.location.reload()
          navigate('/') 
          console.log(res.data)
        })
    }
}
    useEffect(()=>{
        if(location.state!==null){
         setInputs({...inputs,Name:location.state.val.Name,
           Place:location.state.val.Place,
           Age:location.state.val.Age,
           Email:location.state.val.Email,
           Education:location.state.val.Education,
           Phoneno:location.state.val.Phoneno,
           Password:location.state.val.Password})
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
    <Box style={{margin:"25%",opacity:0.85,width:"80vh"}}>
    <Card style={{marginTop:'5%',textAlign:'center'}} >
     <CardContent>
      <Typography variant='h5' style={{color:'darkblue'}}>Sign Up!!</Typography><br/>
      <TextField required id="outlined-basic" label="Name" variant="outlined"  
      onChange={inputHandler}
      name="Name"
      value={inputs.Name}/><br/>
      <TextField required id="outlined-basic" label="Place" variant="outlined" 
       onChange={inputHandler}
       name="Place"
       value={inputs.Place}/><br/>
      <TextField required id="outlined-basic" label="Age" variant="outlined"
       onChange={inputHandler}
       name="Age"
       value={inputs.Age} /><br/>
      <TextField  required id="outlined-basic" label="Email id" variant="outlined" 
       onChange={inputHandler}
       name="Email"
       value={inputs.Email}/><br/>
      <TextField required id="outlined-basic" label="Education" variant="outlined" 
       onChange={inputHandler}
       name="Education"
       value={inputs.Education}/><br/>
      <TextField required id="outlined-basic" label="Phone number" variant="outlined" 
       onChange={inputHandler}
       name="Phoneno"
       value={inputs.Phoneno}/><br/>
      <TextField required id="outlined-basic" label="Password" variant="outlined" 
       onChange={inputHandler}
       name="Password"
       value={inputs.Password}/><br/>
      <Button variant="contained" onClick={addHandler}>
        <Link to='/' style={{textDecoration:'none',color:'white'}}>
        Sign Up
        </Link>
        </Button>
      </CardContent>
      </Card>
      </Box>
      </section>
    </>
  )
}

export default Signup

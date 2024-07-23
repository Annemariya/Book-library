import { Card,  Typography, CardContent, Box, FormControl, InputLabel, OutlinedInput} from '@mui/material'
import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import axios from 'axios';

const Homep = () => {
var navigate=useNavigate()
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

axios.defaults.withCredentials=true

const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:3002/login',{email,password})
  .then(res=>{
    console.log(res.data)
    if(res.data==="Success"){
      alert("Login Successful")
      if(email==='admin@gmail.com'){
        navigate('/av')
      }
      else{
        navigate('b')
      }
    }
    else if(res.data==="Incorrect Password"){
      alert("Incorrect Password")
    }else{
      alert("No record found")
    }
  }).catch(err=>console.log(err))
  
}


  return (
    <>
    
    <section style={{backgroundImage:
           "url('https://farm1.staticflickr.com/130/376152628_249e3630c0_o_d.jpg')",
       height:"100vh",width:"100wh",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition:"center",justifyContent:"center",alignItems:"center",display:"flex"}}>
       <Box style={{margin:"25%",opacity:0.85,width:"80vh"}}>
           <Card style={{textAlign:'center',alignItems:'center'}}>
             <CardContent >
             <Typography variant='h5' style={{color:'darkblue'}}>Sign In(If you're already a member)</Typography><br/>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m:1, width: '25ch' }} variant="outlined"></FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <AccountCircleIcon sx={{fontSize:40}}/>
        <OutlinedInput type="text"
        id="email"
        autoComplete='off'
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        required />
        <InputLabel htmlFor="password"><strong>Password</strong></InputLabel> 
        <HttpsIcon sx={{fontSize:40}} /><OutlinedInput 
        type="password"
        id="password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        required 
        /><br/><br/>
        <button variant='contained'>Sign In</button>
      </form>
      <Typography variant='h5' style={{color:'darkgrey'}}>
        Don't have an Account?<Link to='/s'>Sign Up</Link></Typography><br/>
        </CardContent>
        </Card>
        </Box>
    </section>
      </>
  )
}

export default Homep

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Profile = () => {
var [output,setOutput]=useState([])
var navigate=useNavigate()
var location=useLocation()

const editValue=(val)=>{
    console.log("clicked edit")
    navigate('/s',{state:{val}})
   }


   const delValue=(id)=>{
    console.log(id)
   axios.delete("http://localhost:3002/delete/"+id)
    .then((res)=>{
    alert(res.data.message)
    window.location.reload()
    })
    .catch((err)=>console.log(err))
  }
     

  useEffect(()=>{  
        axios.get("http://localhost:3002/view")
        .then((response)=>{
            console.log(response.data)
            setOutput(response.data)
        })
        .catch(()=>{
          console.log(error)
        })   
  },[])
  
  return (
    <div style={{margin:'10%'}}>
     <Grid container spacing={2}>
     {output.map((val,i)=>{
            return(  
                <>
        <Grid item xs={12} md={4}>
        <Card style={{textAlign:'center',opacity:0.85}} key={i}>
            <CardContent>
                <Typography variant='h5' color={"chocolate"}>Personal Details</Typography><br/><br/>
                <Typography variant='h6' gutterBottom>Name:{val.Name}</Typography>
                <Typography variant='h6' gutterBottom>Place:{val.Place}</Typography>
                <Typography variant='h6' gutterBottom>Age:{val.Age}</Typography>
                <Typography variant='h6' gutterBottom>Email:{val.Email}</Typography>
                <Typography variant='h6' gutterBottom>Education:{val.Education}</Typography>
                <Typography variant='h6' gutterBottom>Password:{val.Password}</Typography><br/><br/>
                <Typography variant='h5' color={"chocolate"}>Contact Details</Typography><br/>
                <Typography variant='h6' gutterBottom>Phone number:{val.Phoneno}</Typography>
                <Button variant='contained' onClick={()=>editValue(val)}>Edit Profile</Button><br/><br/>
                <Button variant='contained'onClick={()=>delValue(val._id)}>Delete Profile</Button><br/><br/><br/>
            </CardContent>
        </Card>
        </Grid>
        </>
            )
          
    })}
    </Grid> 
     </div>
  )
}

export default Profile

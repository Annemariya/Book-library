import { Box, Button, Card, CardContent } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Adview = () => {
  return (
    <>
       <section style={{backgroundImage:
           "url('https://farm1.staticflickr.com/130/376152628_249e3630c0_o_d.jpg')",
       height:"100vh",width:"100wh",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition:"center",justifyContent:"center",alignItems:"center",display:"flex"}}>
       <Box style={{alignItems:"center",margin:"15%",opacity:0.85,width:"60vh",height:"60vh"}}  >
        <Card style={{textAlign:'center',marginTop:"5%"}}>
           <CardContent >
           <AccountCircleIcon sx={{fontSize:40}} /><Button variant='contained' >
            <Link to='/p' style={{textDecoration:'none',color:'white'}}>Manage Users</Link></Button><br/><br/>
           <AutoStoriesIcon sx={{fontSize:40}} /><Button variant='contained' >
            <Link to='/b' style={{textDecoration:'none',color:'white'}}>Edit Book details</Link></Button><br/><br/>
           </CardContent>
         </Card>
         </Box>
         </section>
    </>
  )
}

export default Adview

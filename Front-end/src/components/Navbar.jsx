import React from 'react'
import {Box, AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { lime, yellow } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
       <Box sx={{flexGrow:1}}>
        <AppBar className='nav' position='static' style={{ background:lime[900] }}>
            <Toolbar>
              <Typography variant='h4' component="div" sx={{ flexGrow: 1,color:'bisque' }} >
                Literary Haven
              </Typography>
              <Button color='inherit'>
                  <Link to={'/'} style={{textDecoration:'none'}} ><HomeIcon sx={{color:'bisque'}} /></Link></Button>
               <Button color='inherit'>
               <Link to={'/b'} style={{textDecoration:'none',color:'bisque'}} >Books</Link></Button>
               <Button color='inherit'>
               <Link to={'/'} style={{textDecoration:'none',color:'bisque'}} >Logout</Link></Button>
             </Toolbar>
         </AppBar>
       </Box>
     </>
  )
}

export default Navbar

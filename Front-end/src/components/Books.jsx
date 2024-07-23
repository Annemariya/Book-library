import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const Books = () => {
    var [output,setOutput]=useState([])
var navigate=useNavigate()

const editValue=(val)=>{
    console.log("clicked edit")
    navigate('/be',{state:{val}})
   }


   const delValue=(id)=>{
    console.log(id)
   axios.delete("http://localhost:3002/deleteb/"+id)
    .then((res)=>{
    alert(res.data.message)
    window.location.reload()
    })
    .catch((err)=>console.log(err))
  }
     


  useEffect(()=>{
        axios.get("http://localhost:3002/viewb")
        .then((response)=>{
            console.log(response.data)
            setOutput(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })   
     },[])
     
     const [likes, setLikes] = useState(10);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <br/><Button variant='contained'><Link to='/be' style={{textDecoration:'none', color:'white'}}>Add a new Book</Link></Button>
      <Grid container spacing={2} marginTop={5} >
      {output.map((val,i)=>{
            return( 
                <>
    <Grid item xs={12} md={3}>
     <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={val.Imgurl}
          alt='book'
           />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title:{val.Title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Author:{val.Author}
          </Typography>
            <Typography variant="body2" color="text.secondary">
            About:{val.About}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Price:{val.Price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AddIcon  sx={{fontSize:20,color:'grey'}}></AddIcon>
        <DeleteIcon onClick={()=>delValue(val._id)} sx={{fontSize:20,color:'grey'}}></DeleteIcon>
        <EditIcon onClick={()=>editValue(val)} sx={{fontSize:20,color:'grey'}}></EditIcon>
        <Button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter">{ `Likes | ${likes}` }</span>
    </Button>
    
      </CardActions>
     
    </Card>
    </Grid>
    </>
)
})}
    </Grid>
    
    </div>
  )
}

export default Books

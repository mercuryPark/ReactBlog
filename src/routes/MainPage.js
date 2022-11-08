import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, CardActionArea, CardActions } from '@mui/material';
import imgOne from '../img/background.jpeg'

function MainPage(props) {
    return (
        <a href={'/posts/' + props.link[props.i]}>
      <Card sx={{ width: 400 }}>
        <CardActionArea>
          <CardMedia className="cardImg"
            component="img"
            height="200"
            image={props.content[props.i].image}
            alt="green iguana"
          />
          <CardContent>
          
          
            <Typography gutterBottom variant="h5" component="div">
            {props.content[props.i].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.content[props.i].contents}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
          {props.content[props.i].hashtag}
          </Button>
        </CardActions> */}
        <Typography className="hashTag" component="div" >
          {props.content[props.i].date}
            </Typography>
            <Typography className="hashTag" component="div" >
            {
                 props.content[props.i].hashtag.map((a,j)=>{
           return props.content[props.i].hashtag[j]
         })
         }
         </Typography>
         
        
      </Card>
      </a>
    );
  }
  
 
export default MainPage
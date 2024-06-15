import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from './../../../assets/img1.png'
import img3 from './../../../assets/img3.png'
import img5 from './../../../assets/img5.png'
import { Box, useTheme } from '@mui/material';

export default function CardM({img}) {
    const theme=useTheme()
  return (
    <Card sx={{ maxWidth: {xs:'100%'}}}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px',flexDirection:'column'}}>

        <Typography variant='p' sx={{fontWeight:700,color:'#000103'}}>
          Round Trip
        </Typography>
        <Typography variant="p" color="text.secondary">
         starting From
        </Typography>
        <Typography variant="h3" color="#000103">
         383
        </Typography>
        <Typography variant="body2" color="text.secondary">
         11-jan-20-Mar
        </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{backgroundColor:theme.colorY,height:'40px'}}>
        <Box sx={{display:'flex',justifyContent:'center',width:'100%'}}>
            <Typography sx={{color:theme.headingtext,fontSize:theme.headingtext,fontWeight:theme.headingtext}}>
                Enquire Now
            </Typography>
        </Box>
       
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
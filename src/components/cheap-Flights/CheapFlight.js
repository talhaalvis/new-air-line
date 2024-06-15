import React from 'react'
import img2 from '../../assets/img2.png'
import BasicTabs from '../home/header/headerFlightPortion/Tabs'
import { Box, Container, Typography } from '@mui/material'
import LastMin from './lastmindeals/LastMin'
import TopDestination from './topDestination/TopDestination'
import NewsLetter from '../newsLetter/NewsLetter'

const CheapFlight = () => {
  return (
    <>
    <Box sx={{
      backgroundImage: `url(${img2})`, // Relative path to the image
      backgroundSize: 'cover', // or 'contain' depending on your preference
      backgroundPosition: 'center', // or any other position you prefer
      // Add other styles as needed
      width: '100%', // Example width
      height: '600px',
      mt:'1px',
     
       // Example height
  }}>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',pt:'100px'}}>
      <Typography variant='h4' sx={{color:'white'}}>Search Your Desired Flights</Typography>
    </Box>
      

  </Box>
  <Container>
    <Box sx={{mt:'-130px'}}>
    <BasicTabs/>


    </Box>
    <LastMin/>
    <Box  sx={{display:'flex',flexDirection:'column',gap:'20px',justifyContent:'center',alignItems:'center',mt:'40px'}}>
      <Typography variant='h2' sx={{color:"#ffd71e",fontWeight:800,fontSize:'35px'}}>Top Destinations</Typography>
      <Typography variant='p' sx={{color:"#07253f",fontWeight:700,fontSize:'18px'}}>CHECK OUT FLIGHTS TO TOP DESTINATIONS</Typography>

    <TopDestination/>
    </Box>
    

  </Container>
  <Box sx={{mt:'60px'}}>

  <NewsLetter/>
  </Box>

    </>
  )
}

export default CheapFlight
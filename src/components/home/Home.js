import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import {Box, Button, Container, Typography } from '@mui/material'
import HFlightPortion from './header/headerFlightPortion/HFlightPortion'
import TitlebarImageList from './ImageList/ImageList'
import PopularFlight from './popularFlight/PopularFlight'
import Footer from '../footer/Footer'
import { Modal } from 'antd'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const location = useLocation(); // Get the location object from react-router-dom
  // Check if the current route is '/home' and set a timeout to open the modal after 5 seconds
  if (location.pathname === '/' && !modalVisible) {
    setTimeout(() => {
      setModalVisible(true);
    }, 180000);
  }
  return (
   <>
   {/* <Header/> */}
   <HFlightPortion/>
   {/* <h1>hfsdfjdjkj</h1> */}
   <TitlebarImageList/>
 
   {/* <PopularFlight/> */}
   <Modal
  //  style={{width:'50%'}}
        // title="Modal Title"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null} // Hide the footer
      >
        <Typography sx={{color:'#000',fontSize:'17px',fontWeight:400}}>In Search of Unbeatable Deals? Yes, we have an extensive selection just for you!</Typography>
        <Typography sx={{color:'#333',fontSize:'14px',mt:'20px'}}>That's right. Connect with our welcoming team to explore special prices that you won't find advertised anywhere else. We're ready to offer you an array of travel options, each with our guaranteed seal of the lowest price!</Typography>
        <Typography sx={{color:'#333',fontSize:'14px',mt:'20px'}}>What are you waiting for?</Typography>
        <Typography sx={{color:'#333',fontSize:'14px',mt:'20px'}}>Exclusive travel offers await you.</Typography>
        
        <Box sx={{display:'flex',alignItems:'center'}}>

        <Typography sx={{color:'#000',fontSize:'14px',mt:'20px'}}>Call  </Typography>
        <a
                href="tel:+441494416425"
                style={{
                  marginTop:'12px',
                  marginLeft:'3px',
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: '#e30425',
                  marginRight:'3px',
                  paddingTop:'3px'
                }}
              >
               +44 1494 416425 
              </a>
              <Typography sx={{color:'#000',fontSize:'14px',mt:'20px'}}>for free! </Typography>
        </Box>
        <Typography sx={{color:'#333',fontSize:'14px',mt:'10px'}}>Guaranteed best prices.</Typography>
                <Typography sx={{color:'#333',fontSize:'12px',mt:'5px'}}>(Open Monday - Saturday, 9:00 AM to 6:00 PM)</Typography>
                <Button sx={{background:'#337ab7',color:'#ffffff',mt:'30px'}} onClick={()=>setModalVisible(false)}>May be Later !</Button>

      </Modal>

   </>
   
  )
}

export default Home
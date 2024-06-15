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
        <Typography sx={{color:'#000',fontSize:'17px',fontWeight:400}}>Looking for better Deals? YES, we have more for you!</Typography>
        <Typography sx={{color:'#333',fontSize:'14px',mt:'20px'}}>That's correct. Talk to our friendly agents to check the additional unadvertised fares. We will be happy to quote you the multiple travelling options with our price guaranteed commitment !</Typography>
        <Typography sx={{color:'#333',fontSize:'14px',mt:'20px'}}>So, what else are you waiting for?</Typography>
        <Box sx={{display:'flex',alignItems:'center'}}>

        <Typography sx={{color:'#000',fontSize:'14px',mt:'20px'}}>Call Now Free :</Typography>
        <a
                href="tel:+442080041191"
                style={{
                  marginTop:'10px',
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: '#e30425'
                }}
              >
                +44 208 0041 191
              </a>
        </Box>
                <Typography sx={{color:'#333',fontSize:'12px',mt:'5px'}}>(Mon - Sat : 9:00AM - 6:00PM)</Typography>
                <Button sx={{background:'#337ab7',color:'#ffffff',mt:'30px'}} onClick={()=>setModalVisible(false)}>May be Later !</Button>

      </Modal>

   </>
   
  )
}

export default Home
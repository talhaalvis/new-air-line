import { Box, Container } from '@mui/material'
// import img3 from '../../../../assets/img3.png'
import img3 from '../../../../assets/hbackg.jpeg'
import React from 'react'
import BasicTabs from './Tabs'

const HFlightPortion = () => {
    return (
        
            <Box sx={{
                backgroundImage: `url(${img3})`, // Relative path to the image
                backgroundSize: 'cover', // or 'contain' depending on your preference
                backgroundPosition: 'center', // or any other position you prefer
                // Add other styles as needed
                width: '100%', // Example width
                height:{
                    sm:'600px',xs:'100%'
                },
                mt:'1px'
                 // Example height
            }}>
                <Container>
                    <Box sx={{pt:'80px'}}>

                    <BasicTabs/>
                    </Box>

                </Container>

            </Box>

     
    )
}

export default HFlightPortion
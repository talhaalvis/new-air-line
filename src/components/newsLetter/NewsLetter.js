import { PhoneOutlined } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Form, Input } from 'antd'
import React from 'react'
import Footer from '../footer/Footer';

const NewsLetter = () => {
    return (
        <Box sx={{ backgroundColor: '#07253f', }}>

            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} lg={4}>
                        <Typography sx={{ color: '#ffd71e', fontWeight: 700, fontSize: '30px' }} varient='h2'>Fly Safari Ltd.</Typography>
                        <Typography sx={{ color: 'white', fontWeight: 300, fontSize: '16px', lineHeight: '18px', letterSpacing: '1px', mt: '15px' }}>Just concentrate on our name and it describes all.
                            Providing the variety of travel products with matchless Services at
                            economical rates to all parts of the world by making reservation
                            procedure simpler, easier and faster. Achieving customer
                            satisfaction is our ultimate goal.
                        </Typography>
                        <Button sx={{ backgroundColor: '#07253f', color: '#ffd71e', border: '1px solid #ffd71e', mt: '20px' }}>READ MORE</Button>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography sx={{ color: '#ffd71e', fontWeight: 700, fontSize: '30px', }} varient='h2'>NEWSLETTER</Typography>
                        <Typography sx={{ color: 'white', fontWeight: 300, fontSize: '16px', lineHeight: '18px', letterSpacing: '1px', mt: '15px' }}>
                            Exclusive flight deals in your inbox.
                        </Typography>
                        <Form>
                            <Form.Item >
                                <Input style={{ backgroundColor: 'white', borderRadius: '50px', marginTop: '20px', height: '40px' }} placeholder='Enter Your Email'>
                                </Input>
                            </Form.Item>
                            <Button sx={{ backgroundColor: '#0165a3', color: 'white' }}>Subscribe</Button>
                        </Form>

                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography sx={{ color: '#ffd71e', fontWeight: 700, fontSize: '30px' }} variant='h2'>CONTACT US</Typography>
                        {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mt: '15px' }}>
                            <PhoneOutlined sx={{ color: "#ffd71e" }} />
                            <Typography sx={{ color: 'white' }}>
                                <a href="tel:+442080041191" style={{ textDecoration: 'none', color: 'inherit' }}>+44 208 0041 191</a>
                            </Typography>
                        </Box> */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mt: '15px' }}>
                            <PhoneOutlined sx={{ color: "#ffd71e" }} />
                            <Typography sx={{ color: 'white' }}>
                                <a href="tel:+442080041191" style={{ textDecoration: 'none', color: 'inherit' }}>+44 208 0041 191</a>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mt: '15px' }}>
                            <PhoneOutlined sx={{ color: "#ffd71e" }} />
                            <Typography sx={{ color: 'white' }}>
                                <a href="tel:+447523458826" style={{ textDecoration: 'none', color: 'inherit' }}>+44 752 3458 826</a>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mt: '15px' }}>
                            <MailOutlineIcon sx={{ color: "#ffd71e" }} />
                            <Typography sx={{ color: 'white' }}>
                                <a href="mailto:admin@flysafariuk.co.uk" style={{ textDecoration: 'none', color: 'inherit' }}>Admin@flysafariuk.co.uk</a>
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
            <Box sx={{ marginTop: "50px" }}>

                <Footer />
            </Box>
            <Box sx={{ marginTop: "30px" }}>
                <Box sx={{background:'#041321',width:'100%',height:"20px",display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Typography sx={{color:'#ffffff',fontSize:'14px'}}>© 2024 Flysafariuk.co.uk</Typography>

                </Box>
            </Box>

        </Box>
    )
}

export default NewsLetter
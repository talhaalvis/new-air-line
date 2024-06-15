import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import imgbg from '../../assets/contact.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { PhoneOutlined } from '@mui/icons-material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Option } from 'antd/es/mentions';
import NewsLetter from '../newsLetter/NewsLetter';

const Contact = () => {
    const onFinish = (value) => {
        console.log(value)

    }
    return (
        <Box>
            <Box sx={{
                backgroundImage: `url(${imgbg})`, // Relative path to the image
                backgroundSize: 'cover', // or 'contain' depending on your preference
                backgroundPosition: 'center', // or any other position you prefer
                // Add other styles as needed
                width: '100%', // Example width
                height: {
                    sm: '400px', xs: '100%'
                },
                mt: '1px'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '28px', color: "white" }}>CONTACT US</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: '18px', color: "white" }}>Let's Get Connected</Typography>
                </Box>

            </Box>

            <Box sx={{ backgroundColor: '#015595', height: '330px' }}>
                <Container>

                    <Grid container spacing={10}>
                        <Grid item xs={12} lg={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>


                                <PhoneOutlined sx={{ color: 'white', mb: '10px', fontSize: '40px' }} />

                                <Typography sx={{ color: 'white' }}> <a href="tel:+442080041191" style={{ textDecoration: 'none', color: 'inherit' }}>+44 208 0041 191</a></Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>


                                <WhatsAppIcon sx={{ color: 'white', mb: '10px', fontSize: '40px' }} />

                                <Typography sx={{ color: 'white' }}> <a href="tel:+442080041191" style={{ textDecoration: 'none', color: 'inherit' }}>+44 208 0041 191</a> </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={12} lg={4}>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <MailOutlineIcon sx={{ color: "white", fontSize: '40px' }} />
                                <Typography sx={{ color: 'white' }}><a href="mailto:admin@flysafariuk.co.uk" style={{ textDecoration: 'none', color: 'inherit' }}>Admin@flysafariuk.co.uk</a></Typography>
                            </Box>

                        </Grid>

                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: '45px' }}>
                        <Typography sx={{ fontWeight: 800, fontSize: '30px', color: 'white', mb: '10px' }}> GET IN TOUCH</Typography>
                        <Typography sx={{ fontWeight: 300, fontSize: '18px', color: 'white' }}>Please use the form below to write us regarding your any query. Our travel consultants will endeavor to reply</Typography>
                        <Typography sx={{ fontWeight: 300, fontSize: '18px', color: 'white' }}>you as soon as possible.</Typography>
                    </Box>
                </Container>

            </Box>
            <Container>

                <Typography sx={{ color: '#015595', fontWeight: 800, fontSize: '30px', textAlign: 'center', mt: '40px', mb: '40px' }}>DROP US A MESSAGE</Typography>
                <Form onFinish={onFinish}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <Form.Item name="name">
                                <Input placeholder="Enter Your Name" />
                            </Form.Item>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Form.Item name="email">
                                <Input placeholder="Enter Your Email" />
                            </Form.Item>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Form.Item name="contactNumber">
                                <Input placeholder="Your UK Contact Number" />
                            </Form.Item>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Form.Item name="captcha">
                                <Input placeholder="4+2=?" />
                            </Form.Item>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Form.Item name="inquiry">
                                <Select
                                    style={{ background: 'white', borderRadius: '3px', width: '100%', border: 'none' }}
                                    placeholder="Inquiry"
                                    showSearch
                                    optionFilterProp="children"
                                >
                                    <Option value="Lahore">Lahore</Option>
                                    <Option value="Faisalabad">Faisalabad</Option>
                                    <Option value="Multan">Multan</Option>
                                </Select>
                            </Form.Item>
                        </Grid>
                    </Grid>
                    <Form.Item name="message">
                        <TextArea style={{ height: '100px' }} placeholder="Your Message" />
                    </Form.Item>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button htmlType="submit" style={{ background: '#ffd71e', color: 'white' }}>
                            Send Your Message
                        </Button>
                    </Box>
                </Form>
            </Container>
            <Box sx={{ mt: '100px' }}>

                <NewsLetter />
            </Box>




        </Box>
    )
}

export default Contact
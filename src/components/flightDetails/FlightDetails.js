import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { Button, DatePicker, Form, Input, Radio, Select, Spin, notification } from 'antd';
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom/dist';

const FlightDetails = () => {
    const location = useLocation();
    const { data } = location.state;
   

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [loading,setLoading]=useState(false)
    const [d,setd]=useState()
 // Initial count of children
    const forms = useRef();
    const navigate=useNavigate()
    

    const [form] = Form.useForm();


    const handleAdultsDecrement = () => {
        setAdults(adults - 1 >= 0 ? adults - 1 : 0);
        // updateSelectedValue();
    };

    const handleAdultsIncrement = () => {
        setAdults(adults + 1);
        // updateSelectedValue();
    };

    const handleChildrenDecrement = () => {
        setChildren(children - 1 >= 0 ? children - 1 : 0);
        // updateSelectedValue();
    };

    const handleChildrenIncrement = () => {
        setChildren(children + 1);
        // updateSelectedValue();
    };

    const handleInfantsDecrement = () => {
        setInfants(infants - 1 >= 0 ? infants - 1 : 0);
        // updateSelectedValue();
    };

    const handleInfantsIncrement = () => {
        setInfants(infants + 1);
        // updateSelectedValue();
    };

    // const updateSelectedValue = () => {
    //     setSelectedValue(`Adults: ${adults}, Children: ${children}, Infants: ${infants}`);
    // };
    const hanldefinish = (value) => {
      const dd=data?.name
      setd(dd)
       
        setLoading(true)
        const payload = { ...value, adults: adults, children: children, infants: infants,DeparturAirPort:d }
        emailjs
      .send('service_k7smv7a', 'template_p96jfhk',payload, {
        publicKey: 'xom6dsMmE61dNrtar',
      })
      .then(
        () => {
         setLoading(false)
         notification.success({
            message: 'Your enquiry has been received',
            description: ' Our travel consultant will get back to you with the best options shortly. Thank You!' ,
          });
          navigate('/')
        },
        (error) => {
         setLoading(false)
         notification.error({
            message: 'Email  Not send to Your Email ',
            description: 'We will trying to Fix it Thanks',
          });
        },
      );
        
    }

   
    const onFinishFailed = (errorInfo) => {
        console.error('Form submission failed:', errorInfo);
    };
    return (
        <Box>
            <Spin size='large' spinning={loading}>

            <Container>
                <Typography sx={{ color: '#720d5d', fontSize: '40px', fontWeight: 700, marginTop: '60px' }}>Flight Booking Enquiry</Typography>
                <Typography sx={{ color: '#000000d1', fontSize: '18px', fontWeight: 400, marginTop: '10px' }}>We need your details to reserve selected flight! For Help Call us at +44 208 0041 191</Typography>

                <Box sx={{ border: '1px solid rgba(112, 112, 112, .15)', mt: '30px', paddingBottom: '30px', mb: "30px" }}>
                    <Box sx={{ background: 'rgba(228, 225, 224, .25)', borderBottom: '1px solid rgba(112, 112, 112, .15)', height: '70px', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
                        <Typography sx={{ color: '#720d5d', fontWeight: 500, }}>Flight Details</Typography>

                    </Box>
                    {
                        data && data.flightDetails.map((data) => {
                            return (
                                <Box>

                                    <Grid container spacing={10} >

                                        <Grid item lg={4}>
                                            <Container >
                                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: "60px", paddingTop: '30px' }}>

                                                    <Typography sx={{ color: '#e30425', marginBottom: '20px', fontWeight: 800, fontSize: '24px' }}>{data.depPort}</Typography>
                                                    {/* <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, fontSize: '14px', }}>
                                                    {data.depPort}
                                                </Typography> */}
                                                    <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, fontSize: '14px', }}>
                                                        {data.depTime}
                                                    </Typography>
                                                </Box>

                                            </Container>


                                        </Grid>
                                        <Grid item lg={4}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: "60px", paddingTop: '30px', alignItems: 'center' }}>

                                                <FlightTakeoffOutlinedIcon sx={{ color: "#e30425" }} />
                                                <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, fontSize: '14px', }}>
                                                    Flight No. 1022 | Equipment 738
                                                </Typography>
                                                <Divider />

                                            </Box>

                                        </Grid>
                                        <Grid item lg={4}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: "60px", paddingTop: '30px' }}>

                                                <Typography sx={{ color: '#e30425', marginBottom: '20px', fontWeight: 800, fontSize: '24px' }}>{data.arrivePort}</Typography>
                                                {/* <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, fontSize: '14px', }}>
                                                {data.arrivePort}
                                            </Typography> */}
                                                <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, fontSize: '14px', }}>
                                                    {data.arriveTime}
                                                </Typography>
                                            </Box>

                                        </Grid>

                                    </Grid>
                                    <Divider sx={{ background: 'rgba(112, 112, 112, .15)', width: '90%', marginLeft: '50px', mt: '20px' }}>

                                    </Divider>
                                </Box>



                            )

                        })
                    }


                </Box>



                {/* form details */}


                <Box sx={{ border: '1px solid rgba(112, 112, 112, .15)', mt: '30px', paddingBottom: '30px', mb: "30px" }}>
                    <Box sx={{ background: 'rgba(228, 225, 224, .25)', borderBottom: '1px solid rgba(112, 112, 112, .15)', height: '70px', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
                        <Typography sx={{ color: '#720d5d', fontWeight: 500, }}>Your Trip to {data.title}</Typography>

                    </Box>

                    <Grid container spacing={10} >

                        <Grid item lg={6}>
                            <Typography sx={{ color: '#720d5d', fontWeight: 700, paddingLeft: '20px', marginTop: '30px', fontSize: '20px', mb: '30px' }}>
                                Customer Details
                            </Typography>
                            <Form style={{ marginLeft: '20px' }} form={form}
                                // name="emailForm"
                                onFinish={hanldefinish}
                                ref={forms}
                                onFinishFailed={onFinishFailed}>
                                <Form.Item name='trip'>
                                    <Radio.Group>
                                        <Radio.Button value="roundTrip">Round Trip</Radio.Button>
                                        <Radio.Button value="oneWay">One Way</Radio.Button>
                                    </Radio.Group>

                                </Form.Item>
                                <Typography sx={{ color: '#720d5d', fontWeight: 500, fontSize: '16px', mb: '10px' }}>
                                    Name
                                </Typography>
                                <Form.Item name='name'>
                                    <Input placeholder='Enter Your Name' style={{ border: '1px solid #720d5d', height: '50px' }}></Input>

                                </Form.Item>
                                <Typography sx={{ color: '#720d5d', fontWeight: 500, fontSize: '16px', mb: '10px' }}>
                                    Email
                                </Typography>
                                <Form.Item name='email'>
                                    <Input placeholder='Enter Your Email' style={{ border: '1px solid #720d5d', height: '50px' }}></Input>

                                </Form.Item>
                                <Typography sx={{ color: '#720d5d', fontWeight: 500, fontSize: '16px', mb: '10px' }}>
                                    Phone Number
                                </Typography>
                                <Form.Item name='number'>
                                    <Input placeholder='Enter Your Phone Number' style={{ border: '1px solid #720d5d', height: '50px' }}></Input>

                                </Form.Item>
                                <Typography sx={{ color: '#720d5d', fontWeight: 500, fontSize: '16px', mb: '10px' }}>Adults</Typography>
                                <Form.Item style={{ width: '100%' }} >
                                    <Select
                                        style={{ width: '100%', height: '50px', border: '1px solid #720d5d', borderRadius: '7px' }}
                                        value={`Adults: ${adults}, Children: ${children},Infants: ${infants}`}
                                        // onChange={value => setSelectedValue(value)} // If you want to handle selection changes
                                        dropdownRender={(menu) => (
                                            <div>
                                                <div style={{ padding: "8px 16px" }}>
                                                    <div style={{ paddingBottom: '20px' }}>
                                                        <span style={{ marginRight: '25px' }}>Adults:</span>
                                                        <Button onClick={handleAdultsDecrement}>-</Button>
                                                        <span style={{ paddingLeft: '10px', paddingRight: '10px' }}>{adults}</span>
                                                        <Button onClick={handleAdultsIncrement}>+</Button>
                                                    </div>
                                                    <div style={{ paddingBottom: '20px' }}>
                                                        <span style={{ marginRight: '13px' }}>Children:</span>
                                                        <Button onClick={handleChildrenDecrement}>-</Button>
                                                        <span style={{ paddingLeft: '10px', paddingRight: '10px' }}>{children}</span>
                                                        <Button onClick={handleChildrenIncrement}>+</Button>
                                                    </div>
                                                    <div style={{ paddingBottom: '20px' }}>
                                                        <span style={{ marginRight: '22px' }}>Infants:</span>
                                                        <Button onClick={handleInfantsDecrement} sx={{ paddingLeft: '25px' }}>-</Button>
                                                        <span style={{ paddingLeft: '10px', paddingRight: '10px' }}>{infants}</span>
                                                        <Button onClick={handleInfantsIncrement} sx={{ paddingLeft: '10px' }}>+</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    >
                                        {/* Add your Select options here */}
                                    </Select>
                                    {/* <Select
                                            style={{ width: '100%', height: '50px', border: '1px solid #720d5d', borderRadius: '7px' }}
                                        value={`Adults: ${adults}, Children: ${children},Infants: ${infants}`}
                                        dropdownRender={(menu) => (
                                            <div>
                                                <div style={{ padding: "8px 16px" }}>
                                                    <div>
                                                        <span style={{ marginRight: '13px' }}>Adults:</span>
                                                        <Button onClick={handleAdultsDecrement}>-</Button>
                                                        <span>{adults}</span>
                                                        <Button onClick={handleAdultsIncrement}>+</Button>
                                                    </div>
                                                    <div>
                                                        <span>Children:</span>
                                                        <Button onClick={handleChildrenDecrement}>-</Button>
                                                        <span>{children}</span>
                                                        <Button onClick={handleChildrenIncrement}>+</Button>
                                                    </div>
                                                    <div >
                                                        <span >Infants:</span>
                                                        <Button onClick={handleInfantsDecrement} sx={{ paddingLeft: '25px' }}>-</Button>
                                                        <span style={{ paddingLeft: '10px' }}>{infants}</span>
                                                        <Button onClick={handleInfantsIncrement} sx={{ paddingLeft: '10px' }}>+</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    /> */}
                                    {/* <Select
                                        style={{ width: '100%', height: '50px', border: '1px solid #720d5d', borderRadius: '7px' }}
                                        value={`Adults: ${adults}, Children: ${children}`}
                                        dropdownRender={menu => (
                                            <Box>
                                                <Box sx={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                                                    <Box sx={{ display: 'flex', gap: '20px' }}>
                                                        <Typography>Adults:</Typography>
                                                        <Button onClick={handleAdultsDecrement}>-</Button>
                                                        <span>{adults}</span>
                                                        <Button onClick={handleAdultsIncrement}>+</Button>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', gap: '20px' }}>
                                                        <Typography>Children:</Typography>
                                                        <Button onClick={handleChildrenDecrement}>-</Button>
                                                        <span>{children}</span>
                                                        <Button onClick={handleChildrenIncrement}>+</Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        )}
                                    /> */}
                                </Form.Item>
                                <Typography sx={{ color: '#720d5d', fontWeight: 500, fontSize: '16px', mb: '10px' }}>
                                    Departure Date
                                </Typography>
                                <Form.Item name='date'>
                                    <DatePicker placeholder='Enter Your Phone Number' style={{ border: '1px solid #720d5d', height: '50px', width: '100%' }}></DatePicker>

                                </Form.Item>
                                <Typography sx={{ color: '#720d5d', fontWeight: 500, fontSize: '16px', mb: '10px' }}>
                                    Arrival Date
                                </Typography>
                                <Form.Item name='arrivaldate'>
                                    <DatePicker placeholder='Enter Your Arrival Date' style={{ border: '1px solid #720d5d', height: '50px', width: '100%' }}></DatePicker>

                                </Form.Item>
                                <Typography sx={{ color: '#720d5d', fontWeight: 500, fontSize: '16px', mb: '10px' }}>
                                    Type Note
                                </Typography>
                                <Form.Item name='note'>
                                    <Input placeholder='Enter Your Special Note' style={{ border: '1px solid #720d5d', height: '50px', width: '100%' }}></Input>

                                </Form.Item>
                                <Typography sx={{ color: '#720d5d', fontWeight: 300, fontSize: '14px', mb: '10px' }}>We obtain your consent for existing customers discounts and contact.</Typography>
                                <Button htmlType='submit' style={{ background: '#5d1049', height: '50px', width: '100%', color: 'white', marginBottom: '20px' }}>Send Enquiry</Button>
                            </Form>

                        </Grid>
                        <Grid item lg={6}>
                            <Box sx={{ background: 'rgba(251, 206, 233, .3)', marginRight: '20px', borderRadius: '3px', mt: "30px", paddingBottom: '60px' }}>
                                <Box sx={{ marginLeft: '20px' }}>
                                    <Typography sx={{ color: '#720d5d', fontWeight: 700, paddingTop: '30px', fontSize: '20px', mb: '30px' }}>
                                        FLIGHT DETAILS & PRICE
                                    </Typography>
                                    <Typography sx={{ color: '#720d5d', fontWeight: 700, marginTop: '30px', fontSize: '14px', mb: '15px' }}>
                                        Departure Airport:
                                    </Typography>
                                    <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, marginTop: '15px', fontSize: '14px', mb: '30px' }}>
                                        {data.name}
                                    </Typography>

                                    <Typography sx={{ color: '#720d5d', fontWeight: 700, marginTop: '30px', fontSize: '14px', mb: '15px' }}>
                                        Selected Airline:
                                    </Typography>
                                    <img src={data.airline} style={{width:'30%',height:'60px'}}>
                                        {/* {data.airline} */}
                                    </img>
                                    <Typography sx={{ color: '#720d5d', fontWeight: 700, marginTop: '30px', fontSize: '14px', mb: '15px' }}>
                                        Fare Type:
                                    </Typography>

                                    <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, marginTop: '15px', fontSize: '14px', mb: '30px' }}>
                                        Return
                                    </Typography>
                                    <Typography sx={{ color: '#720d5d', fontWeight: 700, marginTop: '30px', fontSize: '14px', mb: '15px' }}>
                                        Ticket Class:
                                    </Typography>
                                    <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, marginTop: '15px', fontSize: '14px', mb: '30px' }}>
                                        Economy
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: '20px' }}>

                                        <Typography sx={{ color: '#720d5d', fontWeight: 700, marginTop: '30px', fontSize: '14px', mb: '15px' }}>
                                            Price:
                                        </Typography>
                                        <Box>

                                            <Typography sx={{ color: '#e30425', fontWeight: 700, marginTop: '30px', fontSize: '14px' }}>
                                                {data.price}
                                            </Typography>
                                            <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, fontSize: '14px', mb: '30px' }}>
                                                Rates, Taxes and Fee Incl.
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: '#720d5d', fontWeight: 700, marginTop: '30px', fontSize: '14px', mb: '15px' }}>
                                        Disclaimer:
                                    </Typography>
                                    <Typography sx={{ color: 'rgba(45, 5, 34, .8)', fontWeight: 500, fontSize: '14px', mb: '30px' }}>
                                        This is not a final price & subject to time scale and availability to airline fares that are changing frequently..
                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
            </Spin>

        </Box>
    )
}

export default FlightDetails
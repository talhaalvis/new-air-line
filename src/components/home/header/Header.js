import React, { useState } from 'react';
import { Container, useTheme, Drawer } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { WhatsApp } from '@mui/icons-material';
import logo from '../../../assets/logo.jpeg'
import logo3 from '../../../assets/logo3.png'
import logo4 from '../../../assets/logo4.jpeg'
import { useNavigate } from 'react-router-dom/dist';
import { PhoneOutlined } from '@mui/icons-material'
import cal from '../../../assets/cal.png'
import emailjs from '@emailjs/browser';
import { Form, Input, Modal, notification } from 'antd';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Cheap Flights', path: '/cheapflight' },
  // { label: 'Business class', path: '/bussinesclass' },
  { label: 'why book with us', path: '/whybook' },
  { label: 'booking condition', path: '/bookingcondition' },
  { label: 'contact us', path: '/contact' },
];

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const navigate = useNavigate()
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handlePageSelect = (path) => {
    setActivePage(path);
  };
  const handleImage = () => {
    navigate('/')
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };
  const handleOk = (value) => {
    form
      .validateFields()
      .then((values) => {
        const payload = { ...values }
        emailjs
          .send('service_k7smv7a', 'template_j6anhg8', payload, {
            publicKey: 'xom6dsMmE61dNrtar',
          }).then(
            () => {
              //  setLoading(false)
              notification.success({
                message: 'Your enquiry has been received',
                description: ' Our travel consultant will get back to you with the best options shortly. Thank You!',
              });
              setIsModalVisible(false)
              // navigate('/')
            },
            (error) => {
              //  setLoading(false)
              notification.error({
                message: 'Email  Not send to Your Email ',
                description: 'We will trying to Fix it Thanks',
              });
            },
          );
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });

  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.header.backgroundColor, borderBottom: '2px solid #350c48', minHeight: '49px' }}>
        <Container>

          <Toolbar disableGutters sx={{ minHeight: { md: '50px' }, display: { xs: 'flex', }, justifyContent: { xs: 'space-around', } }}>
            <img src={logo3} style={{ height: '60px', width: '60px', cursor: 'pointer' }} onClick={handleImage} alt='logo'></img>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '10px', height: '60px', marginLeft: '100px' }}>


              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => handlePageSelect(page.path)}
                  sx={{
                    my: 2,
                    color: activePage === page.path && location.pathname === page.path ? 'white' : 'black',
                    backgroundColor: activePage === page.path && location.pathname === page.path ? '#350c48' : '',
                    marginTop: activePage === page.path && location.pathname === page.path ? '0px' : '16px',
                    marginBottom: activePage === page.path && location.pathname === page.path ? '0px' : '16px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    '&:hover': {
                      backgroundColor: activePage === page.path ? '#350c48' : '#016ca9',
                      color: activePage === page.path ? 'white' : 'inherit',
                      marginTop: activePage === page.path && location.pathname === page.path ? '0px' : '0px',
                      marginBottom: activePage === page.path && location.pathname === page.path ? '0px' : '0px',
                      height: activePage === page.path && location.pathname === page.path ? '100%' : '100%',
                    },
                  }}
                >
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <PhoneOutlined
                sx={{ color: '#e30425', fontSize: '40px' }}
              />{" "}
              <a
                href="tel:+441494416425"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: '#e30425'
                }}
              >
                +44 1494 416425
              </a>
              {/* <PhoneOutlined sx={{color:'#e30425',fontSize:'40px'}}></PhoneOutlined>
              <Typography sx={{color:'#e30425',fontWeight:700,fontSize:'20px',cursor:'pointer'}}>
              +44 208 0041 191

              </Typography> */}

            </Box>
            <div style={{ backgroundColor: "white" }}>
            <a
                style={{
                  position: "fixed",
                  width: "60px",
                  height: "60px",
                  bottom: "120px",
                  backgroundColor: "#25d366",
                  color: "#FFF",
                  borderRadius: "50px",
                  textAlign: "center",
                  fontSize: "30px",
                  cursor:'pointer',
                  // boxShadow: "3px 4px 3px #999",
                  right: "20px",
                  zIndex: 100,

                }}
                href="https://wa.me/+447523458826"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp style={{ marginTop: '10px', fontSize: '2.5rem' }}></WhatsApp>
              </a>
              <Box
                style={{
                  position: "fixed",
                  width: "60px",
                  height: "60px",
                  bottom: "40px",
                  background: 'linear-gradient(0deg, rgba(252, 130, 130, 1) 0, rgba(223, 73, 75, 1) 50%, rgba(252, 130, 130, 1) 100%)',
                  color: "#FFF",
                  borderRadius: "50px",
                  textAlign: "center",
                  fontSize: "30px",
                  // boxShadow: "3px 4px 3px #999",
                  right: "20px",
                  zIndex: 100,
                }}
                // href="https://wa.me/+447523458826"
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={showModal}
              >
                {/* <WhatsApp style={{marginTop:'10px', fontSize:'2.5rem'}}></WhatsApp> */}
                <img src={cal} style={{ width: "70%", height: '50px', marginTop: '5px',cursor:'pointer', }}></img>
              </Box>
              <Box
                sx={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:'center',
                  backgroundColor:"#000000",
                  position: "fixed",
                  width: {xs:"70%",md:'60%',lg:'20%'},
                  height: "60px",
                  bottom: "40px",
                  // background: 'linear-gradient(0deg, rgba(252, 130, 130, 1) 0, rgba(223, 73, 75, 1) 50%, rgba(252, 130, 130, 1) 100%)',
                  color: "#FFF",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontSize: "30px",
                  // boxShadow: "3px 4px 3px #999",
                  right: {xs:'24%',md:'10%',lg:'7%'},
                  zIndex: 100,
                }}
                // href="https://wa.me/+447523458826"
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={showModal}
              >
                <Typography sx={{textAlign:'center'}}>Would you like a free callback?</Typography>
                {/* <WhatsApp style={{marginTop:'10px', fontSize:'2.5rem'}}></WhatsApp> */}
                {/* <img src={cal} style={{ width: "70%", height: '50px', marginTop: '5px' }}></img> */}
              </Box>
              
            </div>
            <Modal
              title="Enter Details"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={handleOk}
                initialValues={{
                  name: '',
                  number: '',
                }}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="number"
                  label="Number"
                  rules={[{ required: true, message: 'Please enter your number' }]}
                >
                  <Input />
                </Form.Item>
                
                <Button onClick={handleOk} sx={{
                  color: "white",
                  background: "#891652",
                  fontSize: "16px",
                  width: "160px",
                  fontWeight: 700,
                  width:'100%',
                  "&:hover": {
                    backgroundColor: "#dc3545", // Change button background color on hover
                  },
                }}> Enquire Now</Button>
              </Form>
            </Modal>
            {/* <a href="https://wa.me/+442080041191">
              <WhatsApp></WhatsApp>
            </a> */}


            {/* Button to toggle drawer, only visible on mobile devices */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Button onClick={toggleDrawer}>
                <MenuIcon />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer containing all routes */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: '200px' }}>
          <Typography variant="h6" sx={{ margin: '20px 0', textAlign: 'center' }}>Routes</Typography>
          <Box>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => {
                  handlePageSelect(page.path);
                  toggleDrawer();
                }}
                sx={{ width: '100%', textTransform: 'capitalize' }}
              >
                <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.label}
                </Link>
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

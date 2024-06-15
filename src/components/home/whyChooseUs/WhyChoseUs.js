import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import arrow from "../../../assets/arrowpl.jpg"
import Button from "@mui/material/Button";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import img10 from "../../../assets/img10.png";

const MyCard = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation values when card enters the viewport
      transition={{ duration: 1 }} // Animation duration
    >
      {children}
    </motion.div>
  );

export default function WhyChoseUs() {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate=useNavigate()

    return (
        <Box
            sx={{
                position: "relative",
                // backgroundImage: `url(${img10})`,
                // backgroundSize: 'cover',
                marginTop: "-16px",
                // height: "100%"
            }}
        >
            <Box
                sx={{
                    // position: 'relative',
                    backgroundImage: `url(${img10})`,
                    backgroundSize: "cover",
                    // marginTop: '-16px',
                    // height: "100%"
                }}
            >
                <Box
                    sx={{
                        background: "rgba(52, 10, 82, .85)",
                        marginTop: "-16px",
                        // zIndex: 1,
                        py: 4, // Example padding
                        px: 3,
                        overflow: "auto",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingBottom: '50px'
                        }}
                    >
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: 800,
                                fontSize: "35px",
                                mb: "10px",
                            }}
                        >
                            WHY CHOOSE US?{" "}
                        </Typography>
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: 400,
                                fontSize: "18px",
                                mb: "30px",
                            }}
                        >
                            REASONS TO TRUST US{" "}
                        </Typography>
                        <Typography
                            sx={{ color: "white", fontWeight: 300, fontSize: "18px" }}
                        >
                            Our aim is to provide you with best services at unbeatable prices, this is why a wide range of passengers love to travel with us,
                        </Typography>
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: 300,
                                fontSize: "18px",
                                mb: "30px",
                            }}
                        >
                            So just sit back, relax and let us make your travel arrangements because of these matchless reasons
                        </Typography>
                    </Box>
                    <Container >
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6} md={3}>
                                <MyCard>

                                <Box sx={{ position: 'relative' }}>

                                    <Card sx={{ zIndex: 0 }}>
                                        <Box sx={{ width: '21%', height: '65px', borderRadius: '100%', background: '#ffd71e', position: 'absolute', top: '-9%', zIndex: 2, left: '39%' }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', height: '65px' }}>
                                                <CurrencyPoundIcon />
                                            </Box>


                                        </Box>
                                        <CardContent>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, fontSize: '18px', mt: "30px", textAlign: 'center' }}>
                                                Best Price Guarantee
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "20px", textAlign: 'center' }}>
                                                We offer the best lowest price
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                with full guarantee of marking
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                no other comparison.
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                Try Us.
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: '30px', paddingBottom: '40px' }}>
                                                <Button sx={{
                                                    background: "#ffd71e", color: '#ffffff', '&:hover': {
                                                        background: "#350c48", // Change background color on hover
                                                    }
                                                }}
                                                onClick={()=>navigate('/whybook')}
                                                >Know More</Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                                </MyCard>


                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <MyCard>

                                <Box sx={{ position: 'relative' }}>

                                    <Card sx={{ zIndex: 0 }}>
                                        <Box sx={{ width: '21%', height: '65px', borderRadius: '100%', background: '#ffd71e', position: 'absolute', top: '-9%', zIndex: 2, left: '39%' }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', height: '65px' }}>
                                                <FlightTakeoffOutlinedIcon />
                                                {/* <img src={arrow} style={{width:'30%',height:'30px'}}></img> */}
                                            </Box>


                                        </Box>
                                        <CardContent>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, fontSize: '18px', mt: "30px", textAlign: 'center' }}>
                                                Book Now & Pay Later
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "20px", textAlign: 'center' }}>
                                                Pay £ 50 as an initial payment
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                and remaining balance later.
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                Call us to further discuss the
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                plan.
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: '30px', paddingBottom: '40px' }}>
                                                <Button sx={{
                                                    background: "#ffd71e", color: '#ffffff', '&:hover': {
                                                        background: "#350c48", // Change background color on hover
                                                    }
                                                }} onClick={()=>navigate('/whybook')}>Know More</Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                                </MyCard>

                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <MyCard>

                                <Box sx={{ position: 'relative' }}>

                                    <Card sx={{ zIndex: 0 }}>
                                        <Box sx={{ width: '21%', height: '65px', borderRadius: '100%', background: '#ffd71e', position: 'absolute', top: '-9%', zIndex: 2, left: '39%' }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', height: '65px' }}>
                                                <ThumbUpAltIcon />
                                                {/* <img src={arrow} style={{width:'30%',height:'30px'}}></img> */}
                                            </Box>


                                        </Box>
                                        <CardContent>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, fontSize: '18px', mt: "30px", textAlign: 'center' }}>
                                                Excellent Services
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "20px", textAlign: 'center' }}>
                                                We are privileged enough to
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                maintain a big clientele –
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                having thousands of satisfied
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                clients.
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: '30px', paddingBottom: '40px' }}>
                                                <Button sx={{ background: "#ffd71e", color: '#ffffff','&:hover': {
                                                        background: "#350c48", // Change background color on hover
                                                    } }}  onClick={()=>navigate('/whybook')}>Know More</Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                                </MyCard>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <MyCard>

                                <Box sx={{ position: 'relative' }}>

                                    <Card sx={{ zIndex: 0 }}>
                                        <Box sx={{ width: '21%', height: '65px', borderRadius: '100%', background: '#ffd71e', position: 'absolute', top: '-9%', zIndex: 2, left: '39%' }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', height: '65px' }}>
                                                <LockIcon />
                                                {/* <img src={arrow} style={{width:'30%',height:'30px'}}></img> */}
                                            </Box>


                                        </Box>
                                        <CardContent>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, fontSize: '18px', mt: "30px", textAlign: 'center' }}>
                                                Financial Protection
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "20px", textAlign: 'center' }}>
                                                Off course, Book with full
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                confidence; we provide the
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                most valued Financial
                                            </Typography>
                                            <Typography variant="h5" component="h2" sx={{ fontWeight: 400, fontSize: '18px', mt: "5px", textAlign: 'center' }}>
                                                Protection.
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: '30px', paddingBottom: '40px' }}>
                                                <Button sx={{ background: "#ffd71e", color: '#ffffff','&:hover': {
                                                        background: "#350c48", // Change background color on hover
                                                    } }}  onClick={()=>navigate('/whybook')}>Know More</Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                                </MyCard>
                            </Grid>
                        </Grid>

                    </Container>
                </Box>
            </Box>


        </Box>
    );
}



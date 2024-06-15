import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container,} from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import visa from '../../assets/visa.jpeg'
import master from '../../assets/master.jpeg'
import mastro from '../../assets/mastro.jpeg'
import delta from '../../assets/delta.jpeg'
import validate from '../../assets/validate.jpeg'
import barcel2 from '../../assets/barcel2.jpeg'
import logo from '../../assets/revie.jpeg'
const Footer = () => {
  return (
    <footer style={{ background: "#ffd71e" }}>
      <Container>
        <Grid container spacing={2} sx={{}}>
          {/* First section */}
          {/* <Grid item xs={12} sm={6} md={3}>
          <div>

          </div>
        </Grid> */}
          {/* Second section */}

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{display:"flex",gap:"20px"}}>
             <img src={visa} style={{width:'30%',height:'40px'}} alt='visa '></img>
             <img src={master} style={{width:'30%',height:'40px'}} alt='maseter'></img>
             <img src={mastro} style={{width:'30%',height:'40px'}} alt='mastro'></img>
             <img src={delta} style={{width:'30%',height:'40px'}} alt='delta'></img>
            </Box>
          </Grid>
          {/* Third section */}
          <Grid item xs={12} sm={6} md={3} sx={{marginLeft:'140px'}}>
          <Box sx={{display:"flex",gap:"10px"}}>
             <img src={barcel2} style={{width:'30%',height:'40px'}} alt='barcel'></img>
             <img src={validate} style={{width:'30%',height:'40px'}} alt='validate'></img>
             <a
                href="https://www.trustpilot.com/review/flysafariuk.co.uk"
                target="_blank"
                style={{

                    textDecoration: "none",
                    color: "inherit",
                    // fontWeight: 700,
                    // fontSize: "20px",
                    // color: '#e30425'
                }}
            >
                <img src={logo} style={{width:'100%',height:'40px'}}></img>

            </a>
            
            </Box>
          </Grid>
          {/* Fourth section */}
          <Grid item xs={12} sm={6} md={3}>
            <div >
              <span>
                <a href="https://www.facebook.com/flysafariuk/">

                  <FacebookRoundedIcon sx={{ fontSize: '50px', color: "#0165a3" }} />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/flysafariuk/">

                <InstagramIcon sx={{ fontSize: '50px', color: "#0165a3",marginLeft:'15px' }} />
                </a>
              </span>
             

            </div>
          </Grid>


        </Grid>

      </Container>
    </footer>
  );
};

export default Footer;

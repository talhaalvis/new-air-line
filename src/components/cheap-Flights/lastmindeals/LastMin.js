import { Box, Grid, Typography, useTheme } from '@mui/material'
import img1 from '../../../assets/img1.png'
import img3 from '../../../assets/img3.png'
import img6 from '../../../assets/img6.png'
import img7 from '../../../assets/img7.png'
import React from 'react'
import CardM from './Card';

const LastMin = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: '30px' }}>
      <Box sx={{ display: theme.flexCenter, justifyContent: theme.flexCenter, alignItems: theme.flexCenter, flexDirection: 'column' }}>
        <Typography sx={{ color: theme.headingStyle, fontWeight: theme.headingStyle, fontSize: theme.headingStyle }}>
          LAST MINUTE DEALS
        </Typography>
        <Typography sx={{ color: theme.headingtext, fontWeight: theme.headingtext, fontSize: theme.headingtext }}>
          SAVE MORE
        </Typography>

      </Box>
      <Box sx={{ mt: '40px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardM img={img1}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardM img={img3}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardM img={img6}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardM img={img7}/>
          </Grid>
        </Grid>

      </Box>

    </Box>
  )
}

export default LastMin
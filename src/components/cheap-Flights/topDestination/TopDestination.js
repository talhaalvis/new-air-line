import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img6 from '../../../assets/img6.png'
import img8 from '../../../assets/img8.png'
import img10 from '../../../assets/img10.png'
import img11 from '../../../assets/img11.png'
import img13 from '../../../assets/img13.png'
import img14 from '../../../assets/img14.png'
// import img1 from '../../../assets/img1.png'
// import img1 from '../../../assets/img1.png'
// import img1 from '../../../assets/img1.png'
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TopDestination() {
  const theme = useTheme();

  const navigate = useNavigate()
  const handleNavigate=(item)=>{
    navigate(`/details/${item.title}`)
  }
  return (
    <ImageList sx={{ width: '100%', height: "auto", animation: 'fade-in 0.5s ease-in', overflowX: 'hidden', overflowY: 'hidden' }}>
      <ImageListItem key="Subheader" cols={2}>
        {/* <ListSubheader component="div">December</ListSubheader> */}
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ position: 'relative' }}>

          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            sx={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div className="overlay">
            <div className="overlay-content">
              <Typography variant="h6" component="h2" sx={{ color: 'white', mb: '10px' }}>
                {item.title}
              </Typography>
              <Typography variant="h6" component="h2" sx={{ color: 'white', mb: '10px' }}>
                {item.subtitle}
              </Typography>
              <Typography variant="body2" component="p" sx={{ color: 'white', mb: '10px' }}>
                {item.description}
              </Typography>
              <Button variant="contained" sx={{ mt: 1 }} onClick={()=>handleNavigate(item)}>Book Now</Button>
            </div>
          </div>
          <ImageListItemBar

            //   title={item.title}
            subtitle={
              <Box sx={{ display: 'flex', gap: '4px' }}>
                <Typography>{item.title}</Typography>
                {/* <Typography>item2</Typography> */}
              </Box>
            }

            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
                <Typography>{item.person}</Typography>
              </IconButton>
            }
            sx={{ background: 'rgba(0, 0, 0, 0.5)', transition: 'background 0.3s' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Freetown',
    subtitle: 'Sierra Leone',
    description: 'One of the beautiful cities of Asia; we\'re ',
    description2: 'offering the lowest rates on Bangkok flights.',
    rows: 3,
    cols: 2,
    featured: true,
    person: '562/PerPerson'
  },
  {
    img: img2,
    title: 'Lagos',
    subtitle: 'Nigeria',
    author: '@rollelflex_graphy726',
    rows: 3,
    person: '342/PerPerson'
  },
  {
    img: img6,
    title: 'Accra',
    subtitle: 'Ghana',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
    featured: true,
    person: '222/PerPerson'
  },
  {
    img: img8,
    title: 'Luanda',
    subtitle: 'Angola',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
    featured: true,
    person: '342/PerPerson'
  },
  {
    img: img10,
    title: 'Banjul',
    subtitle: ' Gambia',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
    featured: true,
    person: '412/PerPerson'
  },
  {
    img: img11,
    title: 'Guinea',
    subtitle: ' Bissau',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
    featured: true,
    person: '122/PerPerson'
  },
  {
    img: img13,
    title: 'Mali',
    subtitle: '',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
    featured: true,
    person: '232/PerPerson'
  },
  {
    img: img14,
    title: 'Dakar',
    subtitle: ' Senegal',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
    featured: true,
    person: '892/PerPerson'
  },
  //   {
  //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //     title: 'Mushrooms',
  //     author: '@silverdalex',
  //     rows: 2,
  //     cols: 2,
  //     person:'34/PerPerson'
  //   },

];
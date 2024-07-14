
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
// import img1 from '../../../assets/WhatsApp Image 2024-06-15 at 12.11.07 PM.jpeg'
import img2 from '../../../assets/kenya-airways.png'
import img3 from '../../../assets/WhatsApp Image 2024-05-24 at 11.29.45 AM.jpeg'
import img4 from '../../../assets/WhatsApp Image 2024-05-24 at 11.29.46 AM (1).jpeg'
import img5 from '../../../assets/WhatsApp Image 2024-05-24 at 11.29.46 AM.jpeg'
import img6 from '../../../assets/i6.png'
import img7 from '../../../assets/tap.png'
import img8 from '../../../assets/turkish-airlines.png'
import img9 from '../../../assets/virign atlantic.jpg'
import img11 from '../../../assets/iberia.png'
import img12 from '../../../assets/e-airline.png'
import img13 from '../../../assets/royal-air-maroc.png'
import img14 from '../../../assets/brussels.jpg'
import img15 from '../../../assets/Lufthansa-Logo-700x394.png'
import img10 from '../../../assets/WhatsApp Image 2024-05-24 at 11.29.48 AM.jpeg'
import Carousel from 'react-material-ui-carousel';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { useNavigate } from 'react-router-dom';

 // Total number of items

const items = [
  // {
  //   // name: "Freetown",
  //   img: img1,
  //   // description: "From LHR",
  //   // start: "Starting From",
  //   // price: '499',
  //   // person: '1',
  //   // return: 'Return Incl. Taxes'
  // },
  {
    name: "Lagos",
    img: img2,
    description: "From LHR",
    start: "Starting From",
    price: '479',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    name: "Johannesburg",
    img: img3,
    description: "From LHR",
    start: "Starting From",
    price: '585',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    name: "Conakry",
    img: img4,
    description: "From LHR",
    start: "Starting From",
    price: '499',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    name: "Entebbe",
    img: img5,
    description: "From LHR",
    start: "Starting From",
    price: '512',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    name: "Lusaka",
    img: img6,
    description: "From LHR",
    start: "Starting From",
    price: '565',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    name: "Banjul",
    img: img10,
    description: "From LHR",
    start: "Starting From",
    price: '499',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    // name: "Accra",
    img: img7,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    // name: "Accra",
    img: img8,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    // name: "Accra",
    img: img9,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    // name: "Accra",
    img: img11,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    // name: "Accra",
    img: img12,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    // name: "Accra",
    img: img13,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    // name: "Accra",
    img: img14,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },
  {
    // name: "Accra",
    img: img15,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },

];

const NewSlider = () => {

  // Calculate the starting index of items for the current page
const navigate=useNavigate()
 

  function chunkArray(array, chunkSize) {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
      array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }

  const chunkedItems = chunkArray(items, 4);
  const handleNavigate=(item)=>{
    navigate(`/details/${item.name}`)
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: '40px' }}>
        <Typography variant='h5' sx={{ color: '#ffd701', textTransform: 'uppercase', fontWeight: 800, fontSize: '25px' ,paddingBottom:'20px'}}>
         Popular AirLine
        </Typography>
        {/* <Typography variant='p' sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: '20px', mb: '60px' }}>
          Save More
        </Typography> */}
      </Box>
      <Carousel animation='slide' autoPlay={true} duration={500} >
        {chunkedItems.map((chunk, i) => (
          <Grid container spacing={2} key={i}>
            {chunk.map((item, j) => (
              <Grid item xs={12} sm={6} md={3} key={j}>
                <img src={item.img} style={{width:"90%",height:'150px',}}></img>

              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
};

export default NewSlider;

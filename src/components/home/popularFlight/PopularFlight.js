
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img3 from '../../../assets/img3.png'
import img4 from '../../../assets/img4.png'
import img5 from '../../../assets/img5.png'
import img6 from '../../../assets/img6.png'
import img7 from '../../../assets/img7.png'
import img10 from '../../../assets/img10.png'
import Carousel from 'react-material-ui-carousel';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { useNavigate } from 'react-router-dom';

 // Total number of items

const items = [
  {
    name: "Freetown",
    img: img1,
    description: "From LHR",
    start: "Starting From",
    price: '499',
    person: '1',
    return: 'Return Incl. Taxes'
  },
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
    img: img7,
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
    name: "Accra",
    img: img6,
    description: "From LHR",
    start: "Starting From",
    price: '572',
    person: '1',
    return: 'Return Incl. Taxes'
  },

];

const GridWithCards = () => {

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
          Hot Deals
        </Typography>
        {/* <Typography variant='p' sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: '20px', mb: '60px' }}>
          Save More
        </Typography> */}
      </Box>
      <Carousel animation='slide' autoPlay={true} duration={600}>
        {chunkedItems.map((chunk, i) => (
          <Grid container spacing={2} key={i}>
            {chunk.map((item, j) => (
              <Grid item xs={12} sm={6} md={3} key={j}>
                <Card >
                  <CardContent sx={{ padding: "0px" }}>
                    <CardMedia
                      sx={{ height: 190, padding: '0px' }}
                      image={item.img}
                      title="green iguana"
                    />
                    <Container>
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "10px" }}>
                        <Typography sx={{ mt: '20px', fontWeight: 600, fontSize: '18px' }}>
                         {`${item.name} Flight Deal`}
                        </Typography>
                        <Typography variant="body2" color="#ffd71e" component="p">
                          {item.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {item.start}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                          <CurrencyPoundIcon sx={{ fontSize: '23px',fontWeight:700 }} />
                          <Typography variant='h5' sx={{ fontWeight: 500, marginLeft:'-8px' }} >{item.price}</Typography>
                          {/* <Typography variant='body2' >{item.person}</Typography> */}
                        </Box>

                        <Typography variant='body2' >{item.return}</Typography>

                      </Box>

                    </Container>
                  </CardContent>
                  <CardActions>
                    <Button sx={{
                      width: '100%', height: '50px', background: "#ffd71e", color: 'black', '&:hover': {
                        background: '#350c48',
                        color: '#ffffff',
                      }
                    }}
                    onClick={()=>handleNavigate(item)}
                    >
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
};

export default GridWithCards;

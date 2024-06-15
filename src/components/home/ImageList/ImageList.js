import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PopularFlight from "./../popularFlight/PopularFlight";
import PopularAirline from "./../popularFlight/popularAirline";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import img9 from "../../../assets/img9.png";
import img10 from "../../../assets/img10.png";
import img11 from "../../../assets/img11.png";
import img12 from "../../../assets/img12.png";
import img13 from "../../../assets/img13.png";
import img14 from "../../../assets/img14.png";
import img15 from "../../../assets/img15.png";
import img16 from "../../../assets/img16.png";
import img17 from "../../../assets/img17.png";
import img18 from "../../../assets/img18.png";
import img19 from "../../../assets/img19.png";
import img20 from "../../../assets/img20.png";
import NewsLetter from "../../newsLetter/NewsLetter";
import NewSlider from "../newSlider/NewSlider";
import WhyChoseUs from "../whyChooseUs/WhyChoseUs";

export default function TitlebarImageList() {
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    console.log("mouse leave call");
    setHoveredItem(null);
  };
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

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
            zIndex: 1,
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
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: "35px",
                mb: "30px",
              }}
            >
              OUR TOP DESTINATION{" "}
            </Typography>
            <Typography
              sx={{ color: "white", fontWeight: 300, fontSize: "18px" }}
            >
              At Fly Safari, we aim to facilitate our customers with
              incomparable rates and flexible payment plans. You may want to
              explore further, and can 'contact us' any time{" "}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: 300,
                fontSize: "18px",
                mb: "30px",
              }}
            >
              to learn more on the fares to your preferred top destination.{" "}
            </Typography>
          </Box>
          <Container>
            <ImageList
              sx={{
                width: "100%",
                height: "auto",
                animation: "fade-in 0.5s ease-in",
                overflowX: "hidden",
                overflowY: "hidden",
              }}
              cols={matchDownMd ? 1 : 3}
            >
              {/* <ImageListItem key="Subheader" cols={2}>
                        <ListSubheader component="div">December</ListSubheader>
                    </ImageListItem> */}
              {itemData.slice(0, 6).map((item, index) => (
                <ImageListItem
                  key={item.img}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    animation: "slide-up 0.5s ease-in",
                    // overflow:'hidden'
                    // Example animation
                  }}
                >
                  <Link
                    to={{
                      pathname: `/details/${item.title}`,
                      state: { itemData: item.title }, // Pass item data as state
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "100%" }}
                    />
                    <Box>
                      {(hoveredItem === index || item.bookButtonVisible) && (
                        <ImageListItemBar
                          // sx={{ height: '100%', animation: 'slide-up 0.5s ease-in', background: "#ffd701", color: 'white' }}
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(255, 255, 51, 0.5)", // Semi-transparent black overlay
                            zIndex: 2,
                          }}
                          //    title={item.title}
                          subtitle={
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "100%",
                                alignItems: "center",
                                animation: "slide-up 0.5s ease-in",
                              }}
                            >
                              <span
                                style={{
                                  marginBottom: "10px",
                                  color: "white",
                                  fontSize: "18px",
                                }}
                              >
                                {item?.title}
                              </span>
                              <Typography
                                variant="h5"
                                style={{ marginBottom: "10px", color: "white" }}
                              >
                                {item?.subtitle}
                              </Typography>

                              <span
                                style={{
                                  fontSize: "18px",
                                  marginBottom: "10px",
                                }}
                              >
                                {item?.description}
                              </span>
                              <span style={{ fontSize: "18px" }}>
                                {item?.description2}
                              </span>
                              <Button
                                onClick={() => {
                                  // const updatedData = [...itemData];
                                  // updatedData[index].bookButtonVisible = true;
                                  setHoveredItem(null); // Hide the button after clicking
                                  // You can navigate here
                                }}
                                sx={{
                                  //   position: 'absolute',
                                  //   bottom: 0,
                                  //   right: 0,
                                  m: 1,
                                  bgcolor: "#015a99",
                                  color: "white",
                                  "&:hover": {
                                    bgcolor: "#015a99",
                                  },
                                }}
                              >
                                Book Now
                              </Button>
                            </Box>
                          }
                          actionIcon={
                            <IconButton
                              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                              aria-label={`info about ${item.title}`}
                            >
                              {/* <Button
                onClick={() => {
                  const updatedData = [...itemData];
                  updatedData[index].bookButtonVisible = true;
                //   setHoveredItem(null); // Hide the button after clicking
                  // You can navigate here
                }}
                sx={{
                //   position: 'absolute',
                //   bottom: 0,
                //   right: 0,
                  m: 1,
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Book Now
              </Button>  */}

                              {/* <InfoIcon /> */}
                            </IconButton>
                          }
                        />
                      )}
                      {/* {hoveredItem === index && !item.bookButtonVisible && (
              <Button
                onClick={() => {
                  const updatedData = [...itemData];
                  updatedData[index].bookButtonVisible = true;
                //   setHoveredItem(null); // Hide the button after clicking
                  // You can navigate here
                }}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  m: 1,
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
              Book Now
              </Button> 
            )}  */}
                    </Box>
                  </Link>
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Box>
      </Box>
      <PopularFlight />
      <NewSlider/>
      <WhyChoseUs/>
      {/* <PopularAirline /> */}
      <Box sx={{ mt: "100px" }}>
        <NewsLetter />
      </Box>
      {/* <Container>

                <Footer />
            </Container> */}
    </Box>
  );
}

const itemData = [
  {
    img: img1,
    title: "Freetown",
    subtitle: "Sierra Leone",
    description: "One of the beautiful cities of Asia; we're ",
    description2: "offering the lowest rates on Bangkok flights.",
    rows: 3,
    cols: 2,
    featured: true,
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //   title: 'Breakfast',
  //   author: '@bkristastucchio',
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  {
    img: img2,
    title: "Lagos",
    subtitle: "Nigeria",
    author: "@rollelflex_graphy726",
    rows: 3,
  },
  {
    img: img3,
    title: "Johannesburg",
    subtitle: " South Africa",
    author: "@helloimnik",
  },
  {
    img: img4,
    title: "Conakry",
    subtitle: "Guinea",
    author: "@nolanissac",
    rows: 3,
    cols: 2,
  },
  {
    img: img5,
    title: "Entebbe",
    subtitle: "Uganda",
    author: "@hjrc33",
    rows: 3,
    cols: 2,
  },
  {
    img: img6,
    title: "Accra",
    subtitle: "Ghana",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img7,
    title: "Lusaka",
    subtitle: "Zambia",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img8,
    title: "Luanda",
    subtitle: "Angola",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img9,
    title: "Luanda",
    subtitle: "Angola",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img10,
    title: "Banjul",
    subtitle: " Gambia",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img11,
    title: "Guinea",
    subtitle: " Bissau",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img12,
    title: "Abidjan ",
    subtitle: "Ivory Coast",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img13,
    title: "Mali",
    subtitle: "",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img14,
    title: "Dakar",
    subtitle: " Senegal",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img19,
    title: "Liberia",
    subtitle: "",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img15,
    title: "Lome Togo",
    subtitle: "",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img16,
    title: "Cape-Town",
    subtitle: "South Africa",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img17,
    title: "Kingston ",
    subtitle: "Jamaica",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img18,
    title: "Douala",
    subtitle: "Cameroon",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img20,
    title: "Abuja ",
    subtitle: "Nigeria",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  // {
  //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //     title: 'Basketball',
  //     author: '@tjdragotta',
  // },
  // {
  //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //     title: 'Fern',
  //     author: '@katie_wasserman',
  // },
];

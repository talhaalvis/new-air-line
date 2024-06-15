
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import CheapFlight from './components/cheap-Flights/CheapFlight';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from './components/home/header/Header';
import Itemdetails from './components/home/ImageList/Itemdetails';
// import whyBook from './components/whyBook/whyBook';
import Footer from './components/footer/Footer';
import Booking from './components/whyBook/whyBook';
import Contact from './components/contact/Contact';
import BookingCondition from './components/bookingCondition/BookingCondition';
import FlightDetails from './components/flightDetails/FlightDetails';
import { Spin } from 'antd';
import UperHeader from './components/UperHeader/UperHeader';

const LazyCheapFlight = React.lazy(() => import('./components/cheap-Flights/CheapFlight'));
const LazyItemdetails = React.lazy(() => import('./components/home/ImageList/Itemdetails'));
const LazyBooking = React.lazy(() => import('./components/whyBook/whyBook'));
const LazyContact = React.lazy(() => import('./components/contact/Contact'));
const LazyBookingCondition = React.lazy(() => import('./components/bookingCondition/BookingCondition'));
const LazyFlightDetails = React.lazy(() => import('./components/flightDetails/FlightDetails'));
function App() {

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    header:{
      backgroundColor:'#ffd701'
    }
    ,tabColor:{
      inactive:'rgba(255, 255, 255, .5)',
      fontSize:'18px',
      fontWeight:600
    }
  },
  headingStyle:{
    color:"#ffd71e",fontWeight:800,fontSize:'35px'
  },
  headingtext:{
    color:"#07253f",fontWeight:700,fontSize:'18px'
  },
  flexCenter:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'20px'

  },
  colorY:{
    backgroundColor:'#ffd701'
  }
  
});
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UperHeader/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cheapflight" element={<Suspense fallback={<Spinner />}>
            <LazyCheapFlight />
          </Suspense>} />
          <Route path="/details/:title" element={<Suspense fallback={<Spinner />}>
            <LazyItemdetails />
          </Suspense>} />
          <Route path="/whybook" element={<Suspense fallback={<Spinner />}>
            <LazyBooking />
          </Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<Spinner />}>
            <LazyContact />
          </Suspense>} />
          <Route path="/bookingcondition" element={<Suspense fallback={<Spinner />}>
            <LazyBookingCondition />
          </Suspense>} />
          <Route path="/flight-details" element={<Suspense fallback={<Spinner />}>
            <LazyFlightDetails />
          </Suspense>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const Spinner = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Adjust the height as needed
    }}
  >
    <Spin size="large" />
  </div>
);

export default App;

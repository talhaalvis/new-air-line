import React from 'react'
import img from '../../assets/flight.jpg'
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import NewsLetter from '../newsLetter/NewsLetter'

const Booking = () => {
    const theme = useTheme()
    const data = [
        {
            heading: 'Book Now Pay Later',
            text: ' Secure your seat by just paying 50 GBP as an initial payment to avoid the increase in price and remaining balance in 3 days.'
        },
        {
            heading: 'Thousand of Satisfied Customers',
            text: ' We are honored to have a Proven and Established Track Record. Serving since many years and not only have thousand of clients but retaining and growing. Proudly speaking we have 20 % level of repeat customers. For details see our Testimonial Page.'
        },
        {
            heading: 'Secure Transactions & Complete Privacy',
            text: 'Your Credit/Debit card information is always safe when you book with us. We Also understand and respect the importance of your privacy. Your personal information is private and confidential and not released to third parties. View our Privacy Policy.'
        },
        {
            heading: 'Dedicated Customer Support',
            text: 'Your Credit/Debit card information is always safe when you book with us. We Also understand and respect the importance of your privacy. Your personal information is private and confidential and not released to third parties. View our Privacy Policy.'
        },
        {
            heading: 'Other Silent Features',
            text: 'Your Credit/Debit card information is always safe when you book with us. We Also understand and respect the importance of your privacy. Your personal information is private and confidential and not released to third parties. View our Privacy Policy.'
        },


    ]
    return (
        <>
            <Container>
                <Grid container spacing={2} sx={{ mt: '35px' }}>
                    {/* Content Column */}
                    <Grid item xs={12} lg={6}>
                        <Typography sx={{ color: theme.headingStyle.color, fontWeight: theme.headingStyle.fontWeight, fontSize: theme.headingStyle.fontSize }}>

                            Why Should I book through Fly Safari UK?
                        </Typography>
                        <Typography sx={{ mt: '10px' }}>
                        By booking with Fly Safari UK, you benefit from our tailored travel services. Our experienced consultants understand your needs
                         and curate travel itineraries that suit you best. We provide recommendations for airlines with flexible conditions and monitor
                          your itinerary 
                        for any changes. Additionally, we prioritize reliable airlines with excellent on-time records and passenger satisfaction.
                        </Typography>
                        <Typography sx={{ mt: '10px', color: theme.headingtext, fontWeight: theme.headingtext, fontSize: theme.headingtext }}>
                        How Can I book most efficiently?
                        </Typography>
                        <Typography sx={{ mt: '10px' }}>
                        To book efficiently with Fly Safari UK, simply call our travel experts
                         at  
                         <a href="tel:+447523458826">+44 752 3458 826</a>, request a callback via our website, or utilize our online chat feature for assistance.
                        </Typography>
                        <Typography sx={{ mt: '10px', color: theme.headingtext, fontWeight: theme.headingtext, fontSize: theme.headingtext }}>
                        How are these tickets different than buying a ticket from the airline directly?
                        </Typography>
                        <Typography sx={{ mt: '10px' }}>
                        Tickets booked through Fly Safari UK offer similar benefits to those purchased directly from airlines. However, we provide additional
                         services such as requesting special meals, advanced seat assignments, and assistance with frequent flyer mileage accrual.
                        </Typography>
                    </Grid>

                    {/* Image Column */}
                    <Grid item xs={12} lg={6}>
                        <img

                            src={img}
                            alt="Placeholder"
                            style={{ maxWidth: "100%", height: "auto", border: '10px solid #ffd701 ', borderRadius: '10px' }}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ mt: '40px' }}>

                    {
                        data.map((data) => {
                            return (

                                <Box>
                                    <Typography sx={{ mt: '10px', color: theme.headingtext, fontWeight: theme.headingtext, fontSize: theme.headingtext }}>
                                        {data.heading}
                                    </Typography>
                                    <Typography sx={{ mt: '10px' }}>
                                        {data.text}
                                    </Typography>
                                </Box>
                            )


                        })
                    }
                </Box>
            </Container>
            <Box sx={{ mt: '100px' }}>

                <NewsLetter />
            </Box>
        </>
    )
}

export default Booking
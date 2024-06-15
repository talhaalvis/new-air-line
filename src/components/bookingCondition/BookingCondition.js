import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import NewsLetter from '../newsLetter/NewsLetter';

const BookingCondition = () => {
  // Define your terms and conditions data as an array of objects
  const termsAndConditions = [
    {
      heading: 'DEPOSITS & TICKETS ARE NEITHER REFUNDABLE NOR CHANGEABLE (Terms & Conditions May Apply).',
      text: `Unless Specified, All the deposits paid and tickets purchased/issued are non-refundable. In case of cancellation or no show (Failure to arrive at departure airport on time) and non-changeable before or after departure (date change is not permitted). Once flights reserved, bookings/tickets are non-transferable to any other person means that name changes are not permitted. Issued Tickets are also not re-routable.

      If you are reserving the flight by making the advance partial payment (Initial deposit) then please note that fare/taxes may increase at any time without the prior notice. It means the price is not guaranteed unless the ticket is issued because the airline/consolidator has the right to increase the price due to any reason. In that case, we will not be liable and the passenger has to pay the fare/tax difference. We always recommend you to pay ASAP and get issue your ticket to avoid this situation. Furthermore, if you will cancel your reservation due to any reason, then the paid deposit(s) will be non-refundable.`
    },
    {
      heading: 'CHECKING ALL FLIGHT DETAILS & PASSENGER NAME(S)',
      text: `It is your responsibility to check all the details are correct i.e. Passenger names (are same as appearing on passport/travel docs), Travelling dates, Transit Time, Origin & Destination, Stop Over, Baggage Allowance, and other flight information. Once the ticket is issued then no changes can be made, unless specified.`
    },
    {
      heading: 'PASSPORT, VISA & IMMIGRATION REQUIREMENTS',
      text: `You are responsible for checking all these items like Passport, Visa (including Transit Visa), and other immigration requirements. You must consult with the relevant Embassy/Consulate, well before the departure time for up-to-date information as requirements may change from time to time. We regret we cannot accept the liability of any transit visa and if you are refused to board the flight or could not clear the immigration or any kind of failure in providing the information required like passport, visa or other documents required by any airline, authority or country. We also recommend you that to check this link https://www.gov.uk/foreign-travel-advice for travel advice.`
    },
    {
      heading: 'RECONFIRMING RETURN/ONWARD FLIGHTS',
      text: `It is the traveler's responsibility to RECONFIRM your flights at
       least 72 hours before your departure time either with your travel agent or the relevan
      t Airline directly. The company will not be liable for any a
      dditional costs due to your failure to reconfirm your flights.`
    },
    {
      heading: 'INSURANCE AND BAGGAGE LOSS',
      text: `We recommend that you purchase travel insurance. It is the traveler's responsibility to ensure that you have valid travel insurance that covers your needs and also ensure that you have complied with all the health and vaccination requirements for the countries you are travelling to, Advice can be obtained from your GP or travel clinic. We don't accept any claim for lost/Stolen/Damaged Baggage. You have to contact the relevant airline directly in that case.`
    },
    {
      heading: 'SPECIAL REQUESTS AND MEDICAL PROBLEMS',
      text: `If you have any special requests like meal preference, Seat Allocation and wheelchair request, etc, please advise us at the time of issuance of the ticket. We will try our best to fulfill these bypassing this request to the relevant airlines, but we cannot guarantee and failure to meet any special request will not hold us liable for any claim.`
    },
    {
      heading: 'Covid-19',
      text: `Due to Covid-19, Additional entry requirements have been introduced which varies from country to country and may be subject to change with short notice. You are responsible for checking and conforming with the entry and exit requirements at their origins and destinations. Requirements may include proof of negative PCR Covid-19 tests, temperature checks or completion of forms, etc.

      If the flight is affected due to Covid-19 then airline policies will be applied. To accommodate the traveler, it is quite possible that the airline only offers the future date change or credit voucher option instead of a refund. In that case, you must have to follow the airline rules and cannot demand a refund. If a full refund is permitted, A admin fee (Per person) will be deducted as the service charges and a refund can take up to 3 months. If the flight is operated by the airline and you decide not to board the flight, then you will be ineligible for a refund. In this case (if your ticket is refundable) then airline fare rules (cancellation fee) will be applied for processing the refunds.`
    },
    {
      heading: 'VERY IMPORTANT',
      text: `Fly Safari UK does not accept responsibility for any kind of loss if the airline fails to operate due to any unforeseen circumstances like weather, war, natural disaster, pandemic, riots, strikes, etc. Passengers will be solely responsible for that so it is highly recommended that separate travel and health insurance must be arranged to protect you.

      Booking Terms and Conditions in Details
      When making a purchase/reservation you guarantee that you have the authority to accept and do accept on behalf of your party/dependant the terms of these booking conditions and the booking conditions of any contract principal where we are acting as agent. Therefore, it is requested please take some time to go through the terms and conditions as stated here and applicable to all contracts/purchase with us.
      
      These conditions apply to all bookings - please take the time to read and understand them OR contact our personnel to discuss or answer your questions. The conditions are split into 3 parts.
      
      Part 1 applies to all bookings (holiday, package, flight only, hotel only, car hire, insurance, any/all purchase)s
      
      Part 2 also applies to all bookings classified as "Packages" by the terms in "Your Holiday Contract" and
      
      Part 3 applies to bookings classified as "Other Travel Arrangements" also subjected to other conditions as stated above.
      
      Please note the following are the company policy and terms & booking conditions while, in certain cases a supplier, holiday provider, accommodation provider, hotelier, international air control or airline policy terms may also be applicable as / when advised.
      
      Part 1 - All Bookings
      Part 2 - Packages
      Part 3 - Other Travel Arrangments
      Part 1 - All Bookings`
    },
    {
        part:`
        Part 1 applies to all bookings (holiday, package, flight only, hotel only, car hire, insurance, any/all purchase)s
        
        Part 2 also applies to all bookings classified as "Packages" by the terms in "Your Holiday Contract" and
        
        Part 3 applies to bookings classified as "Other Travel Arrangements" also subjected to other conditions as stated above.
        
        Please note the following are the company policy and terms & booking conditions while, in certain cases a supplier, holiday provider, accommodation provider, hotelier, international air control or airline policy terms may also be applicable as / when advised.
        
        Part 1 - All Bookings
        Part 2 - Packages
        Part 3 - Other Travel Arrangments
        Part 1 - All Bookings`
    },
    {
      heading: 'Go Top',
      text: `Reservations shall be made over telephone, in person, online or by mail without any obligation.
      Reservation is followed by confirmatory email from consultant to the traveler (provided that the correct email address is given in time). The confirmatory email contains detailed traveler information, schedule, payment, company contact and terms & conditions.
      Flight Reservation / schedule and details have to be confirmed/replied by both parties in written (where applicable) within 24 (regular) to 48 hours (exceptional case) of reservation.
      For reservations made over the Internet, full payment is normally required at time of reservation unless specifically stated in the booking process.
      In cases where full payment is not made at the time of purchase, THE MINIMAL DEPOSIT PAYABLE IS 50 GBP. The initial deposit is non-refundable and is required within 24 hours of reservation to ensure Travel Consultancy services and maintain seat Reservation.
      Tickets are only issued once agreed, replied or confirmed by the traveler. Issued tickets are non-refundable, non-changeable and non-transferable (unless specified).
      E-Tickets (Electronic Tickets) are issued and sent via email once full payment is made before deadline / ticket time limit.`
    },
    // Add more objects for each section similarly
  ];

  return (
    <>

    <Container>
        <Typography sx={{fontWeight:700,color:'#07253f',fontSize:'35px',textTransform:'uppercase',mt:'30px'}}>
            Booking Conditions
        </Typography>
        <Typography sx={{fontWeight:300,color:'#07253f',fontSize:'18px',mt:'10px'}}>
        Please read these carefully as the person making this booking (either for themselves or for any other passenger) accepts all the below terms and conditions of Fly Safari UK.
        </Typography>
      {termsAndConditions.map((item, index) => (
        <div key={index}>
        <Typography variant="h6" sx={{ mt: '20px', fontWeight: 'bold' }}>
          {item.heading}
        </Typography>
        <Typography sx={{ mt: '10px' }} dangerouslySetInnerHTML={{ __html: item.text }} />
        {/* <Typography sx={{ mt: '10px' }} dangerouslySetInnerHTML={{ __html: item.part }} /> */}
      </div>
      ))}
    </Container>
    <Box sx={{mt:'130px'}}>

    <NewsLetter/>
    </Box>
    </>
  );
}

export default BookingCondition;

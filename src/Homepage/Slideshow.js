import React from 'react';
import { Zoom } from 'react-slideshow-image';

import Ghomme from '../Homepage/images/banner.png'

import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'
import Irrigation from '../Homepage/images/irrigation.png'
import Hotel from '../Homepage/images/hotel.png'
import Parking from '../Homepage/images/parking.png'
import Industry from '../Homepage/images/industry.png'
import Community from '../Homepage/images/community.png'
import Park from '../Homepage/images/park.png'
import { Button, Typography, Grid, Stack} from '@mui/material';
const Slideshow = () => {
  const images = [
    Ghomme,
    Irrigation,
    Hotel,
    Parking,
    Industry,
    Community,
    Park
  ];
  const header = [
    "GEETRON SMART HOMES",
    "New IoT Solution for Water Management",
    "Geetron Hotel Managemetn",
    "Smart Parking",
    "Industry 4.0",
    "Waste Management",
    "Parks & Resorts"
  ];
  const body = [
    "Homes are getting smarter, safe and Secure. Geetron smart homes provide automated and innovative solutions that will have all the intelligent home features, including voice recognition.",
    "We have developed an IoT wireless irrigation solution, which addresses the issues of mobility and affordability for customers. We use the latest ultra-long-range radio communication to eliminate all expensive in-field wiring. Our solar-powered watering stations are environmentally friendly and maintenance-free.",
    "Geetron GRMS offers Enhanced hospitality and provides a unique experience for guests. Our solutions work on Interactive technology that accomplishes the seamless experience you want for your guest and provides easy management for the operators.",
    "Smart Parking is a radar sensor device that allows the detection of parking availability indoors and outdoors.",
    "The challenge for companies in the field of Industry 4.0 is to obtain quality data that adds reliability and intelligence to the manufacturing processes and feeds the KPI's at each decision level. ",
    "The waste management IoT solution enables cities and industries to manage their waste efficiently, reducing the environmental footprint and improving the quality of the service.",
    "Parks and Resorts seek sustainable growth, reducing the impact of economic and demographic changes and taking advantage of information and communication technologies."

  ];
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    autoplay: true,
    duration: 2000,
    pauseOnHover: true,
    canSwipe: true,
    arrows: false


  }
  const MyGrid = styled(Grid)(({ theme }) => ({

    alignItems: "center",
    height: '650px',

    [theme.breakpoints.up("xs")]: {
      marginLeft: "25px",
      maxWidth: '250px',
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "50px",
      maxWidth: '300px',
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "100px",
      maxWidth: '300px',
    },
    [theme.breakpoints.up("lg")]: {

      marginLeft: "200px",
      maxWidth: '700px',
    },


  }));

  const Header = styled(Typography)(({ theme }) => ({

    paddingTop: "0.2em",
    paddingLeft: "0.5em",
    fontSize: '1.5em',
    textAlign: 'left',
    color: '#1268B3',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',


  }));
  const Subtext = styled(Typography)(({ theme }) => ({

    paddingTop: "0.2em",
    paddingLeft: "0.5em",
    fontSize: '1.0em',
    textAlign: 'left',
    maxWidth: '30em',
    color: 'black',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold'

  }));
  const MyStack = styled(Stack)(({ theme }) => ({
    marginTop: "10px",


  }));
  const MyBox = styled(Grid)(({ theme }) => ({

    alignItems: "center",
    backgroundPosition: 'center',
    height: '650px',
    width: "100%",

  }));
  const MyButton = styled(Button)(({ theme }) => ({
    marginLeft: "0.1em",
    background: '#1268B3',
    width: '10em',
    borderRadius: 5,
    fontFamily: 'SourceSansPro'


  }));
  return (
    <Zoom {...zoomInProperties}>
      {images.map((each, index) => (
        <MyBox key={index}>

          <div className="each-slide">
            <MyBox style={{ 'backgroundImage': `url(${each})`, 'background-size': 'cover' }}>
              <MyGrid container spacing={0.5} >


                <MyStack spacing={2}>
                  <div data-aos="flip-left">
                    <Header>{header[index]}</Header>
                  </div>
                  <div data-aos="flip-left" data-aos-anchor data-aos-delay="300">
                    <Subtext>{body[index]}</Subtext>
                  </div>
                  <div data-aos="flip-left" data-aos-delay="500">
                    <MyButton variant="contained" >Contact Us</MyButton>
                  </div>

                </MyStack>


              </MyGrid>
            </MyBox>
          </div>
        </MyBox>
      ))}
    </Zoom>

  )
}

export default Slideshow;
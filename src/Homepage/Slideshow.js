import React from 'react';
import { Zoom } from 'react-slideshow-image';

import Ghomme from '../Homepage/images/smarthome.jpg'

import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'
import Irrigation from '../Homepage/images/irrigation.jpg'
import Hotel from '../Homepage/images/hotelbanner.jpg'
import Parking from '../Homepage/images/parkingbanner.jpg'
import Industry from '../Homepage/images/industry.jpg'
import Community from '../Homepage/images/community.jpg'
import Park from '../Homepage/images/park.jpg'
import Tracking from '../Homepage/images/tracking.jpg'
import Digital from '../Homepage/images/signage.jpg'
import Hospital from '../Homepage/images/hospital.jpg'
import MyButtoncustom from '../ModifiedComponents/Button'
import {  Typography, Grid, Stack,Box} from '@mui/material';
const Slideshow = () => {
  const images = [
    Ghomme,
    Irrigation,
    Hotel,
    Parking,
    Industry,
    Community,
    Park,
    Tracking,
    Digital,
    Hospital
  ];
  const header = [
    "Smart Homes",
    "New IoT Solution for Water Management",
    "Hotel Management System",
    "Smart Parking System",
    "Industry 4.0",
    "Smart Community",
    "Smart Parks & Resorts",
    "Tracking",
    "Digital Signage",
    "Hospital"
  ];
  const body = [
    "Homes are getting smarter, safe, and Secure. Geetron smart homes provide automated and innovative solutions that will have all the intelligent home features, including voice recognition.",
    "We have developed an IoT wireless irrigation solution, which addresses the issues of mobility and affordability for customers. We use the latest ultra-long-range radio communication to eliminate all expensive in-field wiring. Our solar-powered watering stations are environmentally friendly and maintenance-free.",
    "Geetron GRMS offers Enhanced hospitality and provides a unique experience for guests. Our solutions work on Interactive technology that accomplishes the seamless experience you want for your guest and provides easy management for the operators.",
    "Smart Parking is a radar sensor device that allows the detection of parking availability indoors and outdoors.",
    "The challenge for companies in the field of Industry 4.0 is to obtain quality data that adds reliability and intelligence to the manufacturing processes and feeds the KPI's at each decision level. ",
    "All in one facility management solution with a centralized IoT dashboard. Lighting, waste management, irrigation, and Security come under one roof with our smart integration technique. The waste management IoT solution enables cities and industries to manage their waste efficiently, reducing the environmental footprint and improving the quality of the service.",
    "Parks and Resorts seek sustainable growth, reducing the impact of economic and demographic changes and taking advantage of information and communication technologies.",
    "The smart-tracking solution allows companies to track and manage the assets that power any business.",
    "Digital Signage is capable of displaying anything desired such as video, pictures, animations, or just plain text, useful for any business which relies on constantly updated information be it be your sales or advertisement. The message will be highlighted by the power of digital signage",
    "We integrate IoT-enabled medical devices with our dashboard, enabling easy access to patient medical history and current status. "  ];
  const link = [
    "Ghomes",
    "Water",
    "Hotels",
    "Parking",
    "Industry",
    "Community",
    "Park",
    "Tracking",
    "Signage",
    "Hospital"
  ];
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    autoplay: true,
    duration: 4000,
    pauseOnHover: false,
    canSwipe: true,
    arrows: false


  }
  const MyGrid = styled(Grid)(({ theme }) => ({

    alignItems: "flex-end",
  justifyContent: "center",
    height: '650px',
   



  }));

  const Header = styled(Typography)(({ theme }) => ({

    paddingTop: "0.2em",
    paddingLeft: "0.5em",
    fontSize: '1.5em',
    textAlign: 'left',
    color: '#FFFFFF',
    fontFamily: 'SourceSansPro',


  }));
  const Subtext = styled(Typography)(({ theme }) => ({

    paddingTop: "0.2em",
    paddingLeft: "0.5em",
    textAlign: 'justify',
    color: 'white',
    fontFamily: 'SourceSansPro',
    

  }));
  const MyStack = styled(Stack)(({ theme }) => ({
    margin: "10px",


  }));
  const MyBox = styled(Grid)(({ theme }) => ({

    alignItems: "center",
    backgroundPosition: 'center',
    height: '650px',
    width: "100%",
    backgroundColor:'#f0f0f0',

  }));

  const MyBoxtext = styled(Box)(({ theme }) => ({
  
    backgroundColor: 'rgba(52, 52, 52, 0.7)'

  }));
  return (
    <Zoom {...zoomInProperties}>
       
      {images.map((each, index) => (
        <MyBox key={index}>

          <div className="each-slide">
            
            <MyBox container   style={{ 'backgroundImage': `url(${each})`, 'background-size': 'cover' }}>
              <Grid   container   xs={12}>
              <MyGrid container    item  xs={12} sm={12} md={12}  >

              <MyBoxtext sx={{ borderRadius: 0 }}>
                <MyStack  spacing={1}>
                  <Grid container spacing={2} direction="row" >
                    <Grid item  xs={6} sm={10}>
                    <div data-aos="flip-left" data-aos-anchor>
                    <Header>{header[index]}</Header>
                  </div>
                    </Grid>
                    <Grid item   xs={6} sm={2} container  alignItems= "flex-end"  justifyContent= "flex-end" >
                    <div data-aos="flip-left" data-aos-anchor >
                    <MyButtoncustom links={link[index]}/>
                  </div>
                    </Grid>
                
                
                  </Grid>
                  
                  <div data-aos="flip-left" data-aos-anchor data-aos-delay="300">
                    <Subtext>{body[index]}</Subtext>
                  </div>
                 

                </MyStack>
</MyBoxtext>

              </MyGrid>
              </Grid>
            </MyBox>
          </div>
        </MyBox>
      ))}
    </Zoom>

  )
}

export default Slideshow;
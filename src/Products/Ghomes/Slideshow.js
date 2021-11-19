import React from 'react';
import { Zoom } from 'react-slideshow-image';

import parking from '../Ghomes/images/banner.png'

import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'
import health from '../Ghomes/images/banner.png'

import { Button, Typography, Grid, Stack} from '@mui/material';
const Slideshow = () => {
  const images = [
    parking,
    health,
  ];
  const header = [
    "GEETRON SMART HOMES",
    "G-homes",
  ];
  const body = [
    "Homes are getting smarter, safe, and Secure. Geetron smart home solutions provide automated and innovative solutions that will have all the intelligent home features, including voice recognition.",
    "Our smart home solutions have intelligent switches, sensors, and controllers for homes that will seamlessly ensure the overall performances and integration with Alexa & Google assistant.",
  ];
  const zoomInProperties = {
    indicators: true,
    scale: 0.8,
    autoplay: true,
    duration: 3000,
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
    fontWeight: 'bold',
    align:'justify'

  }));
  const MyStack = styled(Stack)(({ theme }) => ({
    marginTop: "10px",


  }));
  const MyBox = styled(Grid)(({ theme }) => ({

    alignItems: "center",
    backgroundPosition: 'center',
    height: '650px',
    width: "100%"

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
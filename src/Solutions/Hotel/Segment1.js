import React from 'react';
import { Zoom } from 'react-slideshow-image';

import irrigation from '../Hotel/images/banner.jpg'

import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'

import {Typography, Grid, Stack} from '@mui/material';
const Slideshow = () => {
  const images = [
    irrigation
    
  ];
  const header = [
    "GRMS"
   
  ];
  const body = [
    "Geetron GRMS offers Enhanced hospitality and provides a unique experience for guests. Our solutions work on Interactive technology that accomplishes the seamless experience you want for your guest and provides easy management for the operators."
   
  ];
  const zoomInProperties = {
    indicators: false,
    scale: 0.8,
    autoplay: false,
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
    color: 'white',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',


  }));
  const Subtext = styled(Typography)(({ theme }) => ({

    paddingTop: "0.2em",
    paddingLeft: "0.5em",
    fontSize: '1.0em',
    textAlign: 'left',
    maxWidth: '30em',
    color: 'white',
    fontFamily: 'SourceSansPro',  
    align:'justify'

  }));
  const MyStack = styled(Stack)(({ theme }) => ({
    marginTop: "-50px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
   


  }));
  const MyBox = styled(Grid)(({ theme }) => ({

    alignItems: "center",
    backgroundPosition: 'center',
    height: '650px',
    width: "100%"

  }));
 

  return (
    <Zoom {...zoomInProperties}>
      {images.map((each, index) => (
        <MyBox key={index}>

          <div className="each-slide">
            <MyBox style={{ 'backgroundImage': `url(${each})`, 'background-size': 'cover' }}>
              <MyGrid xs container spacing={0.5} >


                <MyStack spacing={2}>
                  <div data-aos="flip-left">
                    <Header>{header[index]}</Header>
                  </div>
                  <div data-aos="flip-left" data-aos-anchor data-aos-delay="300">
                    <Subtext>{body[index]}</Subtext>
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
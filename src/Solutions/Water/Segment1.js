import React from 'react';
import { Zoom } from 'react-slideshow-image';

import irrigation from './images/irrigation.jpg'

import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'

import {  Typography, Grid, Stack,Box} from '@mui/material';
const Slideshow = () => {
  const images = [
    irrigation
    
  ];
  const header = [
    "GEETRON Water"
   
  ];
  const body = [
    "We have developed an IoT wireless irrigation solution, which addresses the issues of mobility and affordability for customers. We use the latest ultra-long-range radio communication to eliminate all expensive in-field wiring. Our solar-powered watering stations are environment friendly and maintenance-free.",
   
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
            <MyBox style={{ 'backgroundImage': `url(${each})`, 'background-size': 'cover' }}>
              <MyGrid container spacing={0} >

              <MyBoxtext sx={{ borderRadius: 0 }}>
                <MyStack spacing={2}>
                  <div data-aos="flip-left">
                    <Header>{header[index]}</Header>
                  </div>
                  <div data-aos="flip-left" data-aos-anchor data-aos-delay="300">
                    <Subtext>{body[index]}</Subtext>
                  </div>
                

                </MyStack>
</MyBoxtext>

              </MyGrid>
            </MyBox>
          </div>
        </MyBox>
      ))}
    </Zoom>

  )
}

export default Slideshow;
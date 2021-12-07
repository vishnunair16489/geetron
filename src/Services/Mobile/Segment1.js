import React from 'react';
import { Zoom } from 'react-slideshow-image';
import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'
import Irrigation from '../Mobile/images/mobiledevelopment.jpg'
import {  Grid} from '@mui/material';
const Slideshow = () => {
  const images = [  
    Irrigation
  
  ];
 
  const zoomInProperties = {
    indicators: false,
    scale: 1.2,
    autoplay: false,
    duration: 123000,
    pauseOnHover: true,
    canSwipe: true,
    arrows: false


  }

  
  const MyBox = styled(Grid)(({ theme }) => ({

    alignItems: "center",
    backgroundPosition: 'center',
    height: '650px',
    width: "100%",

  }));

  return (
    <Zoom {...zoomInProperties}>
      {images.map((each, index) => (
        <MyBox key={index}>

          <div className="each-slide">
            <MyBox style={{ 'backgroundImage': `url(${each})`, 'background-size': 'cover' }}>
             
            </MyBox>
          </div>
        </MyBox>
      ))}
    </Zoom>

  )
}

export default Slideshow;
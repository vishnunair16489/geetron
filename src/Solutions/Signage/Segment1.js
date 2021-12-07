import React from 'react';
import { Zoom } from 'react-slideshow-image';

import irrigation from '../Signage/images/signage.jpg'

import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'

import { Box, Typography, Grid, Stack} from '@mui/material';
const Slideshow = () => {
  const images = [
    irrigation,
    
  ];
  const header = [
    "Digital Signage",
   
  ];
  const body = [
    "Digital Signage is capable of displaying anything desired such as video, pictures, animations, or just plain text,  useful for any business  which relies  on constant updated information be it be your sales or advertisement.  The message will be highlighted by the power of digital signage",
   
  ];
  const zoomInProperties = {
    indicators: false,
    scale: 0.8,
    autoplay: false,
    duration: 1323000,
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
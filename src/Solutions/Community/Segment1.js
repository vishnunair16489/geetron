import React from 'react';
import { Zoom } from 'react-slideshow-image';
import park from '../Community/images/community.jpg';
import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css';

import {  Typography, Grid, Stack} from '@mui/material';
const Slideshow = () => {
  const images = [
    park
    
  ];
  const header = [
    "Smart Community"
   
  ];
  const body = [
    "All in one facility management solution with a centralized IoT dashboard. Lighting, waste management, irrigation, and Security  comes under one roof with our smart intergartion techique"
   
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
    justifyContent: "flex-end",
    height: '650px',
    width:'100%',
   

    [theme.breakpoints.up("xs")]: {
      marginLeft: "25px",
      paddingRight:'50px',
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "50px",
      paddingRight:'50px',
   
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "100px",
      paddingRight:'300px',
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight:'300px',
      marginLeft: "200px",
     
    },


  }));

  const Header = styled(Typography)(({ theme }) => ({

    paddingTop: "0.2em",
    paddingLeft: "0.5em",
    fontSize: '1.5em',
    textAlign: 'right',
    color: 'black',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',


  }));
  const Subtext = styled(Typography)(({ theme }) => ({

    paddingTop: "0.2em",
    paddingLeft: "0.5em",
    fontSize: '1.0em',
    textAlign: 'right',
    maxWidth: '30em',
    color: 'black',
    fontFamily: 'SourceSansPro',
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

  return (
    <Zoom {...zoomInProperties}>
      {images.map((each, index) => (
        <MyBox key={index}>

          <div className="each-slide">
            <MyBox style={{ 'backgroundImage': `url(${each})`, 'background-size': 'cover' }}>
              <MyGrid container spacing={0} >


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
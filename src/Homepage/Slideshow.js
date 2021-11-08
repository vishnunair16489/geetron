import React from 'react';
import { Zoom } from 'react-slideshow-image';

import parking from '../Homepage/images/banner.png'

import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'
import health from '../Homepage/images/parralex.png'

import { Button,  Typography,Grid,Stack,Box } from '@mui/material';
const Slideshow = () => {
  const images = [
   parking,
   health,
  ];
  const header = [
   "New IoT Solution for Waste Management",
   "New IoT Solution for Waste Management1",
   ];
   const body = [
    "The Waste Management IoT solution enables cities and industries to manage their waste in an efficient way, ",
    "reducing the environmental footprint and improving the quality of the service.",
    ];
  const zoomInProperties = {
  indicators:true,
    scale: 1.2,
    autoplay:true,
    duration:3000,
    pauseOnHover:true,
    canSwipe:true,
    arrows:false

    
  }
  const MyGrid = styled(Grid)(({ theme }) => ({  
    marginTop: "28px",
      alignItems:"center",
     
      backgroundPosition:'center',
      height:'650px'
      
  }));

  const Header = styled(Typography)(({ theme }) => ({
     
      paddingTop: "0.2em",
      paddingLeft:"0.5em",
      fontSize:'1.5em',
      textAlign: 'left',
      color: '#1268B3',
      fontFamily:'SourceSansPro',
      fontWeight:'bold'
      
    }));
    const Subtext = styled(Typography)(({ theme }) => ({
     
      paddingTop: "0.2em",
      paddingLeft:"0.5em",
      fontSize:'1.0em',
      textAlign: 'left',
      maxWidth:'30em',
      color: 'black',
      fontFamily:'SourceSansPro',
      fontWeight:'bold'
      
    }));
    const MyStack = styled(Stack)(({ theme }) => ({           
      marginTop: "10px",
      marginLeft:"200px",
    }));
    const MyBox = styled(Grid)(({ theme }) => ({  
        marginTop: "28px",
          alignItems:"center",       
          backgroundPosition:'center',
          height:'650px'
          
      }));
    const MyButton = styled(Button)(({ theme }) => ({           
      marginLeft:"0.1em",
      background: '#1268B3',
      width:'10em',
      borderRadius:5,
      fontFamily:'SourceSansPro'
      
      
    }));
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <Box key={index} style={{width: "100%"}}>
            
            <div className="each-slide">
            <MyBox style={{'backgroundImage': `url(${each})`,}}>
            <MyGrid container spacing={0.5} >
     <Grid  item xs={12} md={6} >
   
    <MyStack  spacing={2}>
    <div  data-aos="flip-left">
        <Header>{header[index]}</Header>
        </div>
        <div  data-aos="flip-left" data-aos-anchor data-aos-delay="300">
        <Subtext>{body[index]}</Subtext>
        </div>
        <div  data-aos="flip-left" data-aos-delay="500">
<MyButton variant="contained" >Contact Us</MyButton>
</div>

      </MyStack>
      
    </Grid>
  </MyGrid>
            </MyBox>
          </div>
          </Box>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;
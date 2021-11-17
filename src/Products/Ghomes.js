import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import segment1img from './images/homes.jfif';
import { Typography, Grid,CssBaseline, Stack, Divider } from '@mui/material';
import Aos from 'aos';
import '../index.css';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
  direction: "row",
  

}));

const Header = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.2em',
  minWidth: '10em',
  color: '#1268B3',
  fontFamily: 'SourceSansPro',

}));
const MyDivider = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  fontFamily: 'SourceSansPro',
  [theme.breakpoints.down("xs")]: {
    justifyContent:"center",
    alignItems:"center",
   },
    [theme.breakpoints.up("md")]: {
      justifyContent:"flex-end",
      alignItems:"center",
      
  marginTop: "50px",
  
   },
}));
const Subtext = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.0em',
  textAlign: 'left',

  color: 'black',
  fontFamily: 'SourceSansPro',

  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: '25em',
  },
}));
const MyStack = styled(Stack)(({ theme }) => ({
  marginTop: "10px",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "30px",
  marginRight: "30px",

}));

const PicGrid = styled(Grid)(({ theme }) => ({

  
  direction:"row",
  justifyContent:"center",
  alignItems:"center",
 
  [theme.breakpoints.down("xs")]: {
    justifyContent:"center",
    alignItems:"center",
   },
    [theme.breakpoints.up("md")]: {
      justifyContent:"flex-end",
      alignItems:"center",
  
   },
}));


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
    
    <div>
        <CssBaseline />
      <MyDivider textAlign="center">G-Homes </MyDivider>

      <MyGrid container spacing={0.5} >

        <PicGrid container item xs={12} md={6}   >
          <img src={segment1img} height="250px" alt="Logo" />
        </PicGrid>
        <Grid container item xs={12} md={6} >
          <MyStack spacing={2}>
            <Header>GEETRON SMART HOMES</Header>
            <Subtext>
Homes are getting smarter, safe, and Secure. Geetron smart home solutions provide automated and innovative solutions that will have all the intelligent home features, including voice recognition.
Our smart home solutions have intelligent switches, sensors, and controllers for homes that will seamlessly ensure the overall performances and integration with Alexa & Google assistant.
Our mobile application lets seamlessly connect your home from anywhere around the world. Now anyone can create a personalized preference for homes with smart lighting, thermostat, smart switches & appliance controls.
Geetron smart automation technology enables energy-saving solutions and helps you to save your home's utility costs. Our solution is a one-stop shop for bringing your family home into the future.﻿</Subtext>
          
          </MyStack>
        </Grid>

      </MyGrid> 
      </div>
  
  );
}

export default App; 
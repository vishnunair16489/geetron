import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import segment1img from './images/homes.jfif';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Aos from 'aos';
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
  marginTop: "50px",
  fontFamily: 'SourceSansPro',
}));
const Subtext = styled(Typography)(({ theme }) => ({

    direction:"row",
    justifyContent:"center",
    alignItems:"center",
    
  
    color: 'black',
    fontFamily: 'SourceSansPro',
   
    [theme.breakpoints.down("xs")]: {
      justifyContent:"center",
      alignItems:"center",
     },
      [theme.breakpoints.up("md")]: {
        justifyContent:"flex-end",
        alignItems:"center",
    
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


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
    <div>
      <MyDivider textAlign="center">G-Water </MyDivider>

      <MyGrid container spacing={0.5} >

       
        <Grid container item xs={12} md={6} >
          <MyStack spacing={2}>
            <Header>GEETRON WATER</Header>
            <Subtext>
          <p>  We have developed an IoT wireless irrigation solution, which addresses the issues of mobility and affordability for customers. We use the latest ultra long range radio communication to eliminate all expensive in-field wiring. Our solar powered watering stations are environmentally friendly and maintenance free. In the backbone we have a full scale industrial irrigation controller, including access to IoT cloud for controller, intelligence, alarms and weather forecast trough mobile and web apps.</p>

          <p>Future of irrigation is now with wireless irrigation systems by using the latest radio technology, multiple sensors connected to cloud platform. Every water valve is controlled without any wires and runs on solar power. Saves 50% of water, increases crop yield by 30% and saves hundreds of work hours.</p>

          <p>Our irrigation system controls electrically operated valves from the central computer. Geetron Wireless Irrigation Controller use wireless two-way communication to open and close valves. ﻿The solution consists of several parts – Wireless Irrigation Controller, Cloud Based Control and Monitoring.</p></Subtext>
          
          </MyStack>
        </Grid>
        <PicGrid container item xs={12} md={6}   >
          <img src={segment1img} height="300px" alt="Logo" />
        </PicGrid>
      </MyGrid>
      </div>
  );
}

export default App; 
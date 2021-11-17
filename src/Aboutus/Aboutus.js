import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import segment1img from './images/geepas.jpg';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Aos from 'aos';

import Footer from '../Homepage/Footer';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
  direction: "row",
  

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
  alignItems:"flex-start",
 
  [theme.breakpoints.down("xs")]: {
    justifyContent:"center",
    alignItems:"flex-start",
   },
    [theme.breakpoints.up("md")]: {
      justifyContent:"flex-end",
      alignItems:"flex-start",
  
   },
}));


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
    <div>
      <MyDivider textAlign="center">About Us </MyDivider>

      <MyGrid container spacing={0.5} >

        <PicGrid container item xs={12} md={6}   >
          <img src={segment1img} height="250px" alt="Logo" />
        </PicGrid>
        <Grid container item xs={12} md={6} >
          <MyStack spacing={2}>
            <Subtext>
            In addition to our extensive history and expertise, there are a few key reasons why Client will benefit from working with G Square Electronics LLC. 
National Presence. We are an international company, but our over 13,000  employees cover the country from EUROPE to MIDDLE EAST & ASIA. With this many resources at hand, we can comfortably staff this project, no matter the timeline or specific challenges. 
Local Experts. While we will leverage our national resources where necessary, our city HO office is located at Jebel Ali (National Industrial Park) accessible from any Client’s offices, making for easy collaboration and quick implementation and communication.
Technology Innovator. We have developed many of the latest technologies and processes for automation systems. To date, we have installed over 100 of automation solution, which are designed developed by our own Engineers and we have our own R&D. Who are well experienced to cater and develop any complex system/solutions.
In working with our Company, Client can rest assured that you are receiving top-quality products and installation by experts. Our history of completing similar projects both within your neighborhood and around the globe speaks to our expertise and attention to quality. We look forward to supporting Client in this phase and beyond.
</Subtext>        
          </MyStack>
        </Grid>

      </MyGrid> 
      </div>
  
  );
}

export default App; 
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
      <MyDivider textAlign="center">G-Hotels </MyDivider>

      <MyGrid container spacing={0.5} >

       
        <Grid container item xs={12} md={6} >
          <MyStack spacing={2}>
            <Header>GEETRON Hotels</Header>
            <Subtext>
            Geetron GRMS offers Enhanced hospitality and provides unique experience for guests. Our solutions work on Interactive technology that accomplish the seamless experience you want for your guest and provide easy management for the operators.

Guest Room Management

﻿Guest room management system interconnects the guest rooms with a central control system. User friendly graphical interface allow front desk operator to respond to alerts and notification like Do not Disturb, Make Up Room, Housekeeping calls, emergencies etc. It offers easy to use, scalability and cost-effective solutions.


Our solutions offer greater efficiency and savings by adjusting room condition automatically using presence detectors and door detectors when guest are away and when they return. GRMS system can be integrated into any facility management system to help reduce running costs and increase the efficiency of your building. The system is fully compatible with Property Management Systems (PMS) and Building Management System (BMS).



With powerful GRMS, Seamlessly Integrated Retrofit Solutions and Intelligent controller can cut down the cost to minimum and enables you to realize significant financial savings can be achieved.

﻿﻿GHomes Packages
The lights of your home and office are right at your fingertips! The Magic is about integration of these devices that can control all lighting, heating, security, multimedia and other smart devices of your Home and office.

Grms Lite
DND, MUR, BELL, Welcome Light.
Grms Lite +
DND, MUR, BELL, Welcome Light + Lock (Server updating / Card updating)
Grms Std
DND, MUR, BELL, Welcome Light + AC Controls
Grms Std +
DND, MUR, BELL, Welcome Light + AC Controls + Lock (Server updating / Card updating)
Grms Pro
DND, MUR, BELL, Welcome Light + AC Controls + Lock (Server updating / Card updating) + Alexa Integration.</Subtext>
          
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
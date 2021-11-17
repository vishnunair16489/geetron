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
      <MyDivider textAlign="center">G-Waste Management </MyDivider>

      <MyGrid container spacing={0.5} >

       
        <Grid container item xs={12} md={6} >
          <MyStack spacing={2}>
            <Header>GEETRON WATER</Header>
            <Subtext>

           <p> The waste management IoT solution enables cities and industries to manage their waste in an efficient way, reducing the environmental footprint and improving the quality of the service.</p>

           <p>The waste management solution includes smart sensors that use ultrasound technology to measure the fill levels in bins and containers.</p>

<p>They send the data to the Smart Waste Management System, a powerful cloud-based platform, via several IoT communication protocols (Sigfox, LoRaWAN).</p>

<p>The objective is to provide cities and businesses with data-driven decision making, and optimization of waste collection routes.</p>

<p>Benefits of IoT technology for Waste Management</p>
<p>Increases</p>

<p>Gain greater efficiency & optimization</p>

<p>Obtain high-quality service to increase citizens’ well-being</p>

<p>Reduces</p>

<p>Reduce operational costs</p>


<p>﻿Features:</p>

<p>﻿﻿Know when bins/Containers are full remotely</p>
<p>Optimize waste bin capacity, location, and type</p>
<p>Optimize waste collection frequencies</p>
<p>Delay the collection of semi-empty containers and pick up the overflowed ones</p>
<p>Handle collection request on demand</p>
<p>Provide tenants with a more efficient waste management solution</p>
<p>Relieve traffic congestion related to regular waste collection routes</p>
<p>improve the environmental care</p>

<p>﻿Online Dashboard System</p>

<p>The powerful cloud-based platform can be configured, to monitor and plan everyday waste management activities. See all the bins on a digital map and via street view including capacity, last measurement, GPS location, and collection schedule or pick recognition.</p>

<p>Monitor real-time fill level, see predictions, plan collection routes, see pick reports. Obtain detailed bin inventory, optimize bin location (capacity, cost), record maintenance.</p>



<p>Lighting Controller</p>

<p>Irrigation Controller</p>

<p>Emergency Alarm System</p>

<p>Energy Meter Monitoring</p>

</Subtext>
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
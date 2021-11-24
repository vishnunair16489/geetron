import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Controller/images/wifi.png'
import {  Grid, Stack,Box } from '@mui/material';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

 
  height:'300px',
 
}));





const App = () => {
  return (

  
      <Stack>
       
        <MyGrid container spacing={2} >
      
      <MypicGrid container xs={12} md={4}><img src={img} height='300' alt='img'/></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
          <div data-aos="flip-left">
          <p>WIRELESS IRRIGATION CONTROLLER</p>
        </div>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
          
              
             
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>Features</b>
                  <ul>
                  <li>Remote and Standalone Operation</li>
                  <li>Onboard System setup using Inbuilt LCD and buttons</li>
                  <li>Remote System setup using inbuilt LORA transciever</li>
                  <li>16 valve relay with 24V AC output</li>
                  <li>RS485 connectivity for Sensor interfacing</li>
                  <li> Inbuilt time keeping with 3V Lithium battery</li>
                  
                  </ul>
                  </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
               <b>Firmware Features</b>
                  <ul>

                    <li>Setup Device Address using button</li>
                    <li>Set time and date </li>
                    <li>Set valve schedule – 4 times per day</li>
                    <li>Set Week operating days</li>
                    <li>Set Water discharge percentage</li>
                    <li>Control Valve Manually</li>
                    <li>Valve Status Display</li>
                    <li>Slide show of time and settings on display</li>
                    
                  
                  </ul></p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
               <b>Device Operation</b>
                  <ul>

                    <li>Setup CID</li>
                    <li>Setup Time and Date</li>
                    <li>Setup Schedule</li>
                    <li>Manual Valve Control</li>
                    <li>Turn Device ON/OFF</li>
                    <li>Setup Week Operation Days</li>
                    <li>Setup Water Seasonal Usag</li>
                  
                  </ul></p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
               <b>Device Parameters</b>
                  <ul>

                    <li>Supply : 230V 50Hz</li>
                    <li> Internal Smps : 12V 2000mAh</li>
                    <li>Processor : 32-bit ARM Cortex-M3 </li>
                    <li>Relay Voltage: 12V - 16 No.s</li>
                    <li>Internal Valve Power: 24V AC 3A</li>
                    <li>Time Battery: 3V CR2032</li>
                    <li>Wireless RF : LoRa 868Mhz </li>
                    <li>Antenna : 6dbi 868 Mhz Lora
 </li>
                  </ul></p>
                  </Grid>
                  </Grid>
           
              
            </div>
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
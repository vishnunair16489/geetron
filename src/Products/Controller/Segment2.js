import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Switch/images/capswitch.jpg'
import { Grid, Stack,Box } from '@mui/material';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center", 
  marginLeft:'5px'

}));


const MypicGrid = styled(Grid)(({ theme }) => ({

  justifyContent: "center",
  alignItems: "center", 
  height:'300px',
 
}));


const App = () => {
  return (

  
      <Stack>
       
        <MyGrid container spacing={2} >
      
      <MypicGrid item xs={12} md={4}><img src={img} height='300' alt='img'/></MypicGrid>
    
      <Grid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
          <div data-aos="flip-left">
          <p>Light Controller</p>
        </div>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
          
              
             
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>Hardware Overview</b>
                  <ul>
                    <li>Remote System setup using inbuilt LORA transciever</li>
                    <li>4 Latching Relay with 20A Contact</li>
                    <li>LCD to show Time,Date,Schedules and Signal DB </li>
                    <li>ModBus interface for Energy meter Interfacing</li>
                    <li>Inbuilt time keeping with 3V Lithium battery</li>
                    <li>Programmable address settings</li>
                    <li>4 Digital Inputs</li>
                  </ul>
                  </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
                  <b>External Interface</b>
                  <ul>

                    <li>RS485 Modbus pins</li>
                    <li>Digital Input Pins</li>
                    <li>Relay Output</li>
                    <li>8x2 LCD</li>
                    <li> Manual relay switch</li>
                  </ul>
                  </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
                  <b>Firmware Features</b>
                  <ul>

                    <li>Setup Device Address using button</li>
                    <li>Set/Get time and date via Lora</li>
                    <li>Set/Get Relay on off schedule</li>
                    <li>Get wattage, energy, current and voltage from external Modbus energy meter</li>
                    <li>Get GPIO input status via Lora to server</li>
                    <li>Control Relay directly from server</li>
                    <li>Get Digital IO status</li>
                  </ul>
                  </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
                  <b>Device Parameterss</b>
                  <ul>

                    <li>Supply : 230V 50Hz</li>
                    <li>External Smps : 12V 2000mAh</li>
                    <li>Processor : 32-bit ARM Cortex-M3</li>
                    <li>Relay Voltage: 12V - 16 No.s</li>
                    <li> Time Battery: 3V CR2032</li>
                    <li>Wireless RF : LoRa 868Mhz</li>
                    <li>Antenna : 3dbi 868 Mhz Lora</li>
                  </ul>
                  </p>
                  </Grid>
                  </Grid>
           
              
            </div>
            </Grid>
       
      
            </Grid>
            </Box>
      </Grid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;

import { styled } from '@mui/material/styles';
import img from '../Controller/images/irrigation.png'
import { Grid, Stack,Divider } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 
  padding:'0px 10px',
}));
const ContentGrid = styled(Grid)(({ theme }) => ({
  padding:'0px 10px',
  justifyContent: "flex-start",
  alignItems: "flex-start", 

}));

const MypicGrid = styled(Grid)(({ theme }) => ({

 
  height:'300px',
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
    alignItems: "flex-end", 
   [theme.breakpoints.up("md")]: {
  
    justifyContent: "center",
    alignItems: "center", 
  },


 
  }}));
const MyDivider = styled(Divider)(({ theme }) => ({
  
    
  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  margin: "50px 0px",
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  [theme.breakpoints.down("xs")]: {
  
    fontSize: '1.2em',
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    fontSize: '1.5em',
  },

}));

const Myp = styled('p')(({ theme }) => ({
 
 
  fontFamily: 'SourceSansPro',
  padding:'10px',
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 20px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
 }));
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (

  
      <Stack>
         <MyDivider textAlign="right">WIRELESS IRRIGATION CONTROLLER</MyDivider>
        <MyGrid container spacing={2} >
      
        <MypicGrid container xs={12} md={4}>
        <div data-aos="flip-right"   data-aos-delay="200" >
      <img src={img} width='300' alt="logo"/>
      </div>
      </MypicGrid>
    
      <Grid item xs={12} md={6}>
     
        
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
        
         
          
              
             
                <Grid container direction="row" spacing={0}>
                <ContentGrid container item  xs={12}  sm={6} md={6}> 
                  <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Myp> <b>Hardware Overview</b>
                <ul>
                  <li>Remote and Standalone Operation</li>
                  <li>Onboard System setup using Inbuilt LCD and buttons</li>
                  <li>Remote System setup using inbuilt LORA transciever</li>
                  <li>16 valve relay with 24V AC output</li>
                  <li>RS485 connectivity for Sensor interfacing</li>
                  <li> Inbuilt time keeping with 3V Lithium battery</li>
                  </ul>
                  </Myp>
                  </div>
                  </ContentGrid>
                  <ContentGrid container item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="300" >
                  <Myp>
                  <b>External Interface</b>
                  <ul>

                    <li>Setup Device Address using button</li>
                    <li>Set time and date </li>
                    <li>Set valve schedule – 4 times per day</li>
                    <li>Set Week operating days</li>
                    <li>Set Water discharge percentage</li>
                    <li>Control Valve Manually</li>
                    <li>Valve Status Display</li>
                    <li>Slide show of time and settings on display</li>
                    
                  
                  </ul>
                  </Myp>
                  </div>
                  </ContentGrid>
                  <ContentGrid container item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Myp>
                  <b>Firmware Features</b>
                  <ul>

<li>Setup CID</li>
<li>Setup Time and Date</li>
<li>Setup Schedule</li>
<li>Manual Valve Control</li>
<li>Turn Device ON/OFF</li>
<li>Setup Week Operation Days</li>
<li>Setup Water Seasonal Usag</li>

</ul>
                  </Myp>
                  </div>
                  </ContentGrid>
                  <ContentGrid container item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="500" >
                  <Myp>
                  <b>Device Parameterss</b>
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
</ul>
                  </Myp>
                  </div>
                  </ContentGrid>
                  </Grid>
           
              
           
            </Grid>
       
      
            </Grid>
          
      </Grid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
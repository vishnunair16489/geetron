import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Controller/images/lightcontroller.png'
import { Grid, Stack,Divider } from '@mui/material';
import 'aos/dist/aos.css';
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
  return (

  
      <Stack>
         <MyDivider textAlign="right">Light Controller</MyDivider>
        <MyGrid container spacing={2} >
      
        <MypicGrid container xs={12} md={4}>
        <div data-aos="flip-right"   data-aos-delay="200" >
      <img src={img} width='350' alt="logo"/>
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
                    <li>Remote System setup using inbuilt LORA transciever</li>
                    <li>4 Latching Relay with 20A Contact</li>
                    <li>LCD to show Time,Date,Schedules and Signal DB </li>
                    <li>ModBus interface for Energy meter Interfacing</li>
                    <li>Inbuilt time keeping with 3V Lithium battery</li>
                    <li>Programmable address settings</li>
                    <li>4 Digital Inputs</li>
                  </ul>
                  </Myp>
                  </div>
                  </ContentGrid>
                  <ContentGrid container item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="300" >
                  <Myp>
                  <b>External Interface</b>
                  <ul>

                    <li>RS485 Modbus pins</li>
                    <li>Digital Input Pins</li>
                    <li>Relay Output</li>
                    <li>8x2 LCD</li>
                    <li> Manual relay switch</li>
                  </ul>
                  </Myp>
                  </div>
                  </ContentGrid>
                  <ContentGrid container item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Myp>
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
                  </Myp>
                  </div>
                  </ContentGrid>
                  <ContentGrid container item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="500" >
                  <Myp>
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
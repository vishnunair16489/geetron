import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Dashboard/images/dashboardright.png'

import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
  height:'300px',
 

  
}));

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


const Mypara = styled(Typography)(({ theme }) => ({


  fontFamily: 'SourceSansPro',
  textAlign: 'justify',
  [theme.breakpoints.up("xs")]: {
  
    padding: "0px 20px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))


const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="right">Why IoT Dashboard?</MyDivider>
        </div>
        <MyGrid container spacing={2} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
              <Stack spacing={2}>
              
                 <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={12} md={12}>
              
                 <Mypara>Geetron R&D  is well equipped with a
unique development process, helping the clients to
fulfill their ideas and requirements


                  </Mypara>
                  <br></br>
                  <Mypara> The Services offered by Geetron mainly include Systems
Design a Engineering, Equipment Installation and
Commissioning including Support for On Board
Systems, Maintenance of Electronic and Electrical
Equipments, Component level Electronic Card Repair
and Re-Engineering/ Obsolescence Management, PLC
Programming and System Commissioning and Systems
Integration Activities.


                  </Mypara>
                  <br></br>
                  <Mypara>
                  Our software team is expertised in developing low-level device drivers and board support packages. We can integrate internet connectivity for any device using Wifi , Ethernet or GPRS. We also integrate Bluetooth , Zigbee, CAN, MODBUS and LoRa to the application software. We also   develop a touch screen HMI . We do scripting in python and Php for web applications like data   logging and gps tracking.
            
                 </Mypara>
                 <br></br>
                  </Grid>
                
                  </Grid>
              </Stack>
            </div>
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      </MyGrid>
      <MyDivider/>
      <MyGrid container spacing={2} >
      <Grid  item  xs={12}  sm={6} md={4}>
      <Mypara>
               <b>Our major Services</b>
            
               </Mypara>
                 <Mypara>
                   <ul>
                     <li>Electronic Design, Manufacturing, Products and Systems Integration Services </li>
                     <li>Prototyping, Sourcing, Turnkey Manufacturing and Support Services</li>
                     <li> Prototyping, Sourcing, Turnkey Manufacturing and Support Services</li>
                     <li>Design and Development of Embedded Products / Systems/FPGA based Systems</li>
                     <li> Component level Hardware Design Development and re-engineering.</li>
                     <li> Software Development for Tablets and PCs</li>
                     <li> Pcb Designing and Prototyping..</li>
                   </ul>

</Mypara>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={4}>
                  <Mypara>
               <b>Hardware Design and Development</b>
           
               </Mypara>
               <br></br>
                 <Mypara>  Our digital design experience includes system-level, board-level and FPGA-Level design. The  the hardware team consists of the hardware engineers, supported by the PCB, Reliability andRegulatory Compliance Engineers. We can integrate communication like Wifi, Bluetooth, Lora, CAN, RS232, RS485, 12C, SPI, TCP IP etc to any device. Which helps customers with flexible connectivity  solutions.

</Mypara>
                  </Grid>
                  </MyGrid>
      </Stack>

 

  );
}

export default App;
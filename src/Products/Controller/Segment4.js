import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Switch/images/mechanical.png'
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
          <p>DALI</p>
        </div>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
          
              
             
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>Features</b>
                  <ul>
                  <li>Programmable dali controller</li>
                  <li>Built inn micro processor</li>
                  <li>Address setting switch preset inside</li>
                  
                  </ul>
                  </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
               <b>Specification</b>
                  <ul>

                   <li>Supply: 150-240V 50 50Hz 0.25A</li>
                    <li>Output:<ul>
                    <li>Dali with power</li>
                      <li>1 No NC Relay</li>
                      <li>4 No Relay</li>
                      <li>4 Analog 0-10V Output</li>
                      </ul></li>
                    <li>Input: 9 dry contact input</li>
                    <li>Interface: RS485 Modbus RTU </li>
                    <li>Working temperature: -20~+70℃</li>
                    <li>Mechaincal Life: 100000 times</li>
                    
                  
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
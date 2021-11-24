import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Locks/images/locks.jpg'
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
          <p>RFID Localised/Centralised </p>
         
        </div>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
          
              
             
                <Grid container direction="row" spacing={0}>
               
                  <Grid item  xs={12}  sm={12} md={12}>
                  <p>
                  <b>Specifications</b>
                  <ul>

                    <li>Unlock method: RFID,Key</li>
                    <li> Power Supply:	 4pcs AAA Alkaline Batteries, 12-18 months duration </li>
                    <li>Working temperature: -20~+70℃</li>
                    <li>  Working Humidity	 20%-90%RH</li>
                  </ul>
                  </p>
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
import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Switch/images/touchswitch.jpg'
import { Typography, Grid, Stack,Box ,Hidden} from '@mui/material';

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
        <Hidden xsUp>
      <MypicGrid container xs={12} md={4}><img src={img} height='300' alt='img'/></MypicGrid>
     
          </Hidden>
    
    
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
          <div data-aos="flip-left">
          <p>Master Loop Controller</p>
        </div>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
             

              
                     <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>Features</b>
                  <ul>
                  <li>ID setting switch present inside</li>
                  <li>MODERN & ARTISTIC DESIGN</li>
                    <li>GREAT STANDARD</li>
                    <li>EASY INSTALLATION</li>
                    <li>SAFETY PROTECTION</li>
                    <li>OUR SERVICES</li>
                  
                  </ul>
               </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
               <b>Specification</b>
                  <ul>

                   <li>Supply: 230V AC 50 50Hz</li>
                    <li>Output:<ul>
                      <li>8A No Relay-2 Output</li>
                      <li>4 Loop sense input</li>
                      <li>Slave reset Switch</li>
                      </ul></li>
                  
                    <li>Interface: RS485 Modbus RTU </li>
                    <li>Working temperature: -20~+70℃</li>
                    
                  
                  </ul></p>
                  </Grid>
                  </Grid>
               
               
            </div>
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      
      <Hidden mdDown>
      <MypicGrid container xs={12} md={4}><img src={img} height='300' alt='img'/></MypicGrid>
     
          </Hidden>
    
      </MyGrid>
      </Stack>

 

  );
}

export default App;
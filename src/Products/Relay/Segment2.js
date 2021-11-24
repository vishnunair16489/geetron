import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Switch/images/capswitch.jpg'
import { Typography, Grid, Stack,Box } from '@mui/material';
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
          <p>7 Channel latching relay </p>
          <p>model No: GLCS48507L </p>
        </div>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
          
              
             
                <Grid container direction="row" spacing={0}>
               
                  <Grid item  xs={12}  sm={12} md={12}>
                  <p>
                  <b>Specifications</b>
                  <ul>

                    <li>Supply 24V DC 500mA</li>
                    <li>Output 7 latching relay </li>
                    <li>Working temperature: -20~+70℃</li>
                    <li> Mechanical override</li>
                    <li>communication RS485/Modbus RTU</li>
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
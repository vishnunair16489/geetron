import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Timmer/images/relay.png'
import { Grid, Stack,Box } from '@mui/material';
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
      
      <MypicGrid container xs={12} md={4}><img src={img} height='200' alt='img'/></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
          <div data-aos="flip-left">
          <p>AC Timmer</p>
        </div>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
          
              
             
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>Features</b>
                  <ul>
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
                  <b>Specifications</b>
                  <ul>

                    <li>Supply
                      <ul>
                        <li>Max Voltage: 150V-220V/50Hz 0.25A</li>
                      </ul>
                    </li>
                    <li>OutPut
                      <ul>
                      <li>Max Current: 20A latching relay 2</li>
                    <li>Working temperature: -20~+70℃</li>
                    <li>In-built wifi server</li>
                    <li>Factory Programmed</li>
                    <li>Sun Timmer</li>
                      </ul>
                    </li>
                    <li>Interface
                      <ul>
                      <li>Wifi http/Mqtt/Telnet</li>
                      </ul>
                    </li>
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
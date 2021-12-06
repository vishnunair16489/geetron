import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Dashboard/images/dashboardright.jpg'

import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'contain',
  backgroundRepeat:'no-repeat',
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

    textAlign: 'justify',
  fontFamily: 'SourceSansPro',
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
        <MyGrid container spacing={0} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
          
              <Stack spacing={2}>
              <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Mypara>An IoT dashboard is a user interface that allows users to connect, monitor, and interact in real-time with IoT-connected devices. Varies Ui elements like graphs charts and other tools can be used to fetch various information. Visualization of your device data and connected device information can be managed using an IoT dashboard</Mypara>
              </div>
               <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="300" >
                <Mypara>Customizing of dashboard without altering the core functionality of the IoT platform makes IoT dashboard easy to use along with real-time upgrades. Sending and retrieving data in real-time from connected devices can be done using Dashboard. Graphical data representation, reporting, analysis are some of the basic features that are included inside the Dashboard.</Mypara>
                </div>
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                <Mypara>
                <p> <b>Our Features:</b>
                  <ul>
                  <li>Design custom IoT dashboards</li>
                  <li>Manage user access and editing rights</li>
                  <li>Integrated advanced IoT analytics visualization, analytics rules, and smart alerts</li>
                  <li>Pre-configured IoT dashboard templates </li>
                  <li>Personalized dashboard by adjusting  the color scheme, adding your logo, and tweaking other UI elements</li>
                
                  
                  </ul>
                  </p>
                  </Mypara>
                  </div>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <Mypara>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="500" >
                  <p>
               <b>Benefits</b>
               <p>Geetrons highly customizable dashboard gives you insight information about all of the key metrics </p>
                  <ul>

                    <li>Real-time monitoring </li>
                    <li>Track device status and location </li>
                    <li>Seamlessly adding new devices</li>
                    <li>Managing device configuration and credentials</li>
                    <li>Dispatch commands</li>
                    <li>Cloud software updation</li>
                    <li>Analyze device data</li>
                    <li>Set up smart alerts </li>
                    
                  
                  </ul></p>
                  </div>
                  </Mypara>
                  </Grid>
                  </Grid>
              </Stack>
          
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
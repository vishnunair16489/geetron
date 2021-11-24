import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Dashboard/images/dashboard.png'

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
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 10px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))


const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
    marginLeft: "15px",
  },
   [theme.breakpoints.down("md")]: {
    marginTop: "60px",
    marginLeft: "15px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
    marginLeft: "15px",
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
              <MyStackfirst spacing={2}>
              
                <Mypara>An IoT dashboard is a user interface that allows users to connect, monitor, and interact in real-time with IoT-connected devices. Varies Ui elements like graphs charts and other tools can be used to fetch various information. Visualization of your device data and connected device information can be managed using an IoT dashboard</Mypara>
                <Mypara>Customizing of dashboard without altering the core functionality of the IoT platform makes IoT dashboard easy to use along with real-time upgrades. Sending and retrieving data in real-time from connected devices can be done using Dashboard. Graphical data representation, reporting, analysis are some of the basic features that are included inside the Dashboard.</Mypara>
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>Our Features:</b>
                  <ul>
                  <li>Design custom IoT dashboards</li>
                  <li>Manage user access and editing rights</li>
                  <li>Integrated advanced IoT analytics visualization, analytics rules, and smart alerts</li>
                  <li>Pre-configured IoT dashboard templates </li>
                  <li>Personalized dashboard by adjusting  the color scheme, adding your logo, and tweaking other UI elements</li>
                
                  
                  </ul>
                  </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
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
                  </Grid>
                  </Grid>
              </MyStackfirst>
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
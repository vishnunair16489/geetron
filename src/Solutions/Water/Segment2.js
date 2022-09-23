import React from 'react'
import { styled } from '@mui/material/styles';
import smartimg from './images/irrigationpc.png';
import smartimg1 from './images/irrigationsmart.png';
import { Divider, Typography, Grid, Stack,Box,Hidden } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  
  backgroundSize:'cover',
  height:'300px',
  [theme.breakpoints.down("md")]: {
  
    backgroundImage: `url(${smartimg1})`,
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    backgroundImage: `url(${smartimg})`,
  },

  
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
  textAlign:'justify',
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 10px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))


const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  padding:'0px 15px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
   
  },
  
  

}))

const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="right">Why we developed GIS?</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
        <Hidden mdUp>
    
        
     
    <MypicGrid container xs={12} md={4}></MypicGrid>
    
        </Hidden>
    
      <MyGrid item xs={12} md={6}>
   
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
          
              <MyStackfirst spacing={0}>
              <div data-aos="fade-right"  data-aos-easing="ease-out-quart" >
                <Mypara>We have developed an IoT wireless irrigation solution, which addresses the issues of mobility and affordability for customers. We use the latest ultra-long-range radio communication to eliminate all expensive in-field wiring. Our solar-powered watering stations are environment friendly and maintenance-free. In the backbone, we have a full-scale industrial irrigation controller, including access to the IoT cloud for the controller, intelligence, alarms, and weather forecast through mobile and web apps.
                </Mypara>
                </div>
                <Mypara>
                <div data-aos="fade-right"  data-aos-easing="ease-out-quart" data-aos-delay="200" >
                The future of irrigation is now with wireless irrigation systems by using the latest radio technology, multiple sensors connected to the cloud platform. Every water valve is controlled without any wires and runs on solar power. It Saves 50% of water, increases crop yield by 30%, and saves hundreds of work hours. Our irrigation system controls electrically operated valves from the central computer. Geetron Wireless Irrigation Controller uses wireless two-way communication to open and close valves. ﻿The solution consists of several parts – Wireless Irrigation Controller, Cloud-Based Control, and Monitoring.
</div></Mypara>
              </MyStackfirst>
        
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
     
    
      <Hidden mdDown>
    
        
     
    <MypicGrid container xs={12} md={4}></MypicGrid>
    
        </Hidden>
    
      </MyGrid>
      </Stack>

 

  );
}

export default App;
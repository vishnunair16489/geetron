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
              
                 <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>IoT App Development</b>
                 <p>We develop Custom IoT software for mobile, and browser-based applications used for controlling and fetching data from IoT devices.</p>

                  <p> A centralized Dashboard makes it easy to enable and disable devices, set sensor triggers, and control other settings for all integrated systems.</p>
                 
                  
                  </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
               <b>IoT Database Solutions</b>
            
                 </p>
                 <p>We develop and customize cloud-hosted and localized  NoSQL or SQL databases that are error and bugs free, consistently available, and intelligently distributed for optimal scalability. 

</p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
               <b>Seamless Networking Solutions</b>
            
                 </p>
                 <p>We have developed a custom API that allows wireless and smart devices to be discovered over Wi-Fi networks, RFID, LAN, LoRaWAN, BLE, and Bluetooth networks.

</p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
               <b>Broad IoT/M2M Connectivity
</b>
            
                 </p>
                 <p>Our custom IoT development services include web service and API integrations services for all popular IoT/M2M architectures, various techniques. This helps facilitates bi-directional JSON and XML communication between systems.

</p>
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
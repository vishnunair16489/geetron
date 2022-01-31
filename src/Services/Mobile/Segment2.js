
import { styled } from '@mui/material/styles';
import segment2img from '../Mobile/images/mobiledevelpoemntimg2.jpg'

import { Divider, Typography, Grid, Stack,Box } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'contain',
  backgroundRepeat:'no-repeat',
  height:'350px',
 

  
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


  textAlign:'justify',
  fontFamily: 'SourceSansPro',
  padding: "0px 20px",
 
  [theme.breakpoints.up("md")]: {
   
   
    marginTop: "0px",
  },
  
 

}))




const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="right">Mobile Application Development</MyDivider>
        </div>
        <MyGrid container spacing={2} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
   
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
           
              <Stack spacing={2}>
              
                 <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Mypara> <b>IoT App Development</b>   </Mypara>
              
                 <Mypara>We develop Custom IoT software for mobile, and browser-based applications used for controlling and fetching data from IoT devices.</Mypara>
</div>
<div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                  <Mypara> A centralized Dashboard makes it easy to enable and disable devices, set sensor triggers, and control other settings for all integrated systems.</Mypara>
                 </div>
                  
               
                  <br></br>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}> 
                   <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="300" >
                  <Mypara>
                
               <b>IoT Database Solutions</b>
            
                 </Mypara>
                 <Mypara>We develop and customize cloud-hosted and localized  NoSQL or SQL databases that are error and bugs free, consistently available, and intelligently distributed for optimal scalability. 

</Mypara>
</div>
<br></br>
                  </Grid>
               
                  <Grid item  xs={12}  sm={6} md={6}>  
                   <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Mypara>
               
               <b>Seamless Networking Solutions</b>
            
                 </Mypara>
                 <Mypara>We have developed a custom API that allows wireless and smart devices to be discovered over Wi-Fi networks, RFID, LAN, LoRaWAN, BLE, and Bluetooth networks.

</Mypara>
</div>
<br></br>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="500" >
                  <Mypara>
               <b>Broad IoT/M2M Connectivity
</b>
            
                 </Mypara>
                 <Mypara>Our custom IoT development services include web service and API integrations services for all popular IoT/M2M architectures, various techniques. This helps facilitates bi-directional JSON and XML communication between systems.

</Mypara>
</div>
<br></br>
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
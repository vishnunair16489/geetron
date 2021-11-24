import React from 'react'
import { styled } from '@mui/material/styles';
import Tracker1 from '../Tracking/images/tracker.png';
import Tracker2 from '../Tracking/images/tracker3.png';
import CardContent from '@mui/material/CardContent';
import {  Divider, Typography, Grid, Stack,Box  } from '@mui/material';

const MyGrid = styled(Grid)(({ theme }) => ({
 
  alignItems: "flex-start",
  justifyContent: "center",



}));

const Header = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  color: '#1268B3',
  textAlign: 'center',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  


}));
const MyStack = styled(Stack)(({ theme }) => ({

  maxWidth: "1200px",

}));
const Mytext = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'left',
  color: '#1268B3',
  fontWeight: 'bold',
  fontFamily: 'SourceSansPro'
}));
const Mypara = styled(Typography)(({ theme }) => ({

  fontSize: '0.9em',
  textAlign: 'left',
 
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  [theme.breakpoints.down("xs")]: {
    width:'600px',
   },
    [theme.breakpoints.up("md")]: {
    
    alignItems: "center",
    justifyContent: "center",
  
   },
}))


const MyCard = styled(Typography)(({ theme }) => ({

 
   backgroundColor:'white ',
   [theme.breakpoints.down("md")]: {
 
   alignItems: "center",
   justifyContent: "center",

 
  },

}))

const App = () => {
  return (

  
        <MyGrid container>

          <MyStack spacing={2}>
            <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
              <Header textAlign="center">Models </Header>
            </div>
          
            <Box sx={{ flexGrow: 1 }}>
              <Grid container   justifyContent="center"  alignItems="flex-start" spacing={5}>
                <Grid  item xs={12} md={6} >
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
                    <MyCard >
                      <img
                      
                        height="200"
                        src={Tracker1}
                        alt="green iguana"  
                      />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                         Gps Tracker Basic
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                      <li>High precision GPS/GLONASS tracking device</li>
                            <li> Weatherproof and ultra-rugged IP67 Housing with compact and ergonomic design</li>
                            <li>Powered by 3xAAA batteries with up to 3 years battery life</li>
                            <li>Optional Collar Housing available for securing device to animals</li>
                            <li>Accelerometer for smart movement based tracking</li>
                           
                          
                        </ul>
                        </Mypara>
                      </CardContent>
                    
                    </MyCard>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={6} >
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                    <MyCard>
                    <img
                      
                      height="200"
                      src={Tracker2}
                      alt="green iguana"  
                    />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                        Gps Tracker Stanadrd
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                  
                            <li>High precision GPS/GLONASS tracking device</li>
                            <li>Hardwired to permanent power for real-time tracking</li>
                            <li>Internal backup battery in case of loss of power or tampering</li>
                            <li>Built-in buzzer for in-cab alerts</li>
                            <li>1 x Analog Input, 6 x Digital Inputs, 1 x Switched Ground Digital Output, 1 x Ignition Digital Input, Switched Power Out</li>
                            <li>Configure iButtons, RFID readers and Wiegand interface for Driver ID</li>
                            <li> Accident and rollover detection, speeding, harsh braking, and more</li>
                            <li>Bluetooth 5.0 Gateway for tagged asset management and sensor monitoring</li>
                            <li>RS-232 Interface to connect optional iridium edge module or interface with controllers and sensors</li>
                        </ul>            
                        </Mypara>
                         </CardContent>
                     
                    </MyCard>
                  </div>
                  </Grid>
                
              </Grid>
            </Box>

          </MyStack>

        </MyGrid>
    

  );
}

export default App;
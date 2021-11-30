import React from 'react'
import { styled } from '@mui/material/styles';
import Basic from '../Ghomes/images/smarthswitch.png'
import Standard from '../Ghomes/images/standard.png'
import Pro from '../Ghomes/images/pro.png'
import CardContent from '@mui/material/CardContent';
import {  Divider, Typography, Grid, Stack,Box  } from '@mui/material';

const MyGrid = styled(Grid)(({ theme }) => ({
 
  padding:'40px 10px',
  background:'#82b1ff',
  justifyContent: "center",
  alignItems: "flex-start", 
 

}));
const MypicGrid = styled(Grid)(({ theme }) => ({

 
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
    alignItems: "flex-end", 
   [theme.breakpoints.up("md")]: {
  
    justifyContent: "center",
    alignItems: "center", 
  },

  [theme.breakpoints.up("md")]: {
   
    justifyContent: "center",
    alignItems: "center", 
  },

 
  }}));

const Header = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
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
  minWidth: '10em',
  color: 'white',
  fontWeight: 'bold',
  fontFamily: 'SourceSansPro'
}));
const Mypara = styled(Typography)(({ theme }) => ({

  fontSize: '0.9em',
  textAlign: 'left',
  color:'white',
 
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  [theme.breakpoints.down("xs")]: {
    width:'600px',
   },
    [theme.breakpoints.up("md")]: {
      maxWidth: '300px',
    alignItems: "center",
    justifyContent: "center",
  
   },
}))


const MyCard = styled(Typography)(({ theme }) => ({

 
   [theme.breakpoints.down("md")]: {
    maxWidth:'600px',
    mimWidth:'600px',
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
              <Grid container   justifyContent="center"  alignItems="center" spacing={5}>
                <Grid   item  xs={12} sm={6} md={4}>
               
                    <MyCard >
                    <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-quart" >
                    <MypicGrid  container   justifyContent="center"  alignItems="center">
                      <img src={Basic} width='150' alt='img'/>
                      </MypicGrid>
                      </div>
                      <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="100" >
                      <CardContent>
                        <Mytext gutterBottom component="div">
                         LITE
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wifi/RF Controlled</li>
                            <li>Capacative Touch</li>
                            <li>Standard AC Thermostat (FCU)</li>
                          
                        </ul>
                        </Mypara>
                      </CardContent>
                     </div>
                    </MyCard>
                 
                  </Grid>
                  <Grid item  xs={12} sm={6} md={4}>
                 
                
                    <MyCard>
                    <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="300" >
                    <MypicGrid  container   justifyContent="center"  alignItems="center">
                      <img src={Standard} width='140' alt='img'/>
                      </MypicGrid> 
                        </div>
                      <CardContent> 
                      
                         <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                        <Mytext gutterBottom component="div">
                          Standard
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wifi/RF Controlled</li>
                            <li>Touch Screen</li>
                            <li>Standard AC Thermostat(FCU)</li>
                          
                        </ul>            
                        </Mypara>
                        </div>
                         </CardContent>
                                      </MyCard>
                
                  </Grid>
                  <Grid item  xs={12} sm={6} md={4}>
                 
                
                    <MyCard >
                    <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="600" >
                    <MypicGrid  container   justifyContent="center"  alignItems="center">
                    
                      <img src={Pro} width='150' alt='img'/>
                      </MypicGrid> 
                       </div>
                      <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="800" >
                      <CardContent>
                        <Mytext gutterBottom component="div">
                          Pro
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wired switch (Modbus)</li>
                            <li>Centralized Controller</li>
                            <li>Communicating thermostat</li>
                        </ul>     
                        </Mypara>
                      </CardContent>
                      </div>
                    </MyCard>
                
                </Grid>
              </Grid>
            </Box>

          </MyStack>

        </MyGrid>
    

  );
}

export default App;
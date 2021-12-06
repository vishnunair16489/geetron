import React from 'react'
import { styled } from '@mui/material/styles';
import Airsensor from '../Industry/images/airsensor.png';
import Co2 from '../Industry/images/co2.png';
import Waterquality from '../Industry/images/waterquality.png'
import CardContent from '@mui/material/CardContent';
import {  Divider, Typography, Grid, Stack,Box  } from '@mui/material';

const MyGrid = styled(Grid)(({ theme }) => ({
 
  alignItems: "center",
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

 

}));
const Mytext = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'left',
  color: '#1268B3',
  fontWeight: 'bold',
  fontFamily: 'SourceSansPro'
}));



const MyCard = styled(Typography)(({ theme }) => ({

 
   backgroundColor:'balck ',
   [theme.breakpoints.down("md")]: {
 
   alignItems: "center",
   justifyContent: "center",

 
  },

}))

const App = () => {
  return (

  
        <MyGrid container>

          <MyStack spacing={5}>
            <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
              <Header textAlign="center">Prducts </Header>
            </div>
          
            <Box sx={{ flexGrow: 1 }}>
              <Grid container   justifyContent="center"  alignItems="center" spacing={5}>
                <Grid container   justifyContent="center"  alignItems="center" item xs={12} sm={6} md={4} >
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
                    <MyCard >
                      <img
                      
                        height="200"
                        src={Airsensor}
                        alt="green iguana"  
                      />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                        Air Quality Station
                        </Mytext>
                       
                      </CardContent>
                    
                    </MyCard>
                  </div>
                  </Grid>
                  
                  <Grid container   justifyContent="center"  alignItems="center" item xs={12}  sm={6} md={4} >
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                    <MyCard>
                    <img
                      
                      height="200"
                      src={Co2}
                      alt="green iguana"  
                    />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                        Carbon Dioxide Monitor
                        </Mytext>
                      
                         </CardContent>
                     
                    </MyCard>
                  </div>
                  </Grid>
                  <Grid container   justifyContent="center"  alignItems="center" item xs={12}  sm={6} md={4} >
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                    <MyCard >
                    <img
                      
                      height="200"
                      src={Waterquality}
                      alt="green iguana"  
                    />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                        Water Quality monitoring
                        </Mytext>
                     
                      </CardContent>
                     
                    </MyCard>
                  </div>
                  
                </Grid>
                <Grid container   justifyContent="center"  alignItems="center" item xs={12}  sm={6} md={4} >
                 
                
                 
               </Grid>
              </Grid>
            </Box>

          </MyStack>

        </MyGrid>
    

  );
}

export default App;
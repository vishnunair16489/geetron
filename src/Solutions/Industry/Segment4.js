import React from 'react'
import { styled } from '@mui/material/styles';
import Solar from '../Water/images/solar.png';
import Wifi from '../Water/images/wifi.png';
import Home from '../Water/images/home.jpg'
import CardContent from '@mui/material/CardContent';
import { Button, Divider, Typography, Grid, Stack,Box  } from '@mui/material';

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

          <MyStack spacing={2}>
            <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
              <Header textAlign="center">Prducts </Header>
            </div>
          
            <Box sx={{ flexGrow: 1 }}>
              <Grid container   justifyContent="center"  alignItems="center" spacing={0}>
                <Grid  item xs={12} md={4} >
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
                    <MyCard >
                      <img
                      
                        height="200"
                        src={Home}
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
                  <Grid item xs={12} md={4} >
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                    <MyCard>
                    <img
                      
                      height="200"
                      src={Wifi}
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
                  <Grid item xs={12} md={4} >
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                    <MyCard >
                    <img
                      
                      height="200"
                      src={Solar}
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
                <Grid item xs={12} md={4} >
                 
                 <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                   <MyCard >
                   <img
                     
                     height="200"
                     src={Solar}
                     alt="green iguana"  
                   />
                     <CardContent>
                       <Mytext gutterBottom component="div">
                      IoT Box
                       </Mytext>
                    
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
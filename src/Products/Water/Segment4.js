import React from 'react'
import { styled } from '@mui/material/styles';
import Solar from '../Water/images/solar.png';
import Wifi from '../Water/images/wifi.png';
import Home from '../Water/images/home.jpg'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Divider, Typography, Grid, Stack,Box  } from '@mui/material';

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
                         GIS Home
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wifi iriigation  Controlled</li>
                            <li>Smart App</li>
                            <li>8 channel 4 schedule controller</li>
                            <li>24V coil voltage output</li>
                            <li>Season mode water percentage</li>
                            <li>mannual ******</li>
                          
                        </ul>
                        </Mypara>
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
                          GIS Pro
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wireless RF connectivity</li>
                            <li>Cloud Interration</li>
                            <li>16 channel controller 4 schedule</li>
                            <li>24V coil voltage output</li>
                            <li>Mannual override</li>
                            <li>weekend mode</li>
                        </ul>            
                        </Mypara>
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
                         GIS Pro Solar
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wireless RF connectivity</li>
                            <li>1 channel controller 4 schedule</li>
                            <li>9V lacking coil output</li>
                            <li>Inbuilt 3.7V lipo battery </li>
                           
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
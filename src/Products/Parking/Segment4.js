import React from 'react'
import { styled } from '@mui/material/styles';
import Solar from '../Water/images/solar.png';
import Wifi from '../Water/images/wifi.png';
import Home from '../Water/images/home.jpg'
import CardContent from '@mui/material/CardContent';
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
                        PArking Counter system
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Loop Sensing</li>
                            <li>Display Single</li>
                            <li>Display Tower</li>
                           
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
                        Parking management System
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Parking Lot Senser</li>
                            <li>Display Single</li>
                            <li>Display Tower</li>
                          
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
                        Parking Billing System
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Billng System/kisok</li>
                            <li>Token Printer</li>
                            <li>Barrier Controller</li>
                           
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
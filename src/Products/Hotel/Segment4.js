import React from 'react'
import { styled } from '@mui/material/styles';
import Solar from '../Water/images/solar.png';
import Wifi from '../Water/images/wifi.png';
import Home from '../Water/images/home.jpg'

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Divider, Typography, Grid, Stack,Box  } from '@mui/material';

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
const MyHeader = styled(Divider)(({ theme }) => ({

  fontSize: '1.0em',
  color: '#1268B3',
  textAlign: 'center',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  
  [theme.breakpoints.down("xs")]: {
    fontSize: '0.5em',
   },
    [theme.breakpoints.up("md")]: {
    
      fontSize: '1.0em',
  
   },

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
              <Header textAlign="center">Packages </Header>
            </div>
         
            <Box sx={{ flexGrow: 1 }}>
              <Grid container   justifyContent="center"  alignItems="flex-start" spacing={5}>
                <Grid  item  xs={12} sm={4} md={4}>
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
                    <MyCard >
                    <CardMedia
                        component="img"
                        image={Home}
                        alt="green iguana"  
                      />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                        Grms Lite
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>DND</li>
                            <li>MUR</li>
                            <li>Bell</li>
                            <li>Welcome Light</li>
                         
                          
                        </ul>
                        </Mypara>
                      </CardContent>
                    
                    </MyCard>
                  </div>
                  </Grid>
                
                  <Grid item xs={12} sm={4} md={4}>
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                    <MyCard >
                    <CardMedia
                        component="img"
                        image={Solar}
                        alt="green iguana"  
                      />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                        Grms Std
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                        <li>DND</li>
                            <li>MUR</li>
                            <li>Bell</li>
                            <li>Welcome Light </li>
                            <li>AC Controls</li>
                           
                        </ul>     
                        </Mypara>
                      </CardContent>
                     
                    </MyCard>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                 
                 <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                   <MyCard>
                   <CardMedia
                        component="img"
                        image={Wifi}
                        alt="green iguana"  
                      />
                     <CardContent>
                       <Mytext gutterBottom component="div">
                       Grms Pro
                       </Mytext>
                       <Mypara color="text.secondary">
                       <ul>
                       <li>DND</li>
                           <li>MUR</li>
                           <li>Bell</li>
                           <li> Welcome Light .</li>
                           <li>AC Controls</li>
                           <li>Lock (Server/Card)</li>
                           <li>Alexa Integration</li>
                       </ul>            
                       </Mypara>
                        </CardContent>
                    
                   </MyCard>
                 </div>
                 </Grid>
              </Grid>
            </Box>
            <div data-aos="flip-left" data-aos-easing="ease-out-quart" >
       </div>
          </MyStack>

        </MyGrid>
    

  );
}

export default App;
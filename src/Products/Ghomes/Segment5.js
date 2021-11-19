import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Divider, Typography, Grid, Stack,Box  } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyGrid = styled(Grid)(({ theme }) => ({
 
   
    direction:"row",
    justifyContent:"center",
    alignItems:"flex-start",
  
  
  }));
  
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
        maxWidth: '600px',
      alignItems: "center",
      justifyContent: "center",
    
     },
  }))
  

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
 
    <MyGrid  container>

    <MyStack spacing={2}>
      <div data-aos="flip-left" data-aos-easing="ease-out-quart" >
        <Header textAlign="center">Add-Ons </Header>
      </div>
     
      <Box sx={{ flexGrow: 1 }}>
        <Grid container   justifyContent="center"  alignItems="flex-start" spacing={5}>
          
            <Grid item xs>
           
            <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="200" >
            <Mytext gutterBottom component="div">
            Pro Plus
                  </Mytext>
                  <Mypara color="text.secondary">
                  <ul>
                    <li>G-Homes Integration with AMX, Creston or Savant </li>
                    <li>Bacnet AC Integration  </li>
                    <li>Android/iPad user console   </li>
                    <li>Tv Remote intergration </li>               

                    
                </ul>
                  </Mypara>
            </div>
            
            </Grid>
            <Grid item xs>
           
           <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="300" >
           <Mytext gutterBottom component="div">
           Audio
                 </Mytext>
                 <Mypara color="text.secondary">
                 <ul>
                   <li>Aadhan Integrated BGM</li>
                   <li>Google speaker Integration</li>
                   <li>G-Homes Wifi speaker</li>
                   <li>Air-play Integration</li>               

                   
               </ul>
                 </Mypara>
           </div>
           
           </Grid>
           <Grid item xs>
           
           <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="400" >
           <Mytext gutterBottom component="div">
           Security
                 </Mytext>
                 <Mypara color="text.secondary">
                 <ul>
                   <li>Smart Door Lock</li>
                   <li>Alarm System </li>
                   <li>Winows door Gate </li>
                   <li>Gate opening and closing Cnontroller</li>               

                   
               </ul>
                 </Mypara>
           </div>
           
           </Grid>
           <Grid  item xs>
            <div data-aos="flip-left" data-aos-easing="ease-out-quart" data-aos-delay="500">
            
                  <Mytext gutterBottom component="div">
                  Smart Plus
                  </Mytext>
                  <Mypara color="text.secondary">
                  <ul>
                    <li>Smart Door Bell</li>
                    <li>Nest Thermostat integration</li>
                    <li>Smart Camera Integration</li>
                    
                </ul>
                  </Mypara>
             
            </div>
            </Grid>
        </Grid>
      </Box>

    </MyStack>

  </MyGrid>
  );
}

export default App;
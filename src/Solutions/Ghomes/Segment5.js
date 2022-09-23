import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Divider, Typography, Grid, Stack } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyGrid = styled(Grid)(({ theme }) => ({
 
    justifyContent:"center",
    alignItems:"center",
  
  
  }));
  
  const Header = styled(Divider)(({ theme }) => ({
  
    fontSize: '1.5em',
    minWidth: '10em',
    color: '#1268B3',
    textAlign: 'center',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    margin: "50px 0px",
  
  }));
  const MyStack = styled(Stack)(({ theme }) => ({
  
 
  
  }));
  const Mytext = styled(Typography)(({ theme }) => ({
  
    fontSize: '1.0em',
    color: '#1268B3',
    fontWeight: 'bold',
    fontFamily: 'SourceSansPro',
    padding:'0 20px'
  }));
  const Mypara = styled(Typography)(({ theme }) => ({
  
    fontSize: '0.9em',  
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    padding:'0 20px'
  
 
  }))
  

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
 
    <MyGrid  container>

    <MyStack spacing={0}>
      
    <div data-aos="flip-left" data-aos-easing="ease-out-quart" >
        <Header textAlign="center">Add-Ons </Header>
      </div>
     
        <Grid container   justifyContent="center"  alignItems="center" >
          
            <Grid  container   justifyContent="center"  alignItems="center"  item xs={12} sm={6} md={3}>
           
         
            <Mytext width='350px' >
            <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="200" >
            Pro Plus
                
                  <Mypara color="text.secondary">
                  <ul>
                    <li>G-Homes Integration with AMX, Creston or Savant </li>
                    <li>Bacnet AC Integration  </li>
                    <li>Android/iPad user console   </li>
                    <li>Tv Remote integration </li>               

                    
                </ul>
                </Mypara>
               </div>
                </Mytext>
          
            
            </Grid>
            <Grid container   justifyContent="center"  alignItems="center" item  xs={12} sm={6} md={3}>
           
         
           <Mytext width='350px'>
           <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="300" >
           Audio
                
                 <Mypara color="text.secondary">
                 <ul>
                   <li>Aadhan Integrated BGM</li>
                   <li>Google speaker Integration</li>
                   <li>G-Homes Wifi speaker</li>
                   <li>Air-play Integration</li>               

                   
               </ul>
               </Mypara>
               </div>
                </Mytext>
           
           
           </Grid>
           <Grid container  justifyContent="center"  alignItems="center" item  xs={12} sm={6} md={3}>
           
        
           <Mytext width='350px'>
           <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="400" >
           Security
              
                 <Mypara color="text.secondary">
                 <ul>
                   <li>Smart Door Lock</li>
                   <li>Alarm System </li>
                   <li>Windows door Gate </li>
                   <li>Gate opening and closing Controller</li>               

                   
               </ul>
              </Mypara>
               </div>
                </Mytext>
          
           
           </Grid>
           <Grid container   justifyContent="center"  alignItems="center" item  xs={12} sm={6} md={3}>
       
            
                  <Mytext width='350px'>
                  <div data-aos="flip-left" data-aos-easing="ease-out-quart" data-aos-delay="500">
                  Smart Plus
                 
                  <Mypara color="text.secondary">
                  <ul>
                    <li>Smart Door Bell</li>
                    <li>Nest Thermostat integration</li>
                    <li>Smart Camera Integration</li>
                    
                </ul>
            
                  </Mypara>
                  </div>
                </Mytext>
             
           
            </Grid>
        </Grid>
        
     
     
    </MyStack>
 
      
   
  </MyGrid>
  );
}

export default App;
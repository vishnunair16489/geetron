import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

import { styled } from '@mui/material/styles';

import img from '../Controller/images/Masterloopcontroller.png'

import {Divider, Grid, Stack,Box ,Hidden} from '@mui/material';

const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 
  padding:'40px 10px',
  background:'#82b1ff'

}));
const Myp = styled('p')(({ theme }) => ({
 color:'white',
 
 fontFamily: 'SourceSansPro',
 padding:'10px',
 [theme.breakpoints.up("xs")]: {
 
   margin: "0px 20px",
 }, 
 [theme.breakpoints.up("md")]: {
  
  
   margin: "0px",
 },

}));

const MyDivider = styled(Divider)(({ theme }) => ({
  
    
  minWidth: '10em',
  color: 'white',
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
const MypicGrid = styled(Grid)(({ theme }) => ({

 
  height:'300px',
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
  const MyGridmain = styled(Grid)(({ theme }) => ({
 
    background:'#82b1ff'
  
  }));

const App = () => {
  return (

  
      <Stack>
          <MyGridmain>
        <MyDivider textAlign="left">Master Loop Controller</MyDivider>
        <MyGrid container spacing={2} >
      
       
          <Hidden mdUp>
          <div data-aos="flip-left">
        
       
      <MypicGrid container  item justifyContent= "flex-end" alignItems= "flex-end" xs={12} md={4}><img src={img} height='250' alt='img'/></MypicGrid>
      </div>
          </Hidden>
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
         
          
             

              
                     <Grid container direction="row" spacing={0}>
                    
                <Grid item  xs={12}  sm={6} md={6}> 
                <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Myp> <b>Features</b>
                <ul>
                  <li> Sync Mulitple loop interfaces</li>
                    <li>Calculate the in and out</li>
                    <li>Direct Modbus interface to LED display</li>
                    <li>Inbuilt 4 Loop sensor interface</li>
                    <li>Inbuilt power supply</li>
                    <li>Din Rail mount design </li>
                    
                  </ul>
               </Myp> 
                 </div>
                  </Grid>
               
              
                  <Grid item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Myp>
               <b>Specification</b>
               <ul>

<li>Supply: 230V AC 50 50Hz</li>
 <li>Output:8A No Relay-2 Output,4 Loop sense input,Slave reset Switch</li>
   

 <li>Interface: RS485 Modbus RTU </li>
 <li>Working temperature: -20~+70℃</li>
 

</ul></Myp> 
                  </div>
                  </Grid>
                   
                  </Grid>
               
               
          
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      
      <Hidden mdDown>
    
        
     
      <MypicGrid container  item justifyContent= "center" alignItems= "center" xs={12} md={4}>  <div data-aos="flip-left"><img src={img} height='250' alt='img'/>   </div></MypicGrid>
     
          </Hidden>
    
      </MyGrid>
      </MyGridmain>
      </Stack>

 

  );
}

export default App;
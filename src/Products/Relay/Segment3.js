import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Switch/images/touchswitch.png'

import {Divider, Grid, Stack,Box ,Hidden,Typography} from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 
  padding:'40px 10px',
  background:'#82b1ff'

}));

const MyDivider = styled(Divider)(({ theme }) => ({
  
    
  minWidth: '10em',
  color: '#1268B3',
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
  const Myp = styled(Typography)(({ theme }) => ({
 
    fontFamily: 'SourceSansPro',
    color:'white'
  
  }));
const App = () => {
  return (

  
      <Stack>
        <MyDivider textAlign="left">7 Channel Relay</MyDivider>
        <MyGrid container spacing={2} >
      
       
          <Hidden mdUp>
          <div data-aos="flip-left">
        
       
      <MypicGrid container xs={12} md={4}><img src={img} height='300' alt='img'/></MypicGrid>
      </div>
          </Hidden>
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
         
          
             

              
                     <Grid container direction="row" spacing={0}>
                    
               
               
              
                  <Grid item  xs={12}  sm={12} md={12}>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Myp>
               <b>Specification</b>
               <ul>

<li>Supply 100-240V AC 0.25A</li>
<li>Output 8 No relay 16A 250V </li>
<li>Working temperature: -20~+70℃</li>
<li>communication RS485</li>
</ul></Myp> 
                  </div>
                  </Grid>
                   
                  </Grid>
               
               
          
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      
      <Hidden mdDown>
      <div data-aos="flip-left">
        
     
      <MypicGrid container xs={12} md={4}><img src={img} height='300' alt='img'/></MypicGrid>
        </div>
          </Hidden>
    
      </MyGrid>
      </Stack>

 

  );
}

export default App;
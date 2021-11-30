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
const MyGridmain = styled(Grid)(({ theme }) => ({
 
  background:'#82b1ff'

}));

const Myp = styled('p')(({ theme }) => ({
 color:'white',

 fontFamily: 'SourceSansPro',
 textAlign: 'justify',
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
  

const App = () => {
  return (

  
      <Stack>
         <MyGridmain>
        <MyDivider textAlign="left">Touch Screen Switches</MyDivider>
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
                    
                <Grid item  xs={12}  sm={6} md={6}> 
                <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Myp> <b>Features</b>
                  <ul>
                  <li>Mordern & Artistic Design</li>
                    <li>Great Sstandard</li>
                    <li>Easy Installation</li>
                    <li>Safety Protection</li>
                    <li>Our Service</li>
                  
                  </ul>
               </Myp> 
                 </div>
                  </Grid>
               
              
                  <Grid item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Myp>
               <b>Specification</b>
                  <ul>

                    <li>Max. Voltage:250V</li>
                    <li>Working temperature:-25~+60℃</li>
                    <li>Max. Current:10A</li>
                    <li>Mechanical Life:100000 Times</li>
                    
                  
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
      </MyGridmain>
      </Stack>

 

  );
}

export default App;
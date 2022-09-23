import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Home from '../Hotel/images/rms.png';

import Parralex from './images/parallex.jpg'

import { styled } from '@mui/material/styles';

import { Grid, Stack, Divider,Hidden, Typography } from '@mui/material';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 
  padding:'40px 10px',
 
 
  

}));
const MyGridmain = styled(Grid)(({ theme }) => ({
 
  background: `url(${Parralex})`,
  [theme.breakpoints.down("md")]: {
  
    backgroundSize:'auto'
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    backgroundSize:'1980px 650px',
    backgroundRepeat: 'no-repeat',
  },
}));


const MyDivider = styled(Divider)(({ theme }) => ({
  
    
  minWidth: '10em',
  color: 'black',
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
  const MyP = styled(Typography)(({ theme }) => ({
 
    fontFamily: 'SourceSansPro',
   
  }));



export default function SwipeableTemporaryDrawer(props) {
  const [state, setState] = React.useState({
    bottom: true,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div data-aos="fade-up" data-aos-easing="ease-out-quart" >
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
       

      </Box>
    </div>
  );

  return (
    <div >

      <React.Fragment key={'bottom'}>
      <div data-aos="fade-up" data-aos-easing="ease-out-quart" data-aos-delay="200" >
        <SwipeableDrawer
          anchor={'bottom'}
          open={state['bottom']}
          onClose={toggleDrawer('bottom', false)}
          onOpen={toggleDrawer('bottom', true)} >
               
                <Stack>
        <MyGridmain>
        <MyDivider textAlign="left">RMS</MyDivider>
        <MyGrid container spacing={2} >
      
       
          <Hidden mdUp>
          <div data-aos="flip-left">
        
       
      <MypicGrid container xs={12} md={4}><img src={Home} height='300' alt='img'/></MypicGrid>
      </div>
          </Hidden>
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
         
          
             

              
                     <Grid container justifyContent= "flex-start" alignItems= "flex-start" direction="row" spacing={0}>
                     <Grid item xs={12} sm={6}>
                       <MyP>
                    8 Channel input
                    <ul>
                 <li>Door Sensor</li>
                 <li>PIR</li>
                 <li>Window Sensor</li>
                 <li>Manual Mode</li>
              
               </ul>
               </MyP>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <MyP>
                    4 channel 0-10V output
                    <ul>
                 <li>Cove light Dimming</li>
                 <li>Dom Light dimming</li>
                 <li>Manual Override</li>
                 <li>Reading light dimming</li>
              
               </ul>
               </MyP>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <MyP>
                    Dali Dimmer integration
                    <ul>
                 <li>Light Controlling</li>
                 <li>Light Dimming</li>
           
                 </ul>
                 </MyP>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <MyP>
                    5 Channel relay output
                    <ul>
                 <li>Door Bell</li>
                 <li>Welcome Light</li>
                 <li>Master Relay</li>
              
                 </ul>  
                 </MyP>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <MyP>
                   ModBus
                    <ul>
                 <li>Modbus Software Communication</li>
                 <li>Modbus Thermostat</li>

                 </ul>
                 </MyP>
                    </Grid>
               
              
                
                   
                  </Grid>
               
               
          
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      
      <Hidden mdDown>
      <div data-aos="flip-left">
        
     
      <MypicGrid container xs={12} md={4}><img src={Home} height='400' alt='img'/></MypicGrid>
        </div>
          </Hidden>
    
      </MyGrid>
      </MyGridmain>
      </Stack>
          {list('bottom')}  
        
        </SwipeableDrawer>
        </div>
      </React.Fragment>

    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Home from '../Hotel/images/switch.png';

import Parralex from './images/parallex.jpg'

import { styled } from '@mui/material/styles';

import { Grid, Stack, Divider,Hidden,Typography} from '@mui/material';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 
  padding:'40px 10px',
 
 
  

}));


const MyGridmain = styled(Grid)(({ theme }) => ({
 
  background: `url(${Parralex})`,
  backgroundSize:'1980px 500px',
  backgroundRepeat: 'no-repeat'
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

  const Myp = styled('p')(({ theme }) => ({
 
 
    fontFamily: 'SourceSansPro',
    textAlign: 'justify',
    color:'black',
    padding:'10px',
    [theme.breakpoints.up("xs")]: {
    
      margin: "0px 20px",
    }, 
    [theme.breakpoints.up("md")]: {
     
     
      margin: "0px",
    },
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
        <MyDivider textAlign="left">Switch</MyDivider>
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
         
          
             

              
                     <Grid container justifyContent= "center" alignItems= "flex-start" direction="row"  spacing={0}>
                    
                <Grid item  xs={12}  sm={6} md={6}> 
                <div data-aos="fade-right" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Myp> <b>Features</b>
                <ul>
              <li>Toggle Switch</li>
              <li>Capacitive touch Button Switch</li>
              <li>TouchScrenn Capacitive Touch</li>
            </ul>
               </Myp> 
                 </div>
                  </Grid>
               
              
                
                   
                  </Grid>
               
               
          
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      
      <Hidden mdDown>
      <div data-aos="flip-left">
        
     
      <MypicGrid container xs={12} md={4}><img src={Home} height='300' alt='img'/></MypicGrid>
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

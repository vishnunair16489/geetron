import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Industry/images/industrychallenges.png'
import { Divider, Typography, Grid, Stack,Box,Hidden } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
 
 
  [theme.breakpoints.down("xs")]: {
  
    height:'200px',
  }, 
  [theme.breakpoints.down("md")]: {
   
   
    height:'200px',
  },
  [theme.breakpoints.up("md")]: {
   
   
    height:'300px',
  },
  
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


const Mypara = styled(Typography)(({ theme }) => ({

  fontFamily: 'SourceSansPro',
  padding:'0px 15px',
  textAlign:'justify',
 

}))


const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
  },
   [theme.breakpoints.down("md")]: {
    marginTop: "60px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
  },
  

}))

const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="left">Industy 4.0 </MyDivider>
        </div>
        <MyGrid container spacing={0} >
        <Hidden mdUp>
    
        
     
    <MypicGrid container xs={12} md={4}></MypicGrid>
    
        </Hidden>
  
    
      <MyGrid item xs={12} md={6}>
      
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
           
              <MyStackfirst spacing={0}>
              <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" >
                <Mypara>
                  We have both software and hardware solutions for industries to automate and control devices & equipments. Our software can be  customisable according to factory needs with various analytical graphs to monitor factory operation. Our hardware is fully customisable from PCB level to reduce the production cost and to fit the client requirements<br/> <br/> 
          <b>  Features</b>
            <ul>
         
              <li>Customisable IIoT software </li>
              <li>Customisable IIoT hardware </li>
              <li>API for third party integration</li>
              <li>Wide range of IoT devices for  warehouse, cold storage, logistics and service centers</li>
              <li>Varoius communication protocols like TCP,HTTP, MQTT etc </li>
             
            </ul>
                </Mypara>
                </div>
              </MyStackfirst>
        
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      <Hidden mdDown>
    
        
     
      <MypicGrid container xs={12} md={4}></MypicGrid>
      
          </Hidden>
    
      </MyGrid>
      </Stack>

 

  );
}

export default App;
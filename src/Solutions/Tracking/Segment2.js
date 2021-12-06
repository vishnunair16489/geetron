import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Tracking/images/trackingside.jpg'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
  height:'300px',
 

  
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
  textAlign: 'justify',
  padding: '15px',
 
  
 

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
          <MyDivider textAlign="center">Features</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={4}>
  
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12 }>
         
              <MyStackfirst spacing={2}>
              <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Mypara>
                  <ul>
                  <li>High Precision GPS</li>
                  <li>Long Battery Life</li>
                  <li>Rugged & Weatherproof</li>
                  <li>Periodic or Movement-Based</li>
                  <li>Theft Recovery</li>
                  <li>Run Hour Monitoring</li>
                  <li>Preventative Maintenance</li>
                  <li>Impact Detection</li>
                  <li>Advanced Geofencing</li>
                  <li>Easy Install</li>
                  <li>Flexible Configuration</li>
                
                  </ul></Mypara>
                   </div>
              </MyStackfirst>
           
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
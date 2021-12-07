import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/waste.jpg'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'100%',
  backgroundRepeat:'no-repeat',
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

  textAlign:'justify',
  fontFamily: 'SourceSansPro',
  padding:'15px',
 
 

}))



const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="center">Waste Bin Automation</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
   
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
          <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" >
          
          
                <Mypara>We have designed an automated waste bin capable of updating bin status to an IoT dashboard. Dashboard displays the fill level of each zone which increases the time management and employee efficiency</Mypara>
                </div>
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Mypara> <b>Features</b>
                  <ul>
                    <li>Automatic alert</li>
                    <li>Route Planner</li>
                    <li>Reduces operation cost</li>
                    <li>Solar powered</li>
                  </ul>
                  </Mypara>
                  </div>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Mypara>
                  <b>Benifits</b>
                  <ul>

                    <li>Improve environmental care</li>
                    <li>Reduce traffic conjestion due to regular waste collection</li>
                    <li>Collection request on demand</li>
                    <li>Auto alert when bins are full</li>
                    <li>Delay the semi load and collect the full load </li>
                  </ul>
                  </Mypara>
                  </div>
                  </Grid>
                  </Grid>
      
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
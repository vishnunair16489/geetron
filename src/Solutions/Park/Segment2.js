import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/park.jpg'
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
  textAlign:'justify',
  padding:'15px',

  
 

}))


const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="center  ">Light Automation</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
  
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
            <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart"  >
          
              
                <Mypara>We Provide an IoT dashboard based lighting management system which is Smart and effective suitable for parks and resorts. This system is equiped with specially engineered light automation hardware and software. Connectivity of the software with the hardware can be wired or wireless.   System status, energy reading  all can be monitored in realtime using our system.
                  
                </Mypara>
                </div>
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Mypara> <b>Software Features</b>
                  <ul>
                   <li>Catagorizing lights</li>
                    <li>Catagorizing  zones </li>
                    <li>Geo tagging</li>
                    <li>Manual Control</li>
                    <li>Scheduling of lights</li>
                    <li>Secured Communition</li>
                  </ul>
                  </Mypara>
                  </div>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Mypara> <b>Hardware Features</b>
                  <ul>
                   <li>Inbuilt sun time</li>
                    <li>4 in 1 control </li>
                    <li>Modbus Master for metering</li>
                    <li>Inbuilt real time clock</li>
                    <li>Inbuilt LCD display</li>
                    <li>Wireless Communition</li>
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
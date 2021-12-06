import React from 'react'
import { styled } from '@mui/material/styles';
import ReactPlayer from 'react-player'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import parallex from '../Hotel/images/switch.mp4'
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center", 


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
 padding:'0px 15px',
 
  
 

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
          <MyDivider textAlign="right">Geetron Smart GRMS</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
      <Grid container xs={12} md={4}>
      <ReactPlayer height='300px' playing={true} loop={true} volume={0} muted url={parallex} />
     
      </Grid>
    
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
    
              <MyStackfirst spacing={0}>
              
                <Mypara>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" ><p>Geetron offers multiple packages to fit all the categories of hotels and resorts which include LITE, standard, and pro versions. Geetron GRMS controllers and devices can be seamlessly integrated with existing solutions that can be retrofitted with other controllers to cut down the cost to a minimum and hence enabling you to gain significant financial savings.</p>
                </div>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
<ul><li>Lite and Standard version  GRMS operates as stand-alone which  automates DND, MUR, Bell, and welcome light.  </li>
<li>Pro version GRMS is a complete automation solution including switches, sensors, and diming.</li>
<li>Geetron Guest management software (GMS) manages check-in and check-out using a  user-friendly graphical interface that allows the front desk operator to respond to alerts and notifications like Do not Disturb, Makeup Room, Housekeeping calls, emergencies, etc. It offers easy-to-use, scalability, and cost-effective solutions.</li>
<li>
Our intelligent AC control systems offer greater efficiency and savings by adjusting room conditions automatically using presence detectors and door detectors when guests are away and when they return. 
</li>
</ul>
</div></Mypara>
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
import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Hospital/images/hospital2.jpg'
import { Divider, Typography, Grid, Stack,Box,Hidden } from '@mui/material';

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



  textAlign:'justify',
  fontFamily: 'SourceSansPro',
  padding:'0px 15px'

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
          <MyDivider textAlign="left">Other Products</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
    
    
      <MyGrid item xs={12} md={6}>
    
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Hidden mdUp>
          <MypicGrid container xs={12} md={4}></MypicGrid>
          </Hidden>
          <Grid item  xs={12}  sm={12} md={12}>
            
              <MyStackfirst spacing={2}>
              <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Mypara><b>Nurse Calling System</b></Mypara>
                <Mypara>The nurse calling system is an innovative way to interact with the nurse in case of emergencies or discomfort felt by the patient. It guarantees the well-being of the patient in the ward. We have developed it in such a way it can be used both as a wired or  a wireless connection
                  </Mypara>
                  </div>
                <Mypara> 
                <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                  <b>Features</b>
                  <ul>
                    <li>No to minimal training for the hospital staff</li>
                    <li>Real-time data logging of the patient </li>
                  
                  </ul>
                  </div>
               </Mypara>
               
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
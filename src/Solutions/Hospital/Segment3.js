import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Ghomes/images/ghmomes.jpg'
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


  fontFamily: 'SourceSansPro',
  
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 10px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))


const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
    marginLeft: "15px",
  },
   [theme.breakpoints.down("md")]: {
    marginTop: "60px",
    marginLeft: "15px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
    marginLeft: "15px",
  },
  

}))

const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="left">Nurse Calling System</MyDivider>
        </div>
        <MyGrid container spacing={2} >
      
    
    
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Hidden mdUp>
          <MypicGrid container xs={12} md={4}></MypicGrid>
          </Hidden>
          <Grid item  xs={12}  sm={12} md={12}>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
              <MyStackfirst spacing={2}>
              
                <Mypara>The nurse calling system is an innovative way to interact with the nurse in case of emergencies or discomfort felt by the patient. It guarantees the well-being of the patient in the ward. We have developed it in such a way it can be used both as a wired or  a wireless connection
                <p> <b>Features</b>
                  <ul>
                    <li>No to minimal training for the hospital staff</li>
                    <li>Real-time data logging of the patient </li>
                  
                  </ul>
               </p>
                </Mypara>
              </MyStackfirst>
            </div>
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
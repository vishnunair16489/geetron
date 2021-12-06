import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Ghomes/images/ghmomes.jpg'
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



  textAlign:'justify',
  fontFamily: 'SourceSansPro',
  padding:'15px',
  
 

}))


const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
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
          <MyDivider textAlign="right"></MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
      
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
              <MyStackfirst spacing={2}>
              <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" >
                  <Mypara><b>Disabled Alarm System</b></Mypara>
              <Mypara>A simple and effective alarm system is a must for every hospital and old age home where urgent assistance may be required
                </Mypara>
                </div>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <Mypara> <b>Features</b>
                  <ul>
                    <li>Ceiling mounted activation unit with pull cord </li>
                    <li>2 position handles</li>
                    <li>Toilet installed reset panel</li>
                    <li>Over-door light and sounder</li>
                

                    <li>The alarm can be activated from both toilet height seat and also from the floor</li>
                    <li>Attracts attention by both light and sounder</li>
                    <li>Provides 24hrs typical backup if power fails</li>
                  
                  </ul>
                  </Mypara>
               
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
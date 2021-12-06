import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Hospital/images/hospital1.jpg'
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
          <MyDivider textAlign="right">Medical IoT</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
      
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
              <MyStackfirst spacing={2}>
              <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" >
            <Mypara>  We provide both hardware and software solutions to make Hospital management Smart and efficient. The patient monitoring system is gaining importance in the modern connected world, which increases patient engagement and satisfaction as interactions with doctors have become easier and more efficient. Patient health monitoring helps in reducing the length of hospital stay thus preventing re-admissions.  A growing number of IoT systems have made it affordable for normal people. Our dashboard can integrate various such devices into one portal</Mypara>
          
            <Mypara> We have engineered our own IoT hardware to be an integral part of this emerging IoT revolution. 
              <ul><li>One of our major products is a microwave motion sensor which can detect even the minute motion form a paralysed patient and then update along with alert it to the Dashboard and  to the concerned person</li>
              <li>we have also integrated a pulse oximeter and blood pressure meter with our dashboard </li></ul></Mypara>
   
               
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
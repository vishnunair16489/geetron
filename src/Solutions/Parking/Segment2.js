import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from './images/smartparking.png'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '50vw',
  height: '50vh'
 
 

  
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
  textAlign:'justify'
 
  
 

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
          <MyDivider textAlign="right">Smart parking benefits</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
     
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
        
              <MyStackfirst spacing={0}>
              
                <Mypara>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" >
                  <ul>
                    <li>Increases parking revenues by up to 35%.</li>
                    <li>Avoids parking violations on disabled and loading/unloading areas.</li>
                    <li>Monitors real use of restricted areas: only for taxis, special services, authorities…</li>
                    <li>Improves driver experience reducing time loss.</li>
                    <li>Helps to learn patterns of behavior to adapt traffic and surveillance resources for better mobility.</li>
                  </ul>
                  </div>
                  <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                  <b>Reduces:</b>
                  <ul>
                    <li>KM travelled for parking spot -30%</li>
                    <li>Time spent for looking parking slot -43%</li>
                    <li>Greenhouse gas emission -40%</li>
                    <li>Traffic Volume -8%</li>
                    <li>Helps to learn patterns of behavior to adapt traffic and surveillance resources for better mobility.</li>
                  </ul>
                  </div>
                </Mypara>
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
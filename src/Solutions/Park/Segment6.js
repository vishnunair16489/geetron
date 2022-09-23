import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/panic.jpg'
import { Divider, Typography, Grid, Stack,Box ,Hidden} from '@mui/material';

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



const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="center">Panic Alarm System</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
       
          
          <Hidden mdUp>
          <MypicGrid container xs={12} md={4}></MypicGrid>
      </Hidden>
      <MyGrid item xs={12} md={6}>
   
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
            <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart">
             

              
              <Mypara>Our IoT-based Panic Alarm System is there for you in case of an emergency which enables you to instantly alert our monitoring Dashboard. Hopefully, you never need to use our panic button but it's certainly great to know it's there if you do simply safe on.
                </Mypara>
                </div>
                     <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
   
                <Mypara> <b>Features</b>
                  <ul>
                  <li>Wired and wireless operation</li>
                    <li>Low Power Consumption</li> 
                    <li>Solar Portable option</li>
                    <li>Multiple recieving options</li>
                    <li>Automated control and shutdown  option</li>
                  </ul>
               </Mypara>
               </div>
                  </Grid>
               
                  </Grid>
              
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
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


  fontFamily: 'SourceSansPro',
  extAlign:'justify',
  padding:'10px',
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 10px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))



const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="center">Panic Button</MyDivider>
        </div>
        <MyGrid container spacing={2} >
      
       
          
          <Hidden mdUp>
          <MypicGrid container xs={12} md={4}></MypicGrid>
      </Hidden>
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
             

              
              <Mypara>Panic button is there for you in case of an emergency it enables you to instantly trigger your siren and simultaneously alert our monitoring center to dispatch police immediately or you can customize it to dispatch emergency medical services the silent panic option signals our monitoring center without alerting an intruder. Hopefully you never need to use our panic button but it's certainly great to know it's there if you do simply safe on
                     <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>Features</b>
                  <ul>
                  <li>Water Proof </li>
                    <li>Low Power Consumption</li>
                    <li>With/Without sound</li>
                
                  
                  </ul>
               </p>
                  </Grid>
               
                  </Grid>
                </Mypara>
               
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
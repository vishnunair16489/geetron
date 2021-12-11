import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/water.jpg'
import { Divider, Typography, Grid, Stack, Box, Hidden } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start",


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize: 'cover',
  height: '300px',



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
  padding: '15px',
 


}))


const App = () => {
  return (


    <Stack>
      <div data-aos="flip-left">
        <MyDivider textAlign="center">Irrigation Automation</MyDivider>
      </div>
      <MyGrid container spacing={0} >
        <Hidden mdUp>
          <MypicGrid container xs={12} md={4}></MypicGrid>
        </Hidden>


        <MyGrid item xs={12} md={6}>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={12}>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart"  >



                  <Mypara>We have developed an IoT wireless irrigation solution, which addresses the issues of mobility and affordability for customers. We use the latest ultra-long-range radio communication to eliminate all expensive in-field wiring. Our solar-powered watering stations are environmentally friendly and maintenance-free.
                  </Mypara>
                </div>   <Grid container direction="row" spacing={0}>
                  <Grid item xs={12} sm={6} md={6}>
                    <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                      <Mypara> <b>Features</b>
                        <ul>
                          <li>Automatic on/off </li>
                          <li>Day/Night auto  timer</li>
                          <li>Seasonal Mode - Water percentage</li>
                          <li>Weekend mode</li>
                          <li>Manual irrigation mode</li>
                          <li>Wireless Controlling with IoT Dashboard</li>

                        </ul>
                      </Mypara>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                      <Mypara>

                        <b>Benifits</b>
                        <ul>

                          <li>Energy Efficient</li>
                          <li>Solar Powered</li>
                          <li>Easy to operate</li>
                          <li>Controlled  water usage</li>
                        </ul></Mypara>
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
      </Stack >

 

  );
}

export default App;
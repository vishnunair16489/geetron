import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Ghomes/images/smart.png'
import Ventor from '../Ghomes/images/ventor.png'
import Data from '../Ghomes/images/data.png'
import Service from '../Ghomes/images/service.png'
import Cost from '../Ghomes/images/cost.png'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center", 
  padding:'10px'

}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
 
 
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  [theme.breakpoints.up("xs")]: {
  
    height:'180px',
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    height:'230px',
  },

  
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

const Mytext = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'left',
  minWidth: '10em',
  maxHeight:'20em',
  color: '#1268B3',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  margin: "0px 30px",


}))

const Mypara = styled(Typography)(({ theme }) => ({


  fontFamily: 'SourceSansPro',
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 30px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))

const MyStack = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
    marginLeft: "30px",
  },
   [theme.breakpoints.down("md")]: {
    marginTop: "60px",
    marginLeft: "30px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
    marginLeft: "10px",
  },

}))

const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
    marginLeft: "30px",
  },
   [theme.breakpoints.down("md")]: {
    marginTop: "60px",
    marginLeft: "30px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
    marginLeft: "10px",
  },
  

}))

const App = () => {
  return (

    <MyGrid container spacing={2} >
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="right">Why we developed Geetron smart Homes?</MyDivider>
        </div>
        <MyGrid container spacing={2} >
      
      <MypicGrid  container   justifyContent="center"  alignItems="center" xs={12} md={4}>
      <img src={segment2img} width='200' alt='img'/>
      </MypicGrid>
    
      <MyGrid item xs={12} md={6}>
      
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={6} md={6}>
            <div data-aos="fade-right"  data-aos-easing="ease-out-quart" data-aos-delay="200" >
              <MyStackfirst spacing={2}>
                <img src={Ventor} width="40" alt="Logo" />
                <Mytext>Different Venders</Mytext>
                <Mypara>In this space many vendors are using different technology to connect to their IoT devices, thus making the life of customers who buy them hard. But here in Geetron we try to make the steps as easy as possible and try to give the customers a seamless experience</Mypara>
              </MyStackfirst>
            </div>
            </Grid>
        <Grid item  xs={12}  sm={6} md={6}>
            <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
              <MyStack spacing={2}>
                <img src={Data} width="40" alt="Logo" />
                <Mytext>Open Data </Mytext>
                <Mypara>In almost all the IoT smart Homes services the user data is sent directly to the servers which could be used for advertisement purposes, But we make sure that your data is kept locally in your server, and if needed by you it will be connected to our secure online server.</Mypara>

              </MyStack>
            </div>
            </Grid>
      
            </Grid>
          </Box>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={6} md={6}>
            <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="600" >
              <MyStackfirst spacing={2}>
                <img src={Service} width="40" alt="Logo" />
                <Mytext>Service  Difficulties</Mytext>
                <Mypara>All the main players that are in the IoT sector focuses only on their sales and not after-sales services,  we at Geetron mainly focuses on the after-sales services as a happy customer is always a good customer for business, we make it a point that you stay happy all the time

                </Mypara>
              </MyStackfirst>
            </div>
            </Grid>
        <Grid item  xs={12}  sm={6} md={6}>
            <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="800" >
              <MyStack spacing={2}>
                <img src={Cost} width="40" alt="Logo" />
                <Mytext>High Cost</Mytext>
                <Mypara>The initial cost of making your home a smart home make a deep hole in your pocket, we know that and thus we make it a point that we deliver the best products to our customers at the most reasonable price so that they can enjoy all the features that a IoT has to offer them</Mypara>

              </MyStack>
            </div>
            </Grid>
      
            </Grid>
      </MyGrid>
      </MyGrid>
      </Stack>
</MyGrid>
 

  );
}

export default App;
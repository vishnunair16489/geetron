import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Grid, Stack, Divider ,Hidden} from '@mui/material';
import ReactPlayer from 'react-player'
import glob from '../Homepage/images/glob.jpg'
import parallex from '../Homepage/images/parallex.mp4'
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
}));

const MyStack = styled(Stack)(({ theme }) => ({

  direction: "row",
  justifyContent: "center",
  alignItems: "center",
}));

const MyDivider = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
  color: 'white',
  paddingTop:'50px',
  textAlign: 'center',
  fontFamily: 'SourceSansPro',

}));
const Subtext = styled(Typography)(({ theme }) => ({

  padding: "0.2em",
  fontSize: '1.0em',
  textAlign: 'justify',
  maxWidth: '25em',
  color: 'white',
  fontFamily: 'SourceSansPro',



}));
const Counter = styled(Typography)(({ theme }) => ({

  padding: "0.2em",
  fontSize: '1.5em',
  textAlign: 'justify',
  maxWidth: '25em',
  color: 'white',
  fontFamily: 'SourceSansPro',

}));


const PicGrid = styled(Grid)(({ theme }) => ({
  marginTop: "10px",
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
}));


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
    <div style={{ backgroundImage: `url(${glob})`,height:'500px'}}>
      <MyDivider textAlign="center">Geetron Ecosystem</MyDivider>

      <MyGrid container spacing={0} >

      <Grid item  xs={12} sm={12} md={4}>
     
   
        
          <MyStack spacing={5}>
          <div  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
          
            <Subtext>Geetron is powering the IoT Revolution joining to ensure maximum interoperability with our worldwide certified IoT sensor hardware platform. Join the Geetron family as a trusted IoT partner</Subtext>
              </div> 
              <Stack direction="row" spacing={5}>
              <MyStack spacing={2}>
              <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-back" data-aos-delay="100" >
                <Counter>120</Counter>
                <Subtext>Countries</Subtext>
                </div> 
              </MyStack>
              <MyStack spacing={2}>
              <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-back" data-aos-delay="200"  >
                <Counter>100+</Counter>
                <Subtext>Partners</Subtext>
                </div> 
              </MyStack>
              <MyStack spacing={2}>
              <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-back" data-aos-delay="300" >
                <Counter>30</Counter>
                <Subtext>Distributors</Subtext>
                </div> 
              </MyStack>
            </Stack>
         
          </MyStack>
        </Grid> 
        <Hidden mdDown>
           <PicGrid container item xs={12} md={6}   >
           
        </PicGrid>
         
       
          </Hidden>
      
           
      
      


      </MyGrid>
    </div>
  );
}

export default App;
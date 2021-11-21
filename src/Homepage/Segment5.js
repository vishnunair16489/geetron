import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Grid, Stack, Divider ,Hidden} from '@mui/material';
import ReactPlayer from 'react-player'

import parallex from '../Homepage/images/parallex.mp4'
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
}));

const Header = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.2em',
  minWidth: '10em',
  color: '#000000',
  fontFamily: 'SourceSansPro',

}));
const MyStack = styled(Stack)(({ theme }) => ({

  direction: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  marginLeft:'10PX',
}));

const MyDivider = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  marginTop: "50px",
  fontFamily: 'SourceSansPro',

}));
const Subtext = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.0em',
  textAlign: 'left',
  maxWidth: '25em',
  color: '#000000',
  fontFamily: 'SourceSansPro',


}));
const Counter = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.5em',
  textAlign: 'left',
  maxWidth: '25em',
  color: '#000000',
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
    <div>
      <MyDivider textAlign="center">Geetron Ecosystem</MyDivider>

      <MyGrid container spacing={0.5} >

      <Grid item  xs={12} sm={12} md={4}>
     
      <Hidden mdUp>
           <PicGrid container item xs={12} md={6}   >
          <ReactPlayer playing={true} loop={true} volume={0} muted url={parallex} />
        </PicGrid>
         
       
          </Hidden>
        
          <MyStack spacing={2}>
          <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  >
            <Header>Geetron Ecosystem </Header>
            <Subtext>Geetron is powering the IoT Revolution joining to ensure maximum interoperability with our worldwide certified IoT sensor hardware platform. Join the Geetron family as a trusted IoT partner</Subtext>
            <Stack direction="row" spacing={10}>
              <MyStack spacing={2}>
                <Counter>120</Counter>
                <Subtext>Countries</Subtext>
              </MyStack>
              <MyStack spacing={2}>
                <Counter>100+</Counter>
                <Subtext>Partners</Subtext>
              </MyStack>
              <MyStack spacing={2}>
                <Counter>30</Counter>
                <Subtext>Distributors</Subtext>
              </MyStack>
            </Stack>
            </div>
          </MyStack>
        </Grid> 
        <Hidden mdDown>
           <PicGrid container item xs={12} md={6}   >
          <ReactPlayer playing={true} loop={true} volume={0} muted url={parallex} />
        </PicGrid>
         
       
          </Hidden>
      
           
      
      


      </MyGrid>
    </div>
  );
}

export default App;
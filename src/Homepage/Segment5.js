import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import ReactPlayer from 'react-player'

import video from '../Homepage/images/video.mp4'
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: '#000000',
}));

const Header = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.2em',
  minWidth: '10em',
  color: '#FFFFFF',

  fontFamily: 'SourceSansPro',

}));
const MyStack = styled(Stack)(({ theme }) => ({

  direction: "row",
  justifyContent: "flex-end",
  alignItems: "center",
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
  color: '#FFFFFF',
  fontFamily: 'SourceSansPro',


}));
const Counter = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.5em',
  textAlign: 'left',
  maxWidth: '25em',
  color: '#FFFFFF',
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

        <Grid item xs={12} md={6} >
          <MyStack spacing={2}>
            <Header>Geetron Ecosystem </Header>
            <Subtext>Geetron is powering the IoT Revolution joining efforts with an important network of partners to ensure the maximum interoperability with our worldwide certified IoT sensor hardware platform. Join us at any point of the IoT value chain: as a hardware partner, connectivity provider, cloud partner, solution partner, trusted system integrator, or distributor</Subtext>
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
          </MyStack>
        </Grid>
        <PicGrid container item xs={12} md={6}   >
          <ReactPlayer playing={true} loop={true} volume={0} muted url={video} />
        </PicGrid>


      </MyGrid>
    </div>
  );
}

export default App;
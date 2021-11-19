import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import ReactPlayer from 'react-player'

import Aos from 'aos';
import 'aos/dist/aos.css';

const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
}));

const MyStack = styled(Stack)(({ theme }) => ({

  direction: "row",
  justifyContent: "flex-end",
  alignItems: "center",
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
const Subtext = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.2em',
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
      <MyDivider textAlign="left">Features</MyDivider>

      <MyGrid container spacing={0.5} >

        <Grid item xs={12} md={6} >
          <MyStack spacing={2}>
          
            <Subtext>
                <ul>
                    <li>Outdoor air quality, pollution</li>
                    <li>Indoor air quality</li>
                    <li>Lighting</li>
                    <li>Remote monitoring</li>
                    <li>Increased energy efficiency</li>
                    <li>Leak detection</li>
                    <li>Water Valve Controller</li>
                </ul>
            </Subtext>
           
          </MyStack>
        </Grid>
        <PicGrid container item xs={12} md={6}   >
        
        </PicGrid>


      </MyGrid>
    </div>
  );
}

export default App;
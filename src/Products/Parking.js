import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import segment1img from './images/homes.jfif';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
  direction: "row",

}));

const Header = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.2em',
  minWidth: '10em',
  color: '#1268B3',
  fontFamily: 'SourceSansPro',

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

    direction:"row",
    justifyContent:"center",
    alignItems:"center",
    
  
    color: 'black',
    fontFamily: 'SourceSansPro',
   
    [theme.breakpoints.down("xs")]: {
      justifyContent:"center",
      alignItems:"center",
     },
      [theme.breakpoints.up("md")]: {
        justifyContent:"flex-end",
        alignItems:"center",
    
     },
 
}));
const MyStack = styled(Stack)(({ theme }) => ({
  marginTop: "10px",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "30px",
  marginRight: "30px",

}));

const PicGrid = styled(Grid)(({ theme }) => ({
    paddingTop: "0.2em",
    fontSize: '1.0em',
    textAlign: 'left',
  
    color: 'black',
    fontFamily: 'SourceSansPro',
  
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      alignItems: "center",
      maxWidth: '25em',
    },
  
}));


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
    <div>
      <MyDivider textAlign="center">G-Parking </MyDivider>

      <MyGrid container spacing={0.5} >

       
        <Grid container item xs={12} md={6} >
          <MyStack spacing={2}>
            <Header>GEETRON WATER</Header>
            <Subtext>
        <p>    Smart Parking</p>


        <p>Smart Parking is a radar sensor device that allows the detection of parking availability indoors and outdoors. ﻿</p>

        <p>Smart parking benefits (reduces fuel, pollution, traffic, time…)</p>
        <p>Smart parking applications (cities, hospitals, public areas, malls, universities, sports centers</p>
            <p>Additional revenues of smart parking technology in urban and shopping areas. Having real-time information about parking occupancy:</p>
            <p>Increases parking revenues by up to 35%.</p>
            <p>Avoids parking violations on disabled and loading/unloading areas.</p>
            <p>Monitors real use of restricted areas: only for taxis, special services, authorities…</p>
            <p>Improves driver experience reducing time loss.</p>
            <p>Helps to learn patterns of behavior to adapt traffic and surveillance resources for better mobility.</p>
            <p>﻿Reduces:</p>

            <p>﻿KM traveled for parking spot -30%</p>

            <p>﻿Time spent for looking parking slot -43%</p>

            <p>﻿Greenhouse gas emission -40%</p>

            <p>﻿Traffic Volume -8% </p>
</Subtext>   
          </MyStack>
        </Grid>
        <PicGrid container item xs={12} md={6}   >
          <img src={segment1img} height="300px" alt="Logo" />
        </PicGrid>
      </MyGrid>
      </div>
  );
}

export default App; 
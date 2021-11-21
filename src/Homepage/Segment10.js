import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import segment1img from '../Homepage/images/mobile.png';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import android from '../Homepage/images/android.png'
import apple from '../Homepage/images/apple.png'
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

  paddingTop: "0.2em",
  fontSize: '1.0em',
  textAlign: 'left',
  paddingBottom: "1.0em",
  color: 'black',
  fontFamily: 'SourceSansPro',

  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: '25em',
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

  
  direction:"row",
  justifyContent:"center",
  alignItems:"center",
 
  [theme.breakpoints.down("xs")]: {
    justifyContent:"center",
    alignItems:"center",
   },
    [theme.breakpoints.up("md")]: {
      justifyContent:"flex-end",
      alignItems:"center",
  
   },
}));


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
    <div>
      <MyDivider textAlign="center">iOS and Android Application </MyDivider>

      <MyGrid container spacing={0.5} >
    
        <PicGrid container item xs={12} md={6}   >
        <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  >
          <img src={segment1img} width='300px' alt="Logo" />
          </div>
        </PicGrid>
    
      
        <Grid container item xs={12} md={6} >
    
          <MyStack spacing={2}>
          <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  >
            <Header>At Geetron we values our customers </Header>
            <Subtext>Proin eget purus dapibus, pharetra neque vulputate, tristique sapien. Vivamus vitae consequat est, et vestibulum erat. Nullam id lorem neroin eget purus dapibus, pharetra neque vulputate, tristique sapien. Vivamus vitaeera consequat estibulum.  lorem neroinretra lorem neroin.</Subtext>
            <Stack direction="row" spacing={2}>
              <img src={android} width="100" alt="Logo" />
              <img src={apple} width="100" alt="Logo" />

            </Stack>
            </div>
          </MyStack>
        
        </Grid>

      </MyGrid>
      </div>
  );
}

export default App; 
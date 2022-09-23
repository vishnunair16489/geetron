import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import segment1img from '../Homepage/images/mobile.png';
import { Typography, Grid, Stack } from '@mui/material';
import android from '../Homepage/images/android.png'
import apple from '../Homepage/images/apple.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  
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

const Subtext = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.0em',
  textAlign: 'justify',
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

      <MyGrid container spacing={0.5} >
    
        <PicGrid container item xs={12} md={6}   >
     
          <img src={segment1img} width='300px' alt="Logo" />
       
        </PicGrid>
    
      
        <Grid container item xs={12} md={6} >
    
          <MyStack spacing={2}>
       
            <Header>Connect With Geetron Network </Header>
            <Subtext>At Geetron, we value our customers and we make it a point that you can reach us at any time and our ecosystem is available to you in every possible  manner, thus introducing Geetron mobile application both available in Android and IOS</Subtext>
            <Stack direction="row" spacing={2}>
              <img src={android} width="100" alt="Logo" />
              <img src={apple} width="100" alt="Logo" />

            </Stack>
         
          </MyStack>
        
        </Grid>

      </MyGrid>
      </div>
  );
}

export default App; 
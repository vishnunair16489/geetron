import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/solar.png'
import { Divider,  Grid, Stack } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
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

const MypicGrid = styled(Grid)(({ theme }) => ({

    borderRadius:"50%",
  
   [theme.breakpoints.up("xs")]: {
    
    borderRadius:"0%"
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    borderRadius:"50%"
  },
  
    
  }));

const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="left">Modules</MyDivider>
        </div>
        <MyGrid container spacing={2} >
      
        <MypicGrid item xs> <img src={segment2img} width='100px' alt='img'/></MypicGrid>
        <Grid item xs> <img src={segment2img} width='100px' alt='img'/></Grid>
      <Grid item xs> <img src={segment2img} width='100px' alt='img'/></Grid>
      <Grid item xs> <img src={segment2img} width='100px' alt='img'/></Grid>
      <Grid item xs> <img src={segment2img} width='100px' alt='img'/></Grid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
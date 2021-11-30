import React from 'react'
import Segment1 from  '../Ghomes/Segment1';
import Segment2 from  '../Ghomes/Segment2';
import Segment4 from  '../Ghomes/Segment4';
import Segment5 from  '../Ghomes/Segment5';
import { CssBaseline,Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
  
  
    marginTop:'-110px'
  },
   [theme.breakpoints.up("md")]: {
  
    marginTop:'-65px'
  },
  [theme.breakpoints.up("md")]: {
   
    marginTop:'-65px'
  },


}));



const App = () => {
 
  return (
    
    <div>
        <CssBaseline />
        <MyGrid>
        <Segment1/>  <Segment2/>
        <Segment4/>
        <Segment5/>
      
        </MyGrid>
       
      </div>
  
  );
}

export default App; 
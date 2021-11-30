import React from 'react'
import Segment1 from  '../Industry/Segment1';
import Segment2 from  '../Industry/Segment2';
import Segment3 from  '../Industry/Segment3';
import Segment4 from  '../Industry/Segment4';
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
        <Segment1/>
        <Segment2/>
        <Segment3/>
        <Segment4/>
      </MyGrid>
     
     
       
      </div>
  
  );
}

export default App; 
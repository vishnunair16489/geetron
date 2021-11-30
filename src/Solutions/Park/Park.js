import React from 'react'
import Segment1 from  '../Park/Segment1';
import Segment2 from  '../Park/Segment2';
import Segment3 from  '../Park/Segment3';
import Segment5 from  '../Park/Segment5';
import Segment6 from  '../Park/Segment6';
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
      
        <Segment5/>
        <Segment6/>
        <Segment2/>
        <Segment3/>
      
       </MyGrid>  
      </div>
  
  );
}

export default App; 
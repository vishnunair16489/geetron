import React from 'react'
import Segment1 from  '../Parking/Segment1';
import Segment2 from  '../Parking/Segment2';
import Segment4 from  '../Parking/Segment4';
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
        <Segment4/>
      </MyGrid>
     
     
       
      </div>
  
  );
}

export default App; 
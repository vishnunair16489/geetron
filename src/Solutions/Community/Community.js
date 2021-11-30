import React from 'react'
import Segment1 from  '../Community/Segment1';
import Segment2 from  '../Community/Segment2';
import Segment3 from  '../Community/Segment3';

import Segment5 from  '../Community/Segment5';
import Segment6 from  '../Community/Segment6';
import { CssBaseline,Grid } from '@mui/material';

import { styled } from '@mui/material/styles';



const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center", 
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
     
        <Segment5/>
    
        <Segment6/>
       </MyGrid>  
      </div>
  
  );
}

export default App; 
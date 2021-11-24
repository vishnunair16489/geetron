import React from 'react'
import Segment1 from  '../Park/Segment1';
import Segment2 from  '../Park/Segment2';
import Segment3 from  '../Park/Segment3';
import Segment4 from  '../Park/Segment4';
import Segment5 from  '../Park/Segment5';
import Segment6 from  '../Park/Segment6';
import { CssBaseline } from '@mui/material';


const App = () => {
 
  return (
    
    <div>
        <CssBaseline />
        <Segment1/> 
        <Segment4/>
         <Segment5/> 
       <Segment6/>
      <Segment2/>
        
        <Segment3/>
      </div>
  
  );
}

export default App; 
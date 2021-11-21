import React from 'react'
import Segment1 from  '../Signage/Segment1';
import Segment2 from  '../Signage/Segment2';
import Segment4 from  '../Signage/Segment4';
import { CssBaseline } from '@mui/material';


const App = () => {
 
  return (
    
    <div>
        <CssBaseline />
        <Segment1/>
        <Segment4/>
      
        <Segment2/>
     
       
      </div>
  
  );
}

export default App; 
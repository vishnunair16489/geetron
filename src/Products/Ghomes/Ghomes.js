import React from 'react'
import Segment1 from  '../Ghomes/Slideshow';
import Segment2 from  '../Ghomes/Segment2';
import Segment3 from  '../Ghomes/Segment3';
import Segment4 from  '../Ghomes/Segment4';
import Segment5 from  '../Ghomes/Segment5';
import { CssBaseline } from '@mui/material';





const App = () => {
 
  return (
    
    <div>
        <CssBaseline />
        <Segment1/>
        <Segment4/>
        <Segment5/>
        <Segment2/>
        <Segment3/>
     
       
      </div>
  
  );
}

export default App; 
import React from 'react'
import Segment1 from  '../Hotel/Slideshow';
import Segment2 from  '../Hotel/Segment2';
import Segment4 from  '../Hotel/Segment4';
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
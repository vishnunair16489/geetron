import React from 'react'
import { styled } from '@mui/material/styles';
import {Grid } from '@mui/material';
import Segment1 from  './Segment1';
import Segment2 from  './Segment2';
import 'aos/dist/aos.css';
 
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
    <div data-aos="flip-left">
   <MyGrid>
           <Segment1/>
          <Segment2/>
           </MyGrid> 
           
        </div>
       
  );
}

export default App; 
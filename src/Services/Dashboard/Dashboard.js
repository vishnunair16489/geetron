import React,{useEffect} from 'react'
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
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (  
    <div data-aos="fade-up">
   <MyGrid>
           <Segment1/>
          <Segment2/>
           </MyGrid> 
           
        </div>
       
  );
}

export default App; 
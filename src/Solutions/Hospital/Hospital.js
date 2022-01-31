import React,{useEffect} from 'react'
import Segment1 from  '../Hospital/Segment1';
import Segment2 from  '../Hospital/Segment2';
import Segment3 from  '../Hospital/Segment3';
import Segment4 from  '../Hospital/Segment4';
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
   
    marginTop:'0px'
  },


}));
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    <div data-aos="fade-up">
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
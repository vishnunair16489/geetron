import React,{useEffect} from 'react'
import Segment1 from  '../Community/Segment1';
import Segment2 from  '../Community/Segment2';
import Segment3 from  '../Community/Segment3';

import Segment5 from  '../Community/Segment5';
import Segment6 from  '../Community/Segment6';
import Segment7 from  '../Community/Segment7';
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
   
    marginTop:'0px'
  },


}));
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
    <CssBaseline />
    <div data-aos="fade-up">
      
        <MyGrid>
        <Segment1/> 
        
     
        <Segment7/>
        <Segment2/>
        <Segment3/>     
        <Segment5/>    
        <Segment6/>
       </MyGrid>  
      </div>
      </React.Fragment>
  
  );
}

export default App; 
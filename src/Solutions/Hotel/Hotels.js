import React,{useEffect} from 'react'
import Segment1 from  '../Hotel/Segment1';
import Segment2 from  '../Hotel/Segment2';
import Segment4 from  '../Hotel/Segment4';
import { CssBaseline,Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import Imagebutton from  './Package1';
import Imagebutton1 from  './Package2';
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
        <CssBaseline />
        <MyGrid>
        <Segment1/>
        <Segment2/>
        <Segment4/>
      
      
        <Imagebutton/>
        <Imagebutton1/>
     </MyGrid>
       
      </div>
  
  );
}

export default App; 
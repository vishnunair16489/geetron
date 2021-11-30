import React from 'react'
import { styled } from '@mui/material/styles';
import { Divider ,Grid} from '@mui/material';
import Segment2 from  './Segment2';
import Segment3 from  './Segment3';
import Segment4 from  './Segment4';
import Segment5 from  './Segment5';
import Segment6 from  './Segment6';
import 'aos/dist/aos.css';

  
  
  const MyGridMain = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
    alignItems: "flex-start", 
    direction:"row",
    [theme.breakpoints.up("xs")]: {
      marginTop:'-120px'
  
    },
     [theme.breakpoints.up("md")]: {
      marginTop:'10px'
  
    },
    [theme.breakpoints.up("md")]: {
     
      marginTop:'1px'
    },
  
  
  }));
const App = () => {
 
  return (  
  
      <MyGridMain>         
           <Segment2/>       
           <Segment3/>       
           <Segment4/>
           <Segment5/>       
           <Segment6/>
        </MyGridMain>
    
       
  );
}

export default App; 
import React from 'react'
import { styled } from '@mui/material/styles';
import { Grid} from '@mui/material';
import Segment2 from  './Segment2';
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
       
        </MyGridMain>
       
       
  );
}

export default App; 
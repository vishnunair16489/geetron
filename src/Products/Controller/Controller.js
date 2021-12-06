import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import { Grid} from '@mui/material';
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (  
    <div data-aos="fade-up">
      <MyGridMain>         
           <Segment2/>       
           <Segment3/>       
           <Segment4/>
           <Segment5/>       
           <Segment6/>
        </MyGridMain>
    </div>
       
  );
}

export default App; 
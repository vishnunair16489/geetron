import React,{useEffect} from 'react'
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (  
    <div data-aos="fade-up">
      <MyGridMain>
         
           <Segment2/>
       
        </MyGridMain>
       </div>
       
  );
}

export default App; 
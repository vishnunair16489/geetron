
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Segment2 from  './Segment2';
import Segment3 from  './Segment3';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'



  
  const MyGridMain = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
    alignItems: "flex-start", 
    direction:"row",
    backgroundColor:'#f0f0f0',
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
      Aos.init({ duration: 500 });

  
  }, [])
  return (  
    <div data-aos="fade-up">
       <MyGridMain>
           <Segment2/>
        
           <Segment3/>
         </MyGridMain>
      </div>
        
       
       
  );
}

export default App; 
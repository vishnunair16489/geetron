import React from 'react'
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Segment1 from  './Segment1';
import Segment2 from  './Segment2';
import 'aos/dist/aos.css';

  const MyDivider = styled(Divider)(({ theme }) => ({
  
    
    minWidth: '10em',
    color: '#1268B3',
    textAlign: 'center',
    margin: "50px 0px",
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    [theme.breakpoints.down("xs")]: {
    
      fontSize: '1.2em',
    }, 
    [theme.breakpoints.up("md")]: {
     
     
      fontSize: '1.5em',
    },
  
  }));
  
 
const App = () => {
 
  return (  
    <div data-aos="flip-left">
          <MyDivider textAlign="center  ">IoT Dashboards</MyDivider>
           <Segment1/>
           <Segment2/>
        </div>
       
  );
}

export default App; 
import React from 'react'
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Segment2 from  './Segment2';
import Segment3 from  './Segment3';
import Segment4 from  './Segment4';
import Segment5 from  './Segment5';
import Segment6 from  './Segment6';
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
          <MyDivider textAlign="center  ">Controller</MyDivider>
           <Segment2/>
           <MyDivider/>
           <Segment3/>
           <MyDivider/>
           <Segment4/>
           <MyDivider/>
           <Segment5/>
           <MyDivider/>
           <Segment6/>
        </div>
       
  );
}

export default App; 
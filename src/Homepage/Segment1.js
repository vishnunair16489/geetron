import React from 'react'
import SlideShow from  '../Homepage/Slideshow';

import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import { Grid} from '@mui/material';
const MyGrid = styled(Grid)(({ theme }) => ({
 marginTop:'-65px'

}));
const App = ()=>{
  return(  
    <MyGrid>
      <SlideShow/>
      </MyGrid>
   
);
}

export default App;
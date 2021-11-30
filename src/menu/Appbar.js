import React, { useEffect } from 'react';
import { CssBaseline} from '@mui/material';

import { styled } from '@mui/material/styles';
import '../index.css';
import Segment1 from '../Homepage/Segment1';
import Segment2 from '../Homepage/Segment2';
import Segment3 from '../Homepage/Segment3';
import Segment5 from '../Homepage/Segment5';
import Segment8 from '../Homepage/Segment8';
import Parralex from '../Homepage/images/parallex.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/system';



const Mydivsegment3 = styled(Box)(({ theme }) => ({
  background: `url(${Parralex})`,
  width: '100%',
  marginTop: '10px',
  padding: '0px 0px 50px 0px',
  backgroundColor:'#f0f0f0'
}));



export default function ElevateAppBar(props) {

  useEffect(() => {
    Aos.init({ duration: 500 });
   
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
    
    <div style={{  backgroundColor:'#f0f0f0'}}>
      <Segment1 />
      <Segment2 />
      <Mydivsegment3 >

        <Segment3 />

      </Mydivsegment3>
      <Segment5 />
      <Segment8/>
      </div>
    </React.Fragment>
  );
}

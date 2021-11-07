import  React,{useEffect} from 'react';
import {AppBar,Toolbar,CssBaseline,useScrollTrigger,Slide} from '@mui/material';
import { styled } from '@mui/material/styles';
import '../index.css';
import Desktopmenu from  '../menu/Desktopmenu';
import Segment1 from  '../Homepage/Segment1';
import Segment2 from  '../Homepage/Segment2';
import Segment3 from  '../Homepage/Segment3';
import Segment4 from  '../Homepage/segment4';
import Segment5 from  '../Homepage/Segment5';
import Segment8 from  '../Homepage/Segment8';
import Segment10 from  '../Homepage/Segment10';
import Parralex from '../Homepage/images/parralex.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/system';
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined,
  });
 
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
    
 
}


  const MyAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "transparent",
      color: "white",
      boxShadow: "0px 0px 0px 0px",
      margin: "20px 0px 0px 0px",
    }));

    const Mydivsegment3 = styled(Box)(({ theme }) => ({
      backgroundImage: `url(${Parralex})`,
      width:'100%',
      marginTop:'10px',
      padding:'0px 0px 50px 0px'
      }));

      const Mydivsegment4 = styled(Box)(({ theme }) => ({
  
        width:'100%',
        marginTop:'10px',
        padding:'0px 0px 50px 0px'
        }));

export default function ElevateAppBar(props) {
 
  useEffect(()=>{
    Aos.init({duration:500});

  },[])
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props} >
        <MyAppBar>
          <Toolbar >
            <Desktopmenu/>
          </Toolbar>
        </MyAppBar>
      </ElevationScroll>
      <Toolbar />
     <Segment1/>
     <Segment2/>   
   
      <Mydivsegment3 >
     <div  data-aos="zoom-in-up">
     <Segment3 />
     </div>
     </Mydivsegment3>
     
     <Mydivsegment4>
  
     <Segment4 />
     <Segment5 />
     </Mydivsegment4>
     <Segment8 />
   
     <Segment10 />
    </React.Fragment>
  );
}

import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

import './index.css';
import { BrowserRouter, Routes , Route}  from "react-router-dom";

import {  Divider, useScrollTrigger } from '@mui/material';

import { styled } from '@mui/material/styles';
import { AppBar, Toolbar,Hidden } from '@mui/material';
import Water from "./Solutions/Water/Water"; 
import Ghomes from "./Solutions/Ghomes/Ghomes"; 
import Home from "./menu/Appbar"; 
import Parking from "./Solutions/Parking/Parking"; 
import Desktopmenu from './menu/Desktopmenu';
import Mobilemenu from './menu/Mobilemenu';
import Hotels from "./Solutions/Hotel/Hotels"; 
import Industry from "./Solutions/Industry/Industry"; 
import Signage from "./Solutions/Signage/Signage"; 
import Hospital from "./Solutions/Hospital/Hospital"; 
import Tracking from "./Solutions/Tracking/Tracking"; 
import Community from "./Solutions/Community/Community"; 
import Switch1 from "./Products/Switch/Switch"; 
import Timmer from "./Products/Timmer/Timmer"; 
import Relay from "./Products/Relay/Relay"; 
import Locks from "./Products/Locks/Locks"; 
import Controller from "./Products/Controller/Controller"; 
import Park from "./Solutions/Park/Park"; 
import Dashboard from "./Services/Dashboard/Dashboard"; 
import RD from "./Services/R&D/R&D"; 
import Mobile from "./Services/Mobile/Mobile"; 
import Aboutus from "./Aboutus/Aboutus"; 
import Footer from "./Homepage/Footer"; 
import Contact from "./Contactus/Segment9"; 
const MyAppBar = styled(AppBar)(({ theme }) => ({
  
  backgroundColor: 'rgba(255,255,255,0.95)',
 
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.95)',
 
  },
 
}));

function ElevationScroll(props) {
  const { children, window } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 1,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 15 : 0,
    backgroundColor: trigger ?  'white' : 'black',
  });
}


const App = ()=>{
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return(  
    <BrowserRouter>
      <ElevationScroll  >
      <MyAppBar>
        <Toolbar >
        <Hidden mdDown>
          <Desktopmenu />
          </Hidden>
      
        </Toolbar>
      </MyAppBar>
      </ElevationScroll >

      <Hidden mdUp>
      <Mobilemenu/>
      </Hidden>
      <Toolbar />
    <Routes >
   
          <Route path='/geetron' element={<Home/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Water' element={<Water/>}></Route>
          <Route path='/Ghomes' element={<Ghomes/>}></Route>  
          <Route path='/Parking' element={<Parking/>}></Route>
          <Route path='/Hotels' element={<Hotels/>}></Route>
          <Route path='/Industry' element={<Industry/>}></Route>
          <Route path='/Signage' element={<Signage/>}></Route>
          <Route path='/Tracking' element={<Tracking/>}></Route>
          <Route path='/Hospital' element={<Hospital/>}></Route>
          <Route path='/Aboutus' element={<Aboutus/>}></Route>
          <Route path='/Community' element={<Community/>}></Route>
          <Route path='/Park' element={<Park/>}></Route>
          <Route path='/Switch' element={<Switch1/>}></Route>
          <Route path='/Timmer' element={<Timmer/>}></Route>
          <Route path='/Controller' element={<Controller/>}></Route>
          <Route path='/Relay' element={<Relay/>}></Route>
          <Route path='/Locks' element={<Locks/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Mobile' element={<Mobile/>}></Route>
          <Route path='/R&D' element={<RD/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        
        </Routes>  
        <Divider/>
        <Footer/>
</BrowserRouter>
);
}

export default App;

import React from 'react'
import './index.css';
import { BrowserRouter, Routes , Route }  from "react-router-dom";


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
import Switch from "./Products/Switch/Switch"; 
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
const MyAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0.3)',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: 'black',
  },
 
}));
const App = ()=>{
  return(  
    <BrowserRouter>
      <MyAppBar>
        <Toolbar >
        <Hidden mdDown>
          <Desktopmenu />
          </Hidden>
      
        </Toolbar>
      </MyAppBar>
      <Hidden mdUp>
      <Mobilemenu/>
      </Hidden>
      <Toolbar />
    <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Ghomes' element={<Ghomes/>}></Route>
          <Route path='/Water' element={<Water/>}></Route>
          <Route path='/Parking' element={<Parking/>}></Route>
          <Route path='/Hotels' element={<Hotels/>}></Route>
          <Route path='/Industry' element={<Industry/>}></Route>
          <Route path='/Signage' element={<Signage/>}></Route>
          <Route path='/Tracking' element={<Tracking/>}></Route>
          <Route path='/Hospital' element={<Hospital/>}></Route>
          <Route path='/Aboutus' element={<Aboutus/>}></Route>
          <Route path='/Community' element={<Community/>}></Route>
          <Route path='/Park' element={<Park/>}></Route>
          <Route path='/Switch' element={<Switch/>}></Route>
          <Route path='/Timmer' element={<Timmer/>}></Route>
          <Route path='/Controller' element={<Controller/>}></Route>
          <Route path='/Relay' element={<Relay/>}></Route>
          <Route path='/Locks' element={<Locks/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Mobile' element={<Mobile/>}></Route>
          <Route path='/R&D' element={<RD/>}></Route>
        </Routes>  
        <Footer/>
</BrowserRouter>
);
}

export default App;

import React from 'react'
import './index.css';
import { BrowserRouter, Routes , Route }  from "react-router-dom";


import { styled } from '@mui/material/styles';
import { AppBar, Toolbar,Hidden } from '@mui/material';
import Water from "./Products/Water/Water"; 
import Ghomes from "./Products/Ghomes/Ghomes"; 
import WasteManagement from "./Products/WasteManagement";
import Home from "./menu/Appbar"; 
import Parking from "./Products/Parking"; 
import Desktopmenu from './menu/Desktopmenu';
import Mobilemenu from './menu/Mobilemenu';
import Hotels from "./Products/Hotel/Hotels"; 
import Industry from "./Products/Industry"; 
import Aboutus from "./Aboutus/Aboutus"; 
import Footer from "./Homepage/Footer"; 
const MyAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.95)',// "transparent"
  color: "white",

  boxShadow: "0px 0px 10px 0px",
  //  margin: "20px 0px 0px 0px",
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
          <Route path='/WasteManagement' element={<WasteManagement/>}></Route>
          <Route path='/Parking' element={<Parking/>}></Route>
          <Route path='/Hotels' element={<Hotels/>}></Route>
          <Route path='/Industry' element={<Industry/>}></Route>
          <Route path='/Aboutus' element={<Aboutus/>}></Route>
        </Routes>  
        <Footer/>
</BrowserRouter>
);
}

export default App;

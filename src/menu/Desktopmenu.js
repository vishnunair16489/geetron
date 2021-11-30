import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Logo from  '../menu/images/logolight.png';
import {Tooltip,IconButton,Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';  


import  Switch  from '../menu/images/switch.png';
import  Timmer  from '../menu/images/timer.png';
import  Controller  from '../menu/images/controller.png';
import  Locks  from '../menu/images/locks.png';
import  Relays  from '../menu/images/relay.png';

import Ghome from  '../menu/images/ghome.png';
import Water from  '../menu/images/water.png';
import Hotel from  '../menu/images/hotel.png';
import Parking from  '../menu/images/parking.png';
import Industry from  '../menu/images/factory.png';
import Community from  '../menu/images/community.png';
import Resort from  '../menu/images/resort.png';
import Tracking from  '../menu/images/tracking.png';
import Signage from  '../menu/images/signage.png';
import Hospital from  '../menu/images/hospital.png';

import Dashboard from  '../menu/images/dashboard.png';
import Application from  '../menu/images/application.png';
import RD from  '../menu/images/R&D.png';
import {useNavigate} from 'react-router-dom';
function LinkTab(props) {
  return (
    <MyTab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    >
      </MyTab>
  );
}
const MyTab= styled(Tab)(({ theme }) => ({           
       

  fontFamily:'SourceSansPro',
  fontWeight:'bold',
  '&:hover': {
  
    color: '#1268B3',
  },
  
  
}))

  
  
const MyBox= styled(Grid)(({ theme }) => ({           
 
  direction:"row",
  justifyContent:"flex-end",
  maxWidth: `calc(100% - 20%)`,
  
  alignItems:"center",
  marginTop: "10px",
 

 
}))
const MyBox2= styled(Grid)(({ theme }) => ({           
 
  direction:"row",
  justifyContent:"flex-end",
  alignItems:"center",
  marginTop: "10px",  
  maxWidth: `calc(100% - 210px)`,
  
}))
const MyGrid= styled(Grid)(({ theme }) => ({           
 
  justifyContent:"center",
  alignItems:"center",
  
  margin: "0px",
  '&:hover': {
  
    color: '#1268B3',
  },
 
  
}))
const Mydiv= styled(Grid)(({ theme }) => ({           

 justifyContent:"center",
  alignItems:"center",
 
  
}))



export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  
 
  };
  const navigate = useNavigate();


  const submenu = () => {
    switch(value) {
      case 2:
        return    <React.Fragment>
            <div  data-aos="slide-left" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
           <MyBox  container onMouseLeave={() => setValue(index)} >
         <Tooltip title="Switch">
          <IconButton size="small" sx={{ ml: 2 }} onClick={()=> navigate('Switch')}>
          <img src={Switch} height='30px' alt="water" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Timmer">
          <IconButton size="small" sx={{ ml: 2 }} onClick={()=> navigate('Timmer')}>
          <img src={Timmer}  height='30px'  alt="water" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Controller">
          <IconButton  size="small" sx={{ ml: 2 }} onClick={()=> navigate('Controller')}>
          <img src={Controller}  height='30px'  alt="water" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Locks">
          <IconButton  size="small" sx={{ ml: 2 }} onClick={()=> navigate('Locks')}>
          <img src={Locks}  height='30px'  alt="water" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Relays">
          <IconButton  size="small" sx={{ ml: 2 }} onClick={()=> navigate('Relay')}>
          <img src={Relays}  height='30px'  alt="water" />
          </IconButton>
        </Tooltip>
      </MyBox>
      </div>
        </React.Fragment>;
          case 3:
            return    <React.Fragment>
               <div  data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-out-back" data-aos-anchor="trigger" data-aos-anchor-placement="top-top"  >
               <MyBox container onMouseLeave={() => setValue(index)} >
             <Tooltip title="GHomes">
             <IconButton aria-label="delete" onClick={()=> navigate('Ghomes')}>
             <img src={Ghome}  height='30px'  alt="water" />
      </IconButton>
            </Tooltip>
            <Tooltip title="Water">
              <IconButton size="small" sx={{ ml: 2 }} onClick={()=> navigate('Water')}>
              <img src={Water}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Hotel">
              <IconButton  size="small" sx={{ ml: 2 }} onClick={()=> navigate('Hotels')}>
              <img src={Hotel}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Parking">
              <IconButton size="small" sx={{ ml: 2 }} onClick={()=> navigate('Parking')}>
              <img src={Parking}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Industry">
              <IconButton size="small" sx={{ ml: 2 }} onClick={()=> navigate('Industry')}>
              <img src={Industry}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Communities" onClick={()=> navigate('Community')}>
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={Community}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Parks&Resorts" onClick={()=> navigate('Park')}>
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={Resort}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Tracking" onClick={()=> navigate('Tracking')}>
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={Tracking}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Digital Signage" onClick={()=> navigate('Signage')}>
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={Signage}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Hospital">
              <IconButton size="small" sx={{ ml: 2 }} onClick={()=> navigate('Hospital')}>
              <img src={Hospital}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
          </MyBox>
          </div>
            </React.Fragment>;
          case 4:
            return    <React.Fragment>
                <div  data-aos="slide-left" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
               <MyBox2 container onMouseLeave={() => setValue(index)} >
             <Tooltip title="IoT Dashboard">
              <IconButton size="small" sx={{ ml: 2 }}onClick={()=> navigate('Dashboard')}>
              <img src={Dashboard}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Mob Applications">
              <IconButton size="small" sx={{ ml: 2 }}onClick={()=> navigate('Mobile')}>
              <img src={Application}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="R&D">
              <IconButton  size="small" sx={{ ml: 2 }}onClick={()=> navigate('R&D')}>
              <img src={RD}  height='30px'  alt="water" />
              </IconButton>
            </Tooltip>
          
          </MyBox2>
          </div>
          </React.Fragment>
      default:
        return '';
    };
  }
 
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    
         <MyGrid container spacing={2}>
       
         <Mydiv container item xs={4}  data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
             <img src={Logo}  alt="Logo" height="25" />
             </Mydiv>
     
        <Grid   item xs={8} >
        <Grid container  direction="row"  justifyContent="center"  alignItems="center">
        <Tabs textColor="white"   value={value} onChange={handleChange}  aria-label="nav tabs example">
        <LinkTab    onMouseEnter={() => setValue(0)} onClick={()=> navigate('/')}   onMouseLeave={() => setValue(index)} label="Home"  />
        <LinkTab  onMouseEnter={() => setValue(1)} onClick={()=> navigate('/Aboutus')} onMouseLeave={() => setValue(index)} label="About Us" />
        <LinkTab onMouseEnter={() =>  setValue(2)}  label="Product"  />
        <LinkTab id="trigger"  onMouseEnter={() => setValue(3)}  label="Solution"/>
        <LinkTab  onMouseEnter={() => setValue(4)}  label="Services" />
        <LinkTab  onMouseEnter={() => setValue(5)}  onMouseLeave={() => setValue(index)} label="Contact Us" onClick={()=> navigate('Contact')} />
  
      </Tabs>
      
      </Grid>
        </Grid>

        </MyGrid>
        {submenu()}
    </Box>
    
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Logodark from  '../menu/images/logodark.png';
import Logolight from  '../menu/images/logolight.png';
import {Tooltip,IconButton ,Typography} from '@mui/material';
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
  color: '#1268B3',
 
  
  
}))

  
  
const MyBox= styled(Grid)(({ theme }) => ({           
 
  direction:"row",
  justifyContent:"flex-end",
  maxWidth: `calc(100% - 15%)`,
  
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

const Myp= styled(Typography)(({ theme }) => ({           

color:'#1268B3',
fontSize:'0.8em',
padding:'10px'
 
  
}))

export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const [image, setImage] = React.useState('');
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  
 
  };
  const navigate = useNavigate();


  const submenu = () => {
    switch(value) {
      case 2:
        return    <React.Fragment>
            <div  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
           <MyBox container onMouseLeave={() => setValue(index)} >
           
        <Stack   justifyContent="center" alignItems="center">
          <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Switch')}>
          <img src={Switch} height='30px' alt="water" />
          </IconButton>
          <Myp> Switchs</Myp>
          </Stack>
       <Stack   justifyContent="center" alignItems="center">
          <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Timmer')}>
          <img src={Timmer}  height='30px'  alt="water" />
          </IconButton>
       <Myp> Timers</Myp>
          </Stack>
       <Stack   justifyContent="center" alignItems="center">
          <IconButton  size="small" sx={{ ml: 0 }} onClick={()=> navigate('Controller')}>
          <img src={Controller}  height='30px'  alt="water" />
          </IconButton>
           <Myp> Controllers</Myp>
          </Stack>
        <Stack   justifyContent="center" alignItems="center">
          <IconButton  size="small" sx={{ ml:0 }} onClick={()=> navigate('Locks')}>
          <img src={Locks}  height='30px'  alt="water" />
          </IconButton>
          <Myp> 
          Locks</Myp>
          </Stack>
      <Stack   justifyContent="center" alignItems="center">
          <IconButton  size="small" sx={{ ml: 0 }} onClick={()=> navigate('Relay')}>
          <img src={Relays}  height='30px'  alt="water" />
          </IconButton>
         <Myp> Relays</Myp>
          </Stack>
       
      </MyBox>
      </div>
        </React.Fragment>;
          case 3:
            return    <React.Fragment>
               <div  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
               <MyBox container onMouseLeave={() => setValue(index)} >
             <Stack   justifyContent="center" alignItems="center">
             <IconButton size="small" onClick={()=> navigate('Ghomes')}>
             <img src={Ghome}  height='30px'  alt="water" />
      </IconButton>
           <Myp> Ghomes</Myp>
          </Stack>
            <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Water')}>
              <img src={Water}  height='30px'  alt="water" />
              </IconButton>
             <Myp> Water</Myp>
          </Stack>
            <Stack   justifyContent="center" alignItems="center">
              <IconButton  size="small" sx={{ ml: 0 }} onClick={()=> navigate('Hotels')}>
              <img src={Hotel}  height='30px'  alt="water" />
              </IconButton>
            <Myp> Hotels</Myp>
          </Stack>
            <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Parking')}>
              <img src={Parking}  height='30px'  alt="water" />
              </IconButton>
            <Myp> Parking</Myp>
          </Stack>
             <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Industry')}>
              <img src={Industry}  height='30px'  alt="water" />
              </IconButton>
            <Myp> Industry</Myp>
          </Stack>
        <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 0 }}  onClick={()=> navigate('Community')}>
              <img src={Community}  height='30px'  alt="water" />
              </IconButton>
            <Myp> Community</Myp>
          </Stack>
             <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Park')}>
              <img src={Resort}  height='30px'  alt="water" />
              </IconButton>
           <Myp> Parks & resorts</Myp>
          </Stack>
           <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Tracking')}>
              <img src={Tracking}  height='30px'  alt="water" />
              </IconButton>
           <Myp> Tracking</Myp>
          </Stack>
            <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Signage')}>
              <img src={Signage}  height='30px'  alt="water" />
              </IconButton>
         <Myp>Digital Hospital</Myp>
          </Stack>
           <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 0 }} onClick={()=> navigate('Hospital')}>
              <img src={Hospital}  height='30px'  alt="water" />
              </IconButton>
             <Myp> Hospital</Myp>
          </Stack>
          </MyBox>
          </div>
            </React.Fragment>;
          case 4:
            return    <React.Fragment>
                <div  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
               <MyBox2 container onMouseLeave={() => setValue(index)} >
          <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 2 }}onClick={()=> navigate('Dashboard')}>
              <img src={Dashboard}  height='30px'  alt="water" />
              </IconButton>
            <Myp> IoT Dashboard</Myp>
          </Stack>
          <Stack   justifyContent="center" alignItems="center">
              <IconButton size="small" sx={{ ml: 2 }}onClick={()=> navigate('Mobile')}>
              <img src={Application}  height='30px'  alt="water" />
              </IconButton>
           <Myp> Mob Application</Myp>
          </Stack>
          <Stack   justifyContent="center" alignItems="center">
              <IconButton  size="small" sx={{ ml: 2 }}onClick={()=> navigate('R&D')}>
              <img src={RD}  height='30px'  alt="water" />
              </IconButton>
            <Myp> R&D</Myp>
          </Stack>
          
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
             <img src={Logodark}  alt="Logo" width="200" onClick={()=> navigate('/')} />
             </Mydiv>
     
        <Grid   item xs={8} >
        <Grid container  direction="row"  justifyContent="center"  alignItems="center">
        <Tabs textColor="#1268B3"   value={value} onChange={handleChange} onMouseEnter ={()=>setImage({Logodark})} onMouseLeave={()=>setImage({Logolight})} aria-label="nav tabs example">
        <LinkTab    onMouseEnter={() => setValue(0)} onClick={()=> navigate('/')}   onMouseLeave={() => setValue(index)} label="Home"  />
        <LinkTab  onMouseEnter={() => setValue(1)} onClick={()=> navigate('/Aboutus')} onMouseLeave={() => setValue(index)} label="About Us" />
        <LinkTab onMouseEnter={() =>  setValue(2)}  label="Products"  />
        <LinkTab id="trigger"  onMouseEnter={() => setValue(3)}  label="Solutions"/>
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

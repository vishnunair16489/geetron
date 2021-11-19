import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Logo from  '../menu/images/logo.png';
import {Tooltip,IconButton,Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

import  Water  from '../menu/images/water.svg';
import  City  from '../menu/images/cities.svg';
import  Tourism  from '../menu/images/tourism.svg';
import  Industry  from '../menu/images/industry.svg';
import  Parking  from '../menu/images/parking-solution.svg';
import  Health  from '../menu/images/e-health.svg';
import  Tracking  from '../menu/images/tracker-red.svg';
import  Enviroment  from '../menu/images/enviroment.svg';
import  Switch  from '../menu/images/AQS.svg';
import  Timmer  from '../menu/images/meshlium.svg';
import  Controller  from '../menu/images/plug-and-sense.svg';
import  iot  from '../menu/images/reports.svg';
import  mobile  from '../menu/images/mysignals.svg';
import  rad  from '../menu/images/rad.svg';
import  software  from '../menu/images/projects.svg';
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
  
}))
const MyBox= styled(Grid)(({ theme }) => ({           
  marginTop: "10px",
  direction:"row",
  justifyContent:"flex-end",
  alignItems:"center",
  
}))
const MyBox2= styled(Grid)(({ theme }) => ({           
  marginTop: "10px",
  direction:"row",
  justifyContent:"flex-end",
  alignItems:"center",
  
}))
const MyGrid= styled(Grid)(({ theme }) => ({           
  margin: "5px",
 
 
  
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
           <MyBox container onMouseLeave={() => setValue(index)} >
         <Tooltip title="Switch">
          <IconButton size="small" sx={{ ml: 2 }} >
          <img src={Switch} alt="water" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Timmer">
          <IconButton size="small" sx={{ ml: 2 }}>
          <img src={Timmer} alt="water" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Controller">
          <IconButton  size="small" sx={{ ml: 2 }}>
          <img src={Controller} alt="water" />
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
             <img src={City} alt="water" />
      </IconButton>
            </Tooltip>
            <Tooltip title="Water">
              <IconButton size="small" sx={{ ml: 2 }} onClick={()=> navigate('Water')}>
              <img src={Water} alt="water"  />
              </IconButton>
            </Tooltip>
            <Tooltip title="Hotel">
              <IconButton  size="small" sx={{ ml: 2 }} onClick={()=> navigate('Hotels')}>
              <img src={Tourism} alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Parking">
              <IconButton size="small" sx={{ ml: 2 }} onClick={()=> navigate('Parking')}>
              <img src={Parking} alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Industry">
              <IconButton size="small" sx={{ ml: 2 }}onClick={()=> navigate('Industry')}>
              <img src={Industry} alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Communities">
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={Enviroment} alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Parks&Resorts">
              <IconButton size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}>P</Avatar>
              </IconButton>
            </Tooltip>
            <Tooltip title="Tracking">
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={Tracking} alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Digital Signage">
              <IconButton size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}>D</Avatar>
              </IconButton>
            </Tooltip>
            <Tooltip title="Hospital">
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={Health} alt="water" />
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
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={iot} alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Mob Applications">
              <IconButton size="small" sx={{ ml: 2 }}>
              <img src={mobile} alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="R&D">
              <IconButton  size="small" sx={{ ml: 2 }}>
              <img src={rad} alt="water" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Software integration&D">
              <IconButton  size="small" sx={{ ml: 2 }}>
              <img src={software} alt="water" />
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
         <Grid item xs={4}>
         <div  data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
             <img src={Logo}  alt="Logo" />
             </div>
        </Grid>
        <Grid   item xs={8} >
        <Grid container
  direction="row"
  justifyContent="flex-end"
  alignItems="center">
      <Tabs  value={value} onChange={handleChange}  aria-label="nav tabs example">
        <LinkTab    onMouseEnter={() => setValue(0)} onClick={()=> navigate('/')}   onMouseLeave={() => setValue(index)} label="Home"  />
        <LinkTab  onMouseEnter={() => setValue(1)} onClick={()=> navigate('/Aboutus')} onMouseLeave={() => setValue(index)} label="About Us" />
        <LinkTab onMouseEnter={() =>  setValue(2)}  label="Product" href="/spam" />
        <LinkTab id="trigger"  onMouseEnter={() => setValue(3)}  label="Solution" href="/drafts" />
        <LinkTab  onMouseEnter={() => setValue(4)}  label="Services" href="/trash" />
        <LinkTab  onMouseEnter={() => setValue(5)}  onMouseLeave={() => setValue(index)}label="Contact us" href="/spam" />
  
      </Tabs>
      
      </Grid>
        </Grid>

        </MyGrid>
        {submenu()}
    </Box>
    
  );
}

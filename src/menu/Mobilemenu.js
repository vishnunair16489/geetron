import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import {useNavigate} from 'react-router-dom';
import Switch from  '../menu/images/switch.png';
import Timmer from  '../menu/images/timer.png';
import Controller from  '../menu/images/controller.png';
import Locks from  '../menu/images/locks.png';
import Relays from  '../menu/images/relay.png';
import Logo from  '../menu/images/logodark.png';

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


import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionSummary1 = styled((props) => (
  <MuiAccordionSummary  
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2.5),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
  
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    '& .css-ciy9n4-MuiPaper-root-MuiAppBar-root':
    {
      backgroundColor:'#FFFFFF'
    },
   
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
  background:'#FFFFFF'
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));



export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = (value) => {
    setOpen(false);
    navigate(value)
  };
  const [expanded, setExpanded] = React.useState('0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
  
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          <img src={Logo} width='100px' alt="Logo" onClick={()=> navigate('/')} />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{ color: '#1268B3' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      
      </Main>
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary1   aria-controls="panel5a-content" id="panel5a-header">
          <Typography button  onClick={()=> handleDrawerClose("/")  }>Home</Typography>
        </AccordionSummary1>      
      </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary1   aria-controls="panel4a-content" id="panel4a-header">
          <Typography  button  onClick={()=> handleDrawerClose('/Aboutus')}>About us</Typography>
        </AccordionSummary1>      
      </Accordion>
        <Divider />
      
 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary   aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
         
         <ListItem button key="switch"  onClick={()=> handleDrawerClose('Switch')}>
           <ListItemIcon>
           <img src={Switch}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="Switches" />
         </ListItem>
         <ListItem button key="timmer" onClick={()=> handleDrawerClose('Timmer')}>
           <ListItemIcon>
           <img src={Timmer}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="Timers" />
         </ListItem>
         <ListItem button key="controller" onClick={()=> handleDrawerClose('Controller')}>
           <ListItemIcon>
           <img src={Controller}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="Controllers" />
         </ListItem>
         <ListItem button key="Locks" onClick={()=> handleDrawerClose('Locks')}>
           <ListItemIcon>
           <img src={Locks}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="Locks" />
         </ListItem>
         <ListItem button key="Relays" onClick={()=> handleDrawerClose('Relay')}>
           <ListItemIcon>
           <img src={Relays}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="Relays" />
         </ListItem>
        
       
     </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary  aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Solutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
         
         <ListItem button key="ghomes"  onClick={()=> handleDrawerClose('Ghomes')}>
           <ListItemIcon>
           <img src={Ghome}  height='30px'  alt="ghomes" />
           </ListItemIcon>
           <ListItemText primary="GHomes" />
         </ListItem>
         <ListItem button key="water" onClick={()=> handleDrawerClose('Water')}>
           <ListItemIcon>
           <img src={Water}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="Water" />
         </ListItem>
         <ListItem button key="hotel" onClick={()=> handleDrawerClose('Hotels')}>
           <ListItemIcon>
           <img src={Hotel}  height='30px'  alt="hotels" />
           </ListItemIcon>
           <ListItemText primary="Hotel" />
         </ListItem>
         <ListItem button key="parking"  onClick={()=> handleDrawerClose('Parking')}>
           <ListItemIcon>
           <img src={Parking}  height='30px'  alt="parking" />
           </ListItemIcon>
           <ListItemText primary="Parking" />
         </ListItem>
         <ListItem button key="Industry" onClick={()=> handleDrawerClose('Industry')}>
           <ListItemIcon>
           <img src={Industry}  height='30px'  alt="industry" />
           </ListItemIcon>
           <ListItemText primary="Industry" />
         </ListItem>
         <ListItem button key="Communities" onClick={()=> handleDrawerClose('Community')}>
           <ListItemIcon>
           <img src={Community}  height='30px'  alt="community" />
           </ListItemIcon>
           <ListItemText primary="Community" />
         </ListItem>
         <ListItem button key="park" onClick={()=> handleDrawerClose('Park')}>
           <ListItemIcon>
           <img src={Resort}  height='30px'  alt="park" />
           </ListItemIcon>
           <ListItemText primary="Park & Resort" />
         </ListItem>
         <ListItem button key="tracking"  onClick={()=> handleDrawerClose('Tracking')}>
           <ListItemIcon>
           <img src={Tracking}  height='30px'  alt="tracking" />
           </ListItemIcon>
           <ListItemText primary="Tracking" />
         </ListItem>
         <ListItem button key="digitalsignage" onClick={()=> handleDrawerClose('Signage')}>
           <ListItemIcon>
           <img src={Signage}  height='30px'  alt="signage" />
           </ListItemIcon>
           <ListItemText primary="Digital Signage" />
         </ListItem>
         <ListItem button key="Hospital" onClick={()=> handleDrawerClose('Hospital')}>
           <ListItemIcon>
           <img src={Hospital}  height='30px'  alt="hospital" />
           </ListItemIcon>
           <ListItemText primary="Hospital" />
         </ListItem>
        
       
     </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary  aria-controls="panel3d-content" id="panel3d-header">
        <Typography>Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
         
         <ListItem button key="iot" onClick={()=> handleDrawerClose('Dashboard')}>
           <ListItemIcon>
           <img src={Dashboard}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="Iot Dashboard" />
         </ListItem>
         <ListItem button key="mobile"onClick={()=> handleDrawerClose('Mobile')}>
           <ListItemIcon>
           <img src={Application}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="Mobile Application" />
         </ListItem>
         <ListItem button key="r&d" onClick={()=> handleDrawerClose('R&D')}>
           <ListItemIcon>
           <img src={RD}  height='30px'  alt="water" />
           </ListItemIcon>
           <ListItemText primary="R&D" />
         </ListItem>
       
       
     </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary1   aria-controls="panel6a-content" id="panel6a-header">
          <Typography onClick={()=> handleDrawerClose("Contact")  }>Contact us</Typography>
        </AccordionSummary1>      
      </Accordion>
      </Drawer>
    </Box>
  
   
  );
}
 
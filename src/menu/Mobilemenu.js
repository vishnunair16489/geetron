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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import {useNavigate} from 'react-router-dom';
import Logo from  '../menu/images/logo.png';
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

  const handleDrawerClose = () => {
    setOpen(false);
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
          <img src={Logo} width='100px' alt="Logo" />
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
        <AccordionSummary   expandIcon={<MailIcon />} aria-controls="panel5a-content" id="panel5a-header">
          <Typography button  onClick={()=> navigate('/')}>Home</Typography>
        </AccordionSummary>      
      </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary   expandIcon={<MailIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography  button  onClick={()=> navigate('/Aboutus')}>About us</Typography>
        </AccordionSummary>      
      </Accordion>
        <Divider />
      
 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary   expandIcon={<MailIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
         
         <ListItem button key="switch">
           <ListItemIcon>
              <InboxIcon /> 
           </ListItemIcon>
           <ListItemText primary="Switch" />
         </ListItem>
         <ListItem button key="timmer">
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Timmer" />
         </ListItem>
         <ListItem button key="controller">
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Controller" />
         </ListItem>
        
       
     </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary  expandIcon={<MailIcon />} aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Solution</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
         
         <ListItem button key="ghomes"  onClick={()=> navigate('Ghomes')}>
           <ListItemIcon>
              <InboxIcon /> 
           </ListItemIcon>
           <ListItemText primary="GHomes" />
         </ListItem>
         <ListItem button key="water" onClick={()=> navigate('Water')}>
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Water" />
         </ListItem>
         <ListItem button key="hotel" onClick={()=> navigate('Hotels')}>
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Hotel" />
         </ListItem>
         <ListItem button key="parking">
           <ListItemIcon>
              <InboxIcon /> 
           </ListItemIcon>
           <ListItemText primary="Parking" />
         </ListItem>
         <ListItem button key="Industry">
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Industry" />
         </ListItem>
         <ListItem button key="Communities">
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Communities" />
         </ListItem>
         <ListItem button key="park">
           <ListItemIcon>
              <InboxIcon /> 
           </ListItemIcon>
           <ListItemText primary="Park&Resort" />
         </ListItem>
         <ListItem button key="tracking"  onClick={()=> navigate('Tracking')}>
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Tracking" />
         </ListItem>
         <ListItem button key="digitalsignage" onClick={()=> navigate('Signage')}>
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Digital Signage" />
         </ListItem>
         <ListItem button key="Hospital" onClick={()=> navigate('Hospital')}>
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Hospital" />
         </ListItem>
        
       
     </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary  expandIcon={<MailIcon />} aria-controls="panel3d-content" id="panel3d-header">
        <Typography>Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
         
         <ListItem button key="iot">
           <ListItemIcon>
              <InboxIcon /> 
           </ListItemIcon>
           <ListItemText primary="Iot Dashboard" />
         </ListItem>
         <ListItem button key="mobile">
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Mobile Application" />
         </ListItem>
         <ListItem button key="r&d">
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="R&D" />
         </ListItem>
         <ListItem button key="software">
           <ListItemIcon>
              <MailIcon />
           </ListItemIcon>
           <ListItemText primary="Software Integration" />
         </ListItem>
       
     </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary   expandIcon={<MailIcon />} aria-controls="panel6a-content" id="panel6a-header">
          <Typography>Contact us</Typography>
        </AccordionSummary>      
      </Accordion>
      </Drawer>
    </Box>
   
  );
}
 
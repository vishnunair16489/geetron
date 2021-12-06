import * as React from 'react';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import switchimg from '../Hotel/images/switchsmall.png';
import Rms from '../Hotel/images/rmssmall.png'
import Dimmerimg from '../Hotel/images/dimmersmall.png';
import Relayimg from '../Hotel/images/relaysmall.png';
import Switch from  './Switch';
import RMS from  './RMS';
import Relay from  './Relay';
import Dimmer from  './Dimmer';
import { Divider } from '@mui/material';
import Sensor from  './Sensor';
import Curtains from  './Curtains';
import Roomservice from  './Roomservice';
import Thermostat from  './Thermostat';
import radar from '../Hotel/images/radarsmall.png'
import thermostatimg from '../Hotel/images/thermostatsmall.png'
import Roomserviceimg from '../Hotel/images/roomservicesmall.png'
import Curtainsimg from '../Hotel/images/curtainssmall.png'
import { Grid } from '@mui/material';
const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  
  const MyImageList = styled(ImageList)(({ theme }) => ({

    [theme.breakpoints.up("xs")]: {
    
      cols:2
    }, 
    [theme.breakpoints.up("sm")]: {
    
      cols:4
    }, 
    [theme.breakpoints.up("md")]: {
     
     
      cols:4
    },
  
  }));
  
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  const Header = styled(Divider)(({ theme }) => ({
  
    fontSize: '1.5em',
    minWidth: '10em',
    color: '#1268B3',
    textAlign: 'center',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    margin:'50px'  
    
  
  
  }));
export default function MasonryImageList() {
    
const [value, setValue] = React.useState(0);
const submenuswitch = () => {
  switch(value) {
    case 1:
      return    <React.Fragment>
         <Switch state='true'  />        
      </React.Fragment>;
      case 2:
        return    <React.Fragment>
           <RMS state='true'  />          
        </React.Fragment>;
       case 3:
        return    <React.Fragment>
          <Relay state='true'  />
              </React.Fragment>;           
        case 4:
           return    <React.Fragment>
           <Dimmer state='true'  />
                  </React.Fragment>; 
                    case 5:
                        return    <React.Fragment>
                           <Sensor state='true'  />        
                        </React.Fragment>;
                        case 6:
                          return    <React.Fragment>
                             <Curtains state='true'  />          
                          </React.Fragment>;
                         case 7:
                          return    <React.Fragment>
                            <Roomservice state='true'  />
                                </React.Fragment>;           
                          case 8:
                             return    <React.Fragment>
                             <Thermostat state='true'  />
                                    </React.Fragment>; 
                                
              
         default:
          return '';
      };
    }
  return (
      <div>
          <Header textAlign="center">Products </Header>
        <Grid container    justifyContent= "center" alignItems= "center"  >
        <Grid item xs={12} sm={12} md={8}>
        <div data-aos="fade-right">
    <Box sx={{ }}>
      <MyImageList variant="woven"  gap={10}>
        {image.map((item) => (
         
          <ImageButton
          focusRipple
          key={item.title}
         
          onClick={() =>  setValue(item.index)}>
        <ImageListItem key={item.img}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
             
            />
          </ImageListItem>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {item.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
       
        ))}
      </MyImageList>
    </Box></div>
    </Grid> 
    </Grid>
      {submenuswitch()}
      </div>
  );
}
 
const image = [
    {
        url: switchimg, 
        title: 'Swtich',
        width: '25%',
        index:1
      },
      {
        url: Rms, 
        title: 'RMS',
        width: '25%',
        index:2
      },
      {
        url: Relayimg, 
        title: 'Relay',
        width: '25%',
        index:3
      },
      {
        url: Dimmerimg, 
        title: 'Dimmer',
        width: '25%',
        index:4
      },
      {
        url: radar, 
        title: 'Sensor',
        width: '25%',
        index:5
      },
      {
        url: Curtainsimg, 
        title: 'Curtains',
        width: '25%',
        index:6
      },
      {
        url: Roomserviceimg, 
        title: 'Room Service',
        width: '25%',
        index:7
      },
      {
        url: thermostatimg, 
        title: 'Thermostat',
        width: '25%',
        index:8
      },
];

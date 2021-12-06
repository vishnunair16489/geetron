import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Curtainsimg from '../Hotel/images/curtainssmall.png'
import Sensor from  './Sensor';
import Curtains from  './Curtains';
import Roomservice from  './Roomservice';
import Thermostat from  './Thermostat';
import radar from '../Hotel/images/radarsmall.png'
import thermostatimg from '../Hotel/images/thermostatsmall.png'
import Roomserviceimg from '../Hotel/images/roomservicesmall.png'
const images = [
  {
    url: radar, 
    title: 'Sensor',
    width: '25%',
    index:1
  },
  {
    url: Curtainsimg, 
    title: 'Curtains',
    width: '25%',
    index:2
  },
  {
    url: Roomserviceimg, 
    title: 'Room Service',
    width: '25%',
    index:3
  },
  {
    url: thermostatimg, 
    title: 'Thermostat',
    width: '25%',
    index:4
  },
];

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

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});



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

export default function ButtonBases() {
  
const [value, setValue] = React.useState(0);
  const submenuswitch = () => {
    switch(value) {
      case 1:
        return    <React.Fragment>
           <Sensor state='true'  />        
        </React.Fragment>;
        case 2:
          return    <React.Fragment>
             <Curtains state='true'  />          
          </React.Fragment>;
         case 3:
          return    <React.Fragment>
            <Roomservice state='true'  />
                </React.Fragment>;           
          case 4:
             return    <React.Fragment>
             <Thermostat state='true'  />
                    </React.Fragment>; 
                
           default:
            return '';
        };
      }
   
  return (
    <div>
    <div data-aos="fade-up" data-aos-easing="ease-out-quart" >

    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            backgroundSize:'cover',
          }}
          onClick={() =>  setValue(image.index)}>
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
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
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    {submenuswitch()}
    </div></div>
  );
}
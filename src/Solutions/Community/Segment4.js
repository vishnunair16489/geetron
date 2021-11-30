import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/panic.jpg'
import { Divider,  Grid, Stack ,Avatar} from '@mui/material';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center", 
}));


const MyDivider = styled(Divider)(({ theme }) => ({

  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  margin: "50px 0px",
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  [theme.breakpoints.down("xs")]: {
  
    fontSize: '1.2em',
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    fontSize: '1.5em',
  },

}));


const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="left">Modules</MyDivider>
        </div>
        <MyGrid container spacing={2} >
        <div data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="100" >
       <a href='#section5'>  <Avatar alt="Remy Sharp" src={segment2img} sx={{ width: 100, height:100   }} />  </a>
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="300" >
        <Avatar alt="Remy Sharp" src={segment2img} sx={{ width: 100, height:100   }} />
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="500" >
        <Avatar alt="Remy Sharp" src={segment2img} sx={{ width: 100, height:100   }} />
        </div>
        <div data-aos="fade-up"  data-aos-easing="ease-in-back" data-aos-delay="700" >
        <Avatar alt="Remy Sharp" src={segment2img} sx={{ width: 100, height:100   }} />
        </div>
        <div data-aos="fade-up"  data-aos-easing="ease-in-back" data-aos-delay="900" >
        <Avatar alt="Remy Sharp" src={segment2img} sx={{ width: 100, height:100   }} />
        </div>
        <div data-aos="fade-up"  data-aos-easing="ease-in-back" data-aos-delay="1100" >
        <Avatar alt="Remy Sharp" src={segment2img} sx={{ width: 100, height:100   }} />
        </div>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
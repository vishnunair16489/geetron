import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/panic.jpg'
import { Divider,  Grid, Stack ,Chip,Avatar} from '@mui/material';

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

const MypicGrid = styled(Grid)(({ theme }) => ({

    borderRadius:"50%",
  
   [theme.breakpoints.up("xs")]: {
    
    borderRadius:"0%"
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    borderRadius:"50%"
  },
  
    
  }));

const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="left">Modules</MyDivider>
        </div>
        <MyGrid container spacing={2} >
        <Avatar alt="Remy Sharp" src={segment2img} sx={{ width: 100, height:100   }} />
        <Chip label="Clickable" onClick={null} />
        <Chip label="Clickable" onClick={null} />
        <Chip label="Clickable" onClick={null} />
        <Chip label="Clickable" onClick={null} />
        <Chip label="Clickable" onClick={null} />
      </MyGrid>
      </Stack>

 

  );
}

export default App;
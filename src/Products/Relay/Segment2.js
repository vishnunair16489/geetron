import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Relay/images/eightchannelrelay.png'
import { Grid, Stack,Divider,Typography } from '@mui/material';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 
  padding:'0px 10px',

}));
const ContentGrid = styled(Grid)(({ theme }) => ({
   padding:'0px 10px',
   justifyContent: "flex-start",
   alignItems: "flex-start", 

}));
const Myp = styled(Typography)(({ theme }) => ({
 
  fontFamily: 'SourceSansPro',

}));
const MypicGrid = styled(Grid)(({ theme }) => ({

 
  height:'300px',
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
    alignItems: "flex-end", 
   [theme.breakpoints.up("md")]: {
  
    justifyContent: "center",
    alignItems: "center", 
  },

  [theme.breakpoints.up("md")]: {
   
    justifyContent: "center",
    alignItems: "flex-start", 
  },

 
  }}));
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
       
       <MyDivider textAlign="right">8 Channel Relay</MyDivider>
        <MyGrid container spacing={2} >
      
      <MypicGrid container item xs={12} md={4}>
      <div data-aos="flip-right"   data-aos-delay="200" >
      <img src={img} width='300' alt="logo"/>
      </div>
      </MypicGrid>
    
      <MyGrid item xs={12} md={6}>
   
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
        
      
          
              
             
                <Grid container direction="row" spacing={0}>
               
                  
               
                  <ContentGrid container item  xs={12}  sm={6} md={6}> 
                    <div  data-aos="fade-right"   data-aos-delay="400" >
                  <Myp>
                  <b>Specifications</b>
                  <ul>

<li>Supply 24V DC 500mA</li>
<li>Output 7 latching relay </li>
<li>Working temperature: -20~+70℃</li>
<li> Mechanical override</li>
<li>communication RS485/Modbus RTU</li>
</ul>
                  </Myp>  
                   </div>
                  </ContentGrid>
               
                  </Grid>
           
              
          
            </Grid>
       
      
            </Grid>
           
      </MyGrid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
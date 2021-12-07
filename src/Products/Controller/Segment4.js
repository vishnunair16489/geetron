import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Controller/images/dali.png'
import { Grid, Stack,Divider } from '@mui/material';
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
    alignItems: "center", 
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
  
const Myp = styled('p')(({ theme }) => ({
 
 
  fontFamily: 'SourceSansPro',
  padding:'10px',
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 20px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
 }));
const App = () => {
  return (

  
      <Stack>
       
       <MyDivider textAlign="right">DALI</MyDivider>
        <MyGrid container spacing={2} >
      
      <MypicGrid container xs={12} md={4}>
      <div data-aos="flip-right"   data-aos-delay="200" >
      <img src={img} width='300' alt="logo"/>
      </div>
      </MypicGrid>
    
      <MyGrid item xs={12} md={6}>
   
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
        
      
          
              
             
                <Grid container direction="row" spacing={0}>
                <ContentGrid item container  xs={12}  sm={6} md={6}>
                <div  data-aos="fade-right"  data-aos-delay="200" >
                <Myp> <b>Features</b>
                <ul>
                  <li>Programmable dali controller</li>
                  <li>Built in micro processor</li>
                  <li>Address setting switch preset inside</li>
                  <li> 9 Digital sensor interface</li>
                  <li>4 Analog Dimming Control </li>
                  <li>Direct Interface for  bell and welcome light</li>
                  <li>Simultanious DALI and Modbus interface</li>
                  </ul>
                  </Myp>
                  </div>
                  </ContentGrid>
                  
               
                  <ContentGrid container item  xs={12}  sm={6} md={6}> 
                    <div  data-aos="fade-right"   data-aos-delay="400" >
                  <Myp>
                  <b>Specifications</b>
                  <ul>

<li>Supply: 150-240V 50 50Hz 0.25A</li>
  <li>Output: Dali with power, 1 No NC Relay,4 No Relay,4 Analog 0-10V Output</li>

  <li>Input: 9 dry contact input</li>
  <li>Interface: RS485 Modbus RTU </li>
  <li>Working temperature: -20~+70℃</li>
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
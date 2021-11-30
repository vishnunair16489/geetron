import React from 'react'
import { styled } from '@mui/material/styles';
import img from '../Switch/images/mechanical.png'
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
  textAlign: 'justify',
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
       
       <MyDivider textAlign="right">Mechanical Switches</MyDivider>
        <MyGrid container spacing={2} >
      
      <MypicGrid container xs={12} md={4}>
      <div data-aos="flip-left"  data-aos-delay="200" >
      <img src={img} width='200' alt="logo"/>
      </div>
      </MypicGrid>
    
      <MyGrid item xs={12} md={6}>
   
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
        
      
          
              
             
                <Grid container direction="row" spacing={0}>
                <ContentGrid item container  xs={12}  sm={6} md={6}>
                <div  data-aos="fade-right"   data-aos-delay="200" >
                <Myp> <b>Features</b>
                <ul>
                  <li>Work with Alexa and Google home</li>
                    <li>Set time in advance and light can still be used normally without network</li>
                    <li>Easy installation</li>
                    <li>Safety Protection</li>
                    <li>Our Services</li>
                  </ul>
                  </Myp>
                  </div>
                  </ContentGrid>
                  
               
                  <ContentGrid container item  xs={12}  sm={6} md={6}> 
                    <div  data-aos="fade-right"    data-aos-delay="400" >
                  <Myp>
                  <b>Specifications</b>
                  <ul>
                  <li>Max Voltage: 110V-220V</li>
                    <li>Max Current: 5A-10A</li>
                    <li>Working temperature: -20~+70℃</li>
                    <li>1 million contact life </li>
                    <li>Wireless Standard: IEEE 802.11 B/g/n 2.4G</li>
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
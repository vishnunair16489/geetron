
import { styled } from '@mui/material/styles';
import img from '../Locks/images/locks.png'
import { Grid, Stack,Divider, Typography } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 

}));
const ContentGrid = styled(Grid)(({ theme }) => ({
   padding:'0px 10px',
   justifyContent: "flex-start",
   alignItems: "flex-start", 
   fontFamily: 'SourceSansPro',

}));
const Myp = styled(Typography)(({ theme }) => ({
 
  fontFamily: 'SourceSansPro',

}));
const MyParaGrid = styled(Grid)(({ theme }) => ({
  
  fontFamily: 'SourceSansPro',
  maxWidth:'1000px',
  textAlign:'justify',
  padding:'0px 20px'

}));
const MypicGrid = styled(Grid)(({ theme }) => ({

 
  height:'300px',
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
    alignItems: "center", 
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
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (

  
      <Stack>
       
       <MyDivider textAlign="right">Locks</MyDivider>
   
        <MyGrid container spacing={0} >
        <div  data-aos="fade-down">
        <MyParaGrid >Geetron provides a wide variety of locks with different technologies like Rfid, fingerprint, number lock along with wireless connectivity like Wifi, Rs485, Zigbee, zwave
Geetron lock is a next-generation technology that never compromises its security. It allows you to get information about the visitors and check door status from anywhere.</MyParaGrid>
   </div>
         <MypicGrid container xs={12} md={6}>
      <div data-aos="flip-right"   data-aos-delay="200" >
      <img src={img} width='150' alt="logo"/>
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

                    <li>Unlock method: RFID,Key</li>
                    <li> Power Supply:	 4pcs AAA Alkaline Batteries, 12-18 months duration </li>
                    <li>Working temperature: -20~+70℃</li>
                    <li>  Working Humidity	 20%-90%RH</li>
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
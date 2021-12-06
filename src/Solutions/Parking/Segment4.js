import React from 'react'
import { styled } from '@mui/material/styles';
import Parking from './images/parkingsystem.png'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
import { padding } from '@mui/system';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${Parking})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
 
  height: '250px'
 
 

  
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


const Mypara = styled(Typography)(({ theme }) => ({


  fontFamily: 'SourceSansPro',
  padding:'0px 15px',
  textAlign:'justify'
 
  
 

}))
const Mytext = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'left',
  color: '#1268B3',
  fontWeight: 'bold',
  fontFamily: 'SourceSansPro',
  padding:'15px'
}));
const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="right">Smart parking benefits</MyDivider>
        </div>
        <MyGrid container spacing={2} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item container xs={12} md={6} spacing={2}>
     
          
          <Grid item  xs={12}  sm={4} md={4}>
          <Mytext >
          <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="200" >
          Parking Counter system
              
                <Mypara color="text.secondary">
                <ul>
                <li>Loop Sensing</li>
                            <li>Display Single</li>
                            <li>Display Tower</li>       

                  
              </ul>
              </Mypara>
             </div>
              </Mytext>
        
          
          </Grid>
          <Grid item  xs={12} sm={4} md={4}>
         
       
         <Mytext >
         <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="300" >
         Parking management System
              
               <Mypara color="text.secondary">
               <ul>
               <li>Parking Lot Senser</li>
                            <li>Display Single</li>
                            <li>Display Tower</li>            

                 
             </ul>
             </Mypara>
             </div>
              </Mytext>
         
         
         </Grid>
         <Grid item  xs={12} sm={4} md={4}>
         
      
         <Mytext>
         <div data-aos="flip-left"  data-aos-easing="ease-out-quart" data-aos-delay="400" >
         Parking Billing System
            
               <Mypara color="text.secondary">
               <ul>
               <li>Billng System/kisok</li>
                            <li>Token Printer</li>
                            <li>Barrier Controller</li>          

                 
             </ul>
            </Mypara>
             </div>
              </Mytext>
          
        
      
            </Grid>
          
      </MyGrid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
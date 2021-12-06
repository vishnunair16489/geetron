import React from 'react'
import { styled } from '@mui/material/styles';
import Parking from './images/parkingsystem.png'
import Parkingcounter from './images/parkingcounter.jpg'
import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';
import { Divider, Typography, Grid, Stack,Box  } from '@mui/material';

const MyGrid = styled(Grid)(({ theme }) => ({
 
  alignItems: "flex-start",
  justifyContent: "center",



}));

const Header = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  color: '#1268B3',
  textAlign: 'center',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  margin:'50px 0px'
  


}));
const MyStack = styled(Stack)(({ theme }) => ({

  maxWidth: "1200px",

}));
const Mytext = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'left',
  color: '#1268B3',
  fontWeight: 'bold',
  fontFamily: 'SourceSansPro'
}));
const Mypara = styled(Typography)(({ theme }) => ({

  fontSize: '0.9em',
  textAlign: 'left',
 
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  [theme.breakpoints.down("xs")]: {
    width:'600px',
   },
    [theme.breakpoints.up("md")]: {
    
    alignItems: "center",
    justifyContent: "center",
  
   },
}))


const MyCard = styled(Typography)(({ theme }) => ({

 
   backgroundColor:'white ',
   [theme.breakpoints.down("md")]: {
 
   alignItems: "center",
   justifyContent: "center",

 
  },

}))
const MyCardmedia = styled(CardMedia)(({ theme }) => ({


  [theme.breakpoints.up("xs")]: {

      width:'200px',


 },
 [theme.breakpoints.up("md")]: {

  width:'150px',
 },


}))

const App = () => {
  return (

  
        <MyGrid container>

          <MyStack spacing={0}>
            <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
              <Header textAlign="center">Models </Header>
            </div>
          
        
              <Grid container direction='row'   justifyContent="center"  alignItems="center" spacing={0}>
                <Grid item >
                <img
                        height='180px'
                        src={Parking}
                        alt="green iguana"  
                      />
                </Grid>
                <Grid container   justifyContent="center"  alignItems="center" >
          
          <Grid  container   justifyContent="center"  alignItems="center"  item xs={12} sm={4} md={4}>
         
       
          <Mytext width='350px' >
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
          <Grid container   justifyContent="center"  alignItems="center" item  xs={12} sm={4} md={4}>
         
       
         <Mytext width='350px'>
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
         <Grid container  justifyContent="center"  alignItems="center" item  xs={12} sm={4} md={4}>
         
      
         <Mytext width='350px'>
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
        
      </Grid>
                 
              </Grid>
           

          </MyStack>

        </MyGrid>
    

  );
}

export default App;
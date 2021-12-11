import React from 'react';
import { styled } from '@mui/material/styles';
import Logo from  '../menu/images/logodark.png';

import Segment9 from '../Homepage/Segment10';
import Fb from  '../Homepage/images/facebook.png';
import Youtube from  '../Homepage/images/youtube.png';
import Linkin from  '../Homepage/images/linkedin.png';
import Twitter from  '../Homepage/images/twitter.png';
import Insta from  '../Homepage/images/instagram.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Hidden,Stack,Link,CssBaseline} from '@mui/material';


const MyGrid = styled(Grid)(({ theme }) => ({  
     marginTop: "28px",
      alignItems:"center",
      backgroundPosition:'center',
     
      
  }));

  const MyStack = styled(Stack)(({ theme }) => ({           
  
   
  }));
  const MyLink = styled(Link)(({ theme }) => ({           
 fontSize:'0.7em'
   
  }));
  const MyFooterblue = styled(Grid)(({ theme }) => ({  
   
      alignItems:"center",       
      backgroundPosition:'center',
      height:'10px',
      backgroundColor:"#1268B3"

      
  }));
  const Myfootergreen = styled(Grid)(({ theme }) => ({  
 
      alignItems:"center",       
      backgroundPosition:'center',
      height:'20px',
      backgroundColor:"#54D692"

      
  }));

  const Item = styled(Grid)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const App = ()=>{
  return(  
      <MyGrid container   justifyContent="center"  alignItems="center">
       <CssBaseline/>
            <Hidden mdDown>
          
          <MyStack style={{marginLeft:'50px'}} direction="row"  spacing={5}>
        
              <MyStack style={{marginTop:'20px'}}  spacing={0.5}>
              Product
              <MyLink href="Switch" underline="none">{'Switch'}</MyLink>
              <MyLink href="Timmer" underline="none">{'Timer'}</MyLink>
              <MyLink href="Controller" underline="none">{'Controller'}</MyLink>
              <MyLink href="Locks" underline="none">{'Locks'}</MyLink>
              <MyLink href="Relay" underline="none">{'Relays'}</MyLink>
              </MyStack>
           
             
            
              <MyStack style={{marginTop:'20px'}} spacing={0.5}>
              Solution
              <MyLink href="/Ghomes" underline="none">{'GHomes'}</MyLink>
              <MyLink href="/Water" underline="none">{'Water'}</MyLink>
              <MyLink href="Hotel" underline="none">{'Hotel'}</MyLink>
              <MyLink href="Parking" underline="none">{'Parking'}</MyLink>
              <MyLink href="Industry" underline="none">{'Industry'}</MyLink>
              <MyLink href="Community" underline="none">{'Communities'}</MyLink>
              <MyLink href="Park" underline="none">{'Park&Rsort'}</MyLink>
              <MyLink href="Tracking" underline="none">{'Tracking'}</MyLink>
              <MyLink href="Signage" underline="none">{'Digital Signage'}</MyLink>
              <MyLink href="Hospital" underline="none">{'Hospital'}</MyLink>
           
              </MyStack>
              <MyStack style={{marginTop:'20px'}}  spacing={0.5}>
                Services
              <MyLink href="Dashboard" underline="none">{'Iot Dashboard'}</MyLink>
              <MyLink href="Mobile" underline="none">{'Mobile Application'}</MyLink>
              <MyLink href="R&D" underline="none">{'R&D'}</MyLink> 
             
           
              </MyStack>
              <MyStack style={{marginTop:'20px'}} spacing={0.5}>
                Company
                <MyLink href="/" underline="none">{'Home'}</MyLink>
              <MyLink href="Aboutus" underline="none">{'About Us'}</MyLink>
              <MyLink href="Contact" underline="none">{'Contact Us'}</MyLink>     
             
           
              </MyStack>
              <Segment9/>
              </MyStack>
            

              <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item container xs={4}>
          <Item>  <Grid     item xs={4}>
             <img src={Logo}  alt="Logo" width='100px' />
            </Grid></Item>
        </Grid>
        <Grid item xs={4}>
          <Item> <Link  style={{fontSize:'1em',color:'#54D692'}} underline="none">{'© Geetron Iot Solution'}</Link>
        </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>  <Link  style={{fontSize:'1em',color:'#54D692'}} underline="none">{'Follow us'}</Link>
     
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Fb}  alt="Logo" width='20px' height='20px' /></Link>                  
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Linkin}  alt="Logo" width='20px' height='20px' /></Link>  
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Insta}  alt="Logo" width='20px' height='20px'/></Link>       
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Twitter}  alt="Logo" width='20px' height='20px'/></Link>   
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Youtube}  alt="Logo" width='20px' height='20px' /></Link></Item>
        </Grid>
      </Grid>
    </Box>
             </Hidden>
              <MyFooterblue></MyFooterblue>
              <Myfootergreen></Myfootergreen>
        
      </MyGrid>

);
}

export default App;
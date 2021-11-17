import React from 'react';
import { styled } from '@mui/material/styles';
import Logo from  '../menu/images/logo.png';

import Fb from  '../Homepage/images/facebook.png';
import Youtube from  '../Homepage/images/youtube.png';
import Linkin from  '../Homepage/images/linkedin.png';
import Twitter from  '../Homepage/images/twitter.png';
import Insta from  '../Homepage/images/instagram.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Hidden,Stack,Divider ,Link,CssBaseline} from '@mui/material';

const MyGrid = styled(Grid)(({ theme }) => ({  
     marginTop: "28px",
      alignItems:"center",
      backgroundColor:"#EEEEEE",
      backgroundPosition:'center',
     
      
  }));

  const MyStack = styled(Stack)(({ theme }) => ({           
    margin: "10px 0px 0px 0px",
    maxWidth:"1200px",
   
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
  const Header = styled(Divider)(({ theme }) => ({

    fontSize: '1.5em',
    minWidth: '10em',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    
  
  
  }));
  const Item = styled(Grid)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const App = ()=>{
  return(  
      <MyGrid>
       <CssBaseline/>
            <Hidden smDown>
          
          <MyStack style={{marginLeft:'50px'}} direction="row"  spacing={5}>
          <MyStack  spacing={5}></MyStack>
         
              <MyStack style={{marginTop:'20px'}}  spacing={0.5}>
              Product
              <MyLink href="#" underline="none">{'Switch'}</MyLink>
              <MyLink href="#" underline="none">{'Timmer'}</MyLink>
              <MyLink href="#" underline="none">{'Controller'}</MyLink>
              </MyStack>
           
            
            
              <MyStack style={{marginTop:'20px'}} spacing={0.5}>
              Solution
              <MyLink href="/Ghomes" underline="none">{'GHomes'}</MyLink>
              <MyLink href="/Water" underline="none">{'Water'}</MyLink>
              <MyLink href="#" underline="none">{'Hotel'}</MyLink>
              <MyLink href="#" underline="none">{'Parking'}</MyLink>
              <MyLink href="#" underline="none">{'Industry'}</MyLink>
              <MyLink href="#" underline="none">{'Communities'}</MyLink>
              <MyLink href="#" underline="none">{'Park&Rsort'}</MyLink>
              <MyLink href="#" underline="none">{'Tracking'}</MyLink>
              <MyLink href="#" underline="none">{'Digital Signage'}</MyLink>
              <MyLink href="#" underline="none">{'Hospital'}</MyLink>
           
              </MyStack>
              <MyStack style={{marginTop:'20px'}}  spacing={0.5}>
                Services
              <MyLink href="#" underline="none">{'Iot Dashboard'}</MyLink>
              <MyLink href="#" underline="none">{'Mobile Application'}</MyLink>
              <MyLink href="#" underline="none">{'R&D'}</MyLink>
              <MyLink href="#" underline="none">{'Software Integration'}</MyLink>        
             
           
              </MyStack>
              <MyStack style={{marginTop:'20px'}} spacing={0.5}>
                Company
                <MyLink href="/" underline="none">{'Home'}</MyLink>
              <MyLink href="#" underline="none">{'About Us'}</MyLink>
              <MyLink href="#" underline="none">{'Comtact Us'}</MyLink>     
             
           
              </MyStack>
              </MyStack>
              <Header textAlign="center">- </Header>


              <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Item>  <Grid  style={{marginLeft:'110px'}}  item xs={4}>
             <img src={Logo}  alt="Logo" width='100px' />
            </Grid></Item>
        </Grid>
        <Grid item xs={4}>
          <Item> <Link  style={{fontSize:'1em',color:'#54D692'}} underline="none">{'© Geetron Iot Solution'}</Link>
          <Link  style={{color:'#000000'}} underline="none">{'|'}</Link>
          <Link  style={{fontSize:'1em'}} href="/" underline="none">{'Terms & Condition'}</Link>
          <Link  style={{color:'#000000'}} underline="none">{'|'}</Link>
          <Link  style={{fontSize:'1em'}} href="/" underline="none">{'Privacy Policy'}</Link></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>  <Link  style={{fontSize:'1em',color:'#54D692'}} underline="none">{'Follow us'}</Link>
     
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Fb}  alt="Logo" width='20px' /></Link>                  
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Linkin}  alt="Logo" width='20px' /></Link>  
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Insta}  alt="Logo" width='20px' /></Link>       
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Twitter}  alt="Logo" width='20px'/></Link>   
     <Link  style={{color:'#000000'}} href="/Water" underline="none"> <img src={Youtube}  alt="Logo" width='20px' /></Link></Item>
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
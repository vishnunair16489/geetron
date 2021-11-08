import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import segment1img from '../Homepage/images/mobile.png';
import { Typography,Grid,Stack ,Divider} from '@mui/material';
import geepas from '../Homepage/images/geepas.png'
import nesto from '../Homepage/images/nesto.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const MyGrid = styled(Grid)(({ theme }) => ({  
      marginTop: "50px",
      justifyContent:"center",
        alignItems:"center"
    }));

    const Header = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.2em",      
        fontSize:'1.2em',       
        minWidth:'10em',
        color: '#1268B3',
        fontFamily:'SourceSansPro',
        fontWeight:'bold',
      }));
      const MyDivider = styled(Divider)(({ theme }) => ({
       
        fontSize:'1.5em',
        minWidth:'10em',
        color: '#1268B3',
        textAlign:'center',
        fontFamily:'SourceSansPro',
        
      }));
      const Subtext = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.2em",
        fontSize:'0.7em',
        textAlign: 'left',
        maxWidth:'25em',
        color: 'black',
        fontFamily:'SourceSansPro',
        fontWeight:'bold',
        
      }));
      const MyStack = styled(Stack)(({ theme }) => ({           
        marginTop: "10px",
      
      }));
    

    

      const App = ()=>{
        useEffect(()=>{
          Aos.init({duration:1000});
      
        },[]);
  return(  
   <div>
        <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  >
    <MyDivider textAlign="center">Meet Our Partners </MyDivider>
    </div>
         
          <MyGrid container>

    <MyStack direction="row" spacing={2}>
    
   
     <Card sx={{ display: 'flex' , maxHeight: 200 ,maxWidth:500}}>
     <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
     <CardMedia
        component="img"
        sx={{width:225 }}
        image={geepas}
      
        alt="Live from space album cover"
      />
      </div>
      
    <div  data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="400" >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Header component="div" variant="h5">
          Geepas
          </Header>
          <Subtext variant="subtitle1" color="text.secondary" component="div">
          Health is happiness. More time with loved ones is happiness. When technology gives you convenience, you find yourself in a happy space. At Geepas, we are committed to creating things for you that make a happy difference to your life.
          </Subtext>
        </CardContent>
       
       
      </Box>  
      </div>
      </Card>
   
 
  
    <Card sx={{ display: 'flex',maxWidth:500 , maxHeight: 200 }}>
         
    <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
     <CardMedia
        component="img"
        sx={{ width: 225 }}
        image={nesto}
        alt="Live from space album cover"
      /></div>
      
    <div  data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="400" >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Header component="div" variant="h5">
          Nesto
          </Header>
          <Subtext variant="subtitle1" color="text.secondary" component="div">
          Nesto is  a retail venture and has captured millions of hearts over a short span of time to become the most preferred choice among customers. We have emerged as one of the fastest-growing retail chains over the years with 90 outlets operating across the GCC and India
          </Subtext>
        </CardContent>
       
       
      </Box>
      </div>
    </Card>
 
    </MyStack>
    </MyGrid>

 </div>
);
}

export default App;
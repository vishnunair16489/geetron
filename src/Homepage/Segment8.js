import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import { Typography,Grid,Stack ,Divider} from '@mui/material';
import geepas from '../Homepage/images/geepas.jpg'
import nesto from '../Homepage/images/nesto.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { maxWidth } from '@mui/system';

const MyGrid = styled(Grid)(({ theme }) => ({  
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
  direction: "row",
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
        marginTop: "50px",
        fontFamily:'SourceSansPro',
        
      }));
      const Subtext = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.2em",
        fontSize:'0.9em',
        textAlign: 'left',
        maxWidth:'25em',
        color: 'black',
        fontFamily:'SourceSansPro',
        
      }));
      const MyGridLeft  = styled(Grid)(({ theme }) => ({

  
        direction:"row",
        justifyContent:"center",
        alignItems:"center",
      
       
        [theme.breakpoints.down("xs")]: {
          justifyContent:"center",
          alignItems:"center",
         },
          [theme.breakpoints.up("md")]: {
            justifyContent:"flex-end",
            alignItems:"center",
        
         },
      
      
      }));
    
      const MyGridRight  = styled(Grid)(({ theme }) => ({

  
        direction:"row",
        justifyContent:"center",
          alignItems:"center",
        [theme.breakpoints.down("xs")]: {
          justifyContent:"center",
          alignItems:"center",
         },
         [theme.breakpoints.up("md")]: {
          justifyContent: "flex-start",
          alignItems: "center",
        },
      }));
    ;

      const App = ()=>{
        useEffect(()=>{
          Aos.init({duration:1000});
      
        },[]);
  return(  
    <div>
        <MyDivider textAlign="center">Meet Our Partners </MyDivider>
 
        <MyGrid container spacing={0.5} >
   
          <MyGridLeft  item xs={12}  md={6} >

  
         
   <Card sx={{ display: 'flex', maxHeight: 200 ,margin:'0px 10px'}}>
         
    <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  >
     <CardMedia
        component="img"
        sx={{ height: 225 ,  borderRadius: 2,
          }}
        image={nesto}
        alt="Live from space album cover"
      /></div>
      
    <div  data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="200" >
      <Box>
        <CardContent>
          <Header component="div" variant="h5">
          Nesto
          </Header>
          <Subtext variant="subtitle1" color="text.secondary" component="div">
          Nesto is a retail venture and has captured millions of hearts over a short span of time to become the most preferred choice among customers. We have emerged as one of the fastest-growing retail chains over the years.
          </Subtext>
        </CardContent>
       
       
      </Box>
      </div>
    </Card>
 
    
   
 </MyGridLeft>
 <MyGridRight   item xs={12} md={6} >
  
 <Card sx={{ display: 'flex' , maxHeight: 200,margin:'0px 10px'}}>
     <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  >
     <CardMedia
        component="img"
        sx={{height:225 ,borderRadius: 2,}}
        image={geepas}
      
        alt="Live from space album cover"
      />
      </div>
      
    <div  data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="200" >
      <Box>
        <CardContent>
          <Header component="div" variant="h5">
          Geepas
          </Header>
          <Subtext variant="subtitle1" color="text.secondary" component="div">
          Geepas is  committed to creating things for you that make a happy difference in your life.   When technology gives you convenience, you find yourself in a happy space.
          </Subtext>
        </CardContent>
       
       
      </Box>  
      </div>
      </Card>
    </MyGridRight>

 </MyGrid>
 </div>
);
}

export default App;
import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import iot from '../Homepage/images/Iotrevolution.jpg'
import iotproducts from '../Homepage/images/iotproducts.jpg'
import { Typography,Grid,Stack,Divider, Container } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/system';


    const Header = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.8em",
        paddingRight:"1.0em",
        fontSize:'1.12em',
        textAlign: 'right',
        minWidth:'10em',
        color: '#FFFFFF',
        fontFamily:'SourceSansPro',
       
      }));
      const SubHeader = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.8em",
        paddingRight:"1.0em",
        fontSize:'1.0em',
        textAlign: 'right',
        minWidth:'10em',
        color: '#FFFFFF',
        fontFamily:'SourceSansPro',
      
      }));
      const MyDivider = styled(Divider)(({ theme }) => ({
       
        fontSize:'2.0em',
        minWidth:'10em',
        color: '#1268B3',
        textAlign:'center',
        marginTop: "50px",
        marginBottom: "50px",
        fontFamily:'SourceSansPro',
     
      }));
      const Subtext = styled(Typography)(({ theme }) => ({
       
       
        paddingRight:"1.0em",
        paddingLeft:"110px",
        fontSize:'0.9em',
        textAlign: 'right',
        color: '#FFFFFF',
        fontFamily:'SourceSansPro',
       
      }));
  
     
    const Headerright = styled(Typography)(({ theme }) => ({
       
      paddingTop: "0.8em",
      paddingRight:"1.0em",
      fontSize:'1.12em',
      textAlign: 'left',
      paddingLeft:"10px",
      minWidth:"1.0em",
      color: '#FFFFFF',
      fontFamily:'SourceSansPro',
      
    }));
    const SubHeaderright = styled(Typography)(({ theme }) => ({
       
      paddingTop: "0.8em",
      paddingRight:"1.0em",
      fontSize:'1.0em',
      textAlign: 'left',
      paddingLeft:"10px",
      minWidth:"1.0em",
      color: '#FFFFFF',
      fontFamily:'SourceSansPro',
     
    }));
    const Subtextright = styled(Typography)(({ theme }) => ({
     
      paddingRight:"110px",
      paddingLeft:"1.0em",
      fontSize:'0.9em',
      textAlign: 'left',
      color: '#FFFFFF',
      fontFamily:'SourceSansPro',
    
    }));


const App = ()=>{
  useEffect(()=>{
    Aos.init({duration:500});

  },[])
  return(  
    <Box>
        <div  data-aos="zoom-in">
         <MyDivider textAlign="center">Our Vision </MyDivider>
   </div>
    <Grid container spacing={0.5} >
    
    <Grid  item xs={12} md={6} >
    <div  data-aos="zoom-in">
 
      <Box  sx={{background:"#4DC587",height:'290px' }}>
      <Stack  spacing={2}>
        <Header>Reasons to Choose Geetron</Header>
        <SubHeader>Innovation</SubHeader>
        <Subtext>Developed IP and Platform Solutions that are industry-proven to accelerate your product engineering needs.</Subtext>
        <SubHeader>Scalability</SubHeader>
        <Subtext>Developed IP and Platform Solutions that are industry-proven to accelerate your product engineering needs.</Subtext>
    
      </Stack>
      </Box>
     
      </div>
    </Grid>
    <Grid item xs={12} md={6}   >
    <div  data-aos="zoom-in">
    <img src={iot} alt="Logo" height='290px'  />
    </div>
    </Grid>
    <Grid  container xs={12} md={6}  justifyContent="flex-end" >
    <div  data-aos="zoom-in" >
    <img src={iotproducts} alt="Logo" height='290px'  />
    </div>
    </Grid>
    <Grid item xs={12} md={6}   >
    <div  data-aos="zoom-in">
  
      <Box  sx={{background:"#1268B3" ,height:'290px' }}>
      <Stack  spacing={2}>
        <Headerright>More Reason...</Headerright>
        <SubHeaderright>Execution Excellence</SubHeaderright>
        <Subtextright>Developed IP and Platform Solutions that are industry-proven to accelerate your product engineering needs.</Subtextright>
        <SubHeaderright>Canvas to Cloud</SubHeaderright>
        <Subtextright>Developed IP and Platform Solutions that are industry-proven to accelerate your product engineering needs.</Subtextright>
   
      </Stack>
      </Box>
     
      </div>
   
    </Grid>
  </Grid>
  </Box>
);
}

export default App;
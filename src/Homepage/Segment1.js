import React from 'react'
import { styled } from '@mui/material/styles';
import segment1img from '../Homepage/images/segment1img.png'
import { Button,  Typography,Grid,Stack } from '@mui/material';
import banner from '../Homepage/images/banner.jpg'
import { fontWeight } from '@mui/system';
import Aos from 'aos';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({  
      marginTop: "100px",
        alignItems:"center",
        backgroundImage: `url(${banner})`,
        backgroundPosition:'center',
        height:'550px'
        
    }));

    const Header = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.2em",
        paddingLeft:"0.5em",
        fontSize:'1.5em',
        textAlign: 'left',
        color: '#1268B3',
        fontFamily:'SourceSansPro',
        fontWeight:'bold'
        
      }));
      const Subtext = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.2em",
        paddingLeft:"0.5em",
        fontSize:'1.0em',
        textAlign: 'left',
        maxWidth:'30em',
        color: 'black',
        fontFamily:'SourceSansPro',
        fontWeight:'bold'
        
      }));
      const MyStack = styled(Stack)(({ theme }) => ({           
        marginTop: "10px",
        marginLeft:"200px",
      }));
      const MyButton = styled(Button)(({ theme }) => ({           
        marginLeft:"0.1em",
        background: '#1268B3',
        width:'10em',
        borderRadius:5,
        fontFamily:'SourceSansPro'
        
        
      }));
    


const App = ()=>{
  return(  
    <MyGrid container spacing={0.5} >
    
    <Grid  item xs={12} md={6} >
    <div  data-aos="slide-right">
    <MyStack  spacing={2}>
        <Header>New IoT Solution for Waste Management</Header>
        <Subtext>The Waste Management IoT solution enables cities and industries to manage their waste in an efficient way, reducing the environmental footprint and improving the quality of the service.</Subtext>
<MyButton variant="contained" >Contact Us</MyButton>
      </MyStack>
      </div>
    </Grid>
   
  </MyGrid>
);
}

export default App;
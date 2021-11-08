import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Homepage/images/iotservices.jpg'
import segment2hardware from '../Homepage/images/hardware.png'
import segment2hconsulting from '../Homepage/images/consulting.png'
import segment2custom from '../Homepage/images/custom-projects.png'
import { Divider,  Typography,Grid,Stack } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({  
      marginTop: "25px",
          justifyContent:"center",
      alignItems:"center",
    }));
    const MypicGrid = styled(Grid)(({ theme }) => ({  
      marginTop: "100px",
      justifyContent:"center",
      alignItems:"center",
      }));

      const MyDivider = styled(Divider)(({ theme }) => ({
       
        fontSize:'1.5em',
        minWidth:'10em',
        color: '#1268B3',
        textAlign:'center',
        marginTop: "50px",
        fontFamily:'SourceSansPro',
        fontWeight:'bold'
        
      }));
      const MyStack = styled(Stack)(({ theme }) => ({           
        margin: "10px 0px 0px 0px",
        justifyContent:"center",
        alignItems:"center",
      }));
      const Mytext = styled(Typography)(({ theme }) => ({           
       
        fontSize:'1.0em',
        textAlign: 'left',
        minWidth:'10em',
        color: '#1268B3',
        fontFamily:'SourceSansPro',
        fontWeight:'bold'
        
        
      }))

      const Mypara = styled(Typography)(({ theme }) => ({           
       
       
        fontFamily:'SourceSansPro'
        
        
      }))
const App = ()=>{
  return(  
    <MyGrid container >
    
    <MypicGrid container  xs={12} md={4}>
    <img src={segment2img} height="300"  alt="Logo" />
   
    
    </MypicGrid>
    <Grid item xs={6} md={6}>
    <div  data-aos="flip-left">
    <MyDivider textAlign="right">IoT Engineering Services </MyDivider>
    </div>
    <MyStack container spacing={2}>
    <Mypara>Geetron designs and manufactures technological solutions to make the Internet of things possible. Libelium’s wireless sensor platform allows connecting the physical and digital worlds. Libelium is evolving from a hardware manufacturing business with the goal of becoming a whole IoT solution provider.</Mypara>
  
        <MyStack direction="row"  spacing={5}>
        <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="200" >
        <Stack  spacing={2}>
        <img src={segment2hardware} width="40" alt="Logo" />
        <Mytext>Hardware developers </Mytext>
        <Mypara>Fully IoT Hardware Development | Check out all our products: Waspmote, Plug & Sense, Meshlium..</Mypara>
        </Stack>
        </div>
        <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="400" d>
        <Stack  spacing={2}>
        <img src={segment2hconsulting} width="40" alt="Logo" />
        <Mytext>Consultancy experts </Mytext>
        <Mypara>Request our Consultancy Service and our experts will share all their knowledge with you. Discover all the experience you need in the IoT with Libelium.</Mypara>
     
        </Stack>
        </div>
        <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="600" >
        <Stack  spacing={2}>
        <img src={segment2custom} width="40" alt="Logo" />
        <Mytext>Customized IoT projects</Mytext>
        <Mypara>We design the IoT for you! If you do not find in our catalog what you are looking for to develop an IoT project, we can customize it for you.</Mypara>
     
        </Stack>
        </div>
      </MyStack>
     
 </MyStack>
    </Grid>
  </MyGrid>
);
}

export default App;
import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Homepage/images/iotservices.jpg'
import segment2hardware from '../Homepage/images/hardware.png'
import segment2hconsulting from '../Homepage/images/consulting.png'
import segment2custom from '../Homepage/images/custom-projects.png'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
  height:'300px',

 [theme.breakpoints.up("xs")]: {
  
  borderRadius:"0%"
}, 
[theme.breakpoints.up("md")]: {
 
 
  borderRadius:"5%"
},

  
}));

const MyDivider = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  margin: "50px 0px",
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',


}));

const Mytext = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'left',
  minWidth: '10em',
  maxHeight:'20em',
  color: '#1268B3',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  margin: "0px 30px",


}))

const Mypara = styled(Typography)(({ theme }) => ({

  align:'justify',
  fontFamily: 'SourceSansPro',
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 30px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))

const MyStack = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
    marginLeft: "30px",
  },
   [theme.breakpoints.down("md")]: {
    marginTop: "60px",
    marginLeft: "30px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
    marginLeft: "10px",
  },

}))

const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
    marginLeft: "30px",
  },
   [theme.breakpoints.down("md")]: {
    marginTop: "60px",
    marginLeft: "30px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
    marginLeft: "10px",
  },
  

}))

const App = () => {
  return (

    <MyGrid container spacing={2} >
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="center">Revolutionising IoT</MyDivider>
        </div>
        <MyGrid container spacing={2} >
       
        <MypicGrid container xs={12} md={4}/>
       
   
     
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
          <Mypara>
          Geetron’s Primary Goal is to evolve from a hardware manufacturing business intending to become a whole IoT solution provider. We design and develop IoT solutions to make electronics works seamlessly with each other. We specialize in wireless sensor platform that allows you to connect the physical with the digital world.
</Mypara>
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}sm={4} md={4}>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
              <MyStackfirst spacing={2}>
                <img src={segment2hardware} width="40" alt="Logo" />
                <Mytext>Hardware developers </Mytext>
                <Mypara>Our team consists of a group of specialist engineers with a deep understanding of clients’ needs in the areas of software development, integration, quality assurance, interoperability, and cross-platform services.</Mypara>
              </MyStackfirst>
            </div>
            </Grid>
        <Grid item  xs={12} sm={4} md={4}>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
              <MyStack spacing={2}>
                <img src={segment2hconsulting} width="40" alt="Logo" />
                <Mytext>Consultancy experts </Mytext>
                <Mypara>Quick Solutions is what a business needs to maintain its edge over the fast-paced and competitive world. We have a team of solution-oriented experts, aggregated over the years to provide just the right solution for your business. </Mypara>

              </MyStack>
            </div>
            </Grid>
        <Grid item  xs={12} sm={4} md={4}>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="600" >
              <MyStack spacing={2}>
                <img src={segment2custom} width="40" alt="Logo" />
                <Mytext>Customized IoT projects</Mytext>
                <Mypara>We can design and develop any  IoT solutions for you! If you cannot find your desired IoT solution in our catalog, we have developers who can develop customized IoT projects solely keeping in mind your requirements.</Mypara>

              </MyStack>
            </div>
            </Grid>
            </Grid>
          </Box>
        
      </MyGrid>
      </MyGrid>
      </Stack>
</MyGrid>
 

  );
}

export default App;
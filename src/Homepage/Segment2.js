import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Homepage/images/geetronconnectionblue.png'
import segment2hardware from '../Homepage/images/hardware.png'
import segment2hconsulting from '../Homepage/images/consulting.png'
import segment2custom from '../Homepage/images/custom-projects.png'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center", 
  backgroundColor:'#f0f0f0',


}));

const MypicGrid = styled(Grid)(({ theme }) => ({


  height:'250px'


  
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
  textAlign:'justify',
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
    margin: "0 30px",
  },
   [theme.breakpoints.down("md")]: {
  
    margin: "30px",
  },
  [theme.breakpoints.up("md")]: {
   
    margin: "10px",
  },

}))

const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
  
    margin: "0 30px",
  },
   [theme.breakpoints.down("md")]: {
  
    margin: "30px",
  },
  [theme.breakpoints.up("md")]: {
   
    margin: "10px 10px",
  },
  

}))

const Myimg = styled('img')(({ theme }) => ({

  src:{segment2img} ,
  alt:'img',
  backgroundSize:'fit',
 
  [theme.breakpoints.down("xs")]: {
    
    height:'150px'
  },
   [theme.breakpoints.down("md")]: {
  
    height:'150px'
  },
  [theme.breakpoints.up("md")]: {
   
    height:'300px'
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
        <Box >  <div data-aos="fade-right">
        <MypicGrid item    xs={12} md={4}>
      
        <Myimg  src={segment2img}/>
        
          </MypicGrid></div>
        </Box>
   
     
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-in-out-back" data-aos-delay="200" >
          <Mypara>
          Geetron’s Primary Goal is to evolve from a hardware manufacturing business intending to become a whole IoT solution provider. We design and develop IoT solutions to make electronics works seamlessly with each other. We specialize in wireless sensor platform that allows you to connect the physical with the digital world.
</Mypara>
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}sm={4} md={4}>
            <div data-aos="fade-up" data-aos-offset="" data-aos-easing="ease-in-out-back" data-aos-delay="200" >
              <MyStackfirst spacing={2}>
                <img src={segment2hardware} width="40" alt="Logo" />
                <Mytext>Hardware developers </Mytext>
                <Mypara>Our team consists of a group of specialist engineers with a deep understanding of clients’ needs in the areas of software development, integration, quality assurance, interoperability, and cross-platform services.</Mypara>
              </MyStackfirst>
            </div>
            </Grid>
        <Grid item  xs={12} sm={4} md={4}>
            <div data-aos="fade-up" data-aos-offset="" data-aos-easing="ease-in-out-back" data-aos-delay="300" >
              <MyStack spacing={2}>
                <img src={segment2hconsulting} width="40" alt="Logo" />
                <Mytext>Consultancy experts </Mytext>
                <Mypara>Quick Solutions is what a business needs to maintain its edge over the fast-paced and competitive world. We have a team of solution-oriented experts, aggregated over the years to provide just the right solution for your business. </Mypara>

              </MyStack>
            </div>
            </Grid>
        <Grid item  xs={12} sm={4} md={4}>
            <div data-aos="fade-up" data-aos-offset="" data-aos-easing="ease-in-out-back" data-aos-delay="400" >
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
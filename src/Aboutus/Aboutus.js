import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Aboutus/images/geetron.jfif'
import segment2hardware from '../Homepage/images/hardware.png'
import segment2hconsulting from '../Homepage/images/consulting.png'
import segment2custom from '../Homepage/images/custom-projects.png'
import Sub1 from '../Aboutus/images/sub1.png'
import Sub2 from '../Aboutus/images/sub2.png'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
    alignItems: "flex-start", 
    direction:"row"

}));
const Myfooterpic = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
    alignItems: "center", 
    direction:"row"

}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
  height:'500px',
  marginTop:'20px'

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
            <MyDivider textAlign="center">About Us </MyDivider>
          </div>
          <MyGrid container spacing={2} >
  
        <MypicGrid container xs={12} md={4}>
       
        </MypicGrid>
        <MyGrid item xs={12} md={6}>
        <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
            <Mypara>
<p>Geetron is a division of the Western International Group that employs over 15,000 personnel which are spread across 12 countries. The Group continues to strengthen its presence across the Middle East, Africa, South Asia, Europe, and the subcontinent with new brands and divisions constantly enriching the portfolio. Mr. Basheer, Chairman of the group is proud to lead a young dynamic team. Geetron operates as the IoT division focused on delivering performance, quality, and innovation across various sectors. </p>


<p>With a strong focus on efficiency, the Geetron division is one of the fastest-growing suppliers of IoT products and services and is recognized as the leading IoT service With a portfolio ranging from home automation, community and waste management, parking, park, and resorts to name a few. Geetron is the trusted brand in IoT products and services provider, with a framework of sales, and customer service capabilities, Geetron is working with customers to offer a great range of products. </p>
</Mypara>
            </div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
            <Grid item xs>
              <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                <MyStackfirst spacing={2}>
                  <img src={segment2hardware} width="40" alt="Logo" />
                  <Mytext> Technology Innovator </Mytext>
                  <Mypara>We have developed many of the latest technologies and processes for automation systems. To date, we have installed over 100 of automation solution, which are designed and  developed by our own Engineers with our in-house R&D.</Mypara>
                </MyStackfirst>
              </div>
              </Grid>
          <Grid item xs>
              <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                <MyStack spacing={2}>
                  <img src={segment2hconsulting} width="40" alt="Logo" />
                  <Mytext>Consultancy experts </Mytext>
                  <Mypara>We are well experienced to cater and develop any complex system/ solutions. In working with our Company, Client can rest assured that you are receiving top-quality products and installation by experts. </Mypara>
  
                </MyStack>
              </div>
              </Grid>
          <Grid item xs>
              <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="600" >
                <MyStack spacing={2}>
                  <img src={segment2custom} width="40" alt="Logo" />
                  <Mytext>Customized IoT projects</Mytext>
                  <Mypara>We do more than engineering!  With Geeton you will get a world-class product development team of experts in wireless connectivity, and IoT platforms. Fast, affordable, and flexible IoT solution based on Geetron's existent  IoT ecosystem. </Mypara>
  
                </MyStack>
              </div>
              </Grid>
              </Grid>
            </Box>
          
        </MyGrid>
        </MyGrid>
        <Myfooterpic  container  direction="row"  justifyContent="center"  alignItems="center">
        <Grid container justifyContent="flex-end"  alignItems="flex-end" item xs>
        <img src={Sub1} width="600" alt="Logo" />
        </Grid>
        <Grid  item xs>
        <img src={Sub2} width="600" alt="Logo" />
        </Grid>
        </Myfooterpic>
        </Stack>
  </MyGrid>
   
  
    );
  }
  
  export default App;
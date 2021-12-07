import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Aboutus/images/aboutus.jpeg'
import segment2hardware from '../Homepage/images/hardware.png'
import segment2hconsulting from '../Homepage/images/consulting.png'
import segment2custom from '../Homepage/images/custom-projects.png'
import Sub1 from '../Aboutus/images/marquee1.png'
import Sub2 from '../Aboutus/images/marquee2.png'
import Sub3 from '../Aboutus/images/marquee3.png'
import Sub4 from '../Aboutus/images/marquee4.png'
import Marquee from "react-fast-marquee";
import { Divider, Typography, Grid, Stack ,Hidden} from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
    alignItems: "flex-start", 
    direction:"row",
    
  
  
  
}));
const MyGridMain = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 
  direction:"row",
   backgroundColor:'#f0f0f0',
  [theme.breakpoints.up("xs")]: {
    marginTop:'-165px'

  },
   [theme.breakpoints.up("md")]: {
    marginTop:'10px'

  },
  [theme.breakpoints.up("md")]: {
   
    marginTop:'1px'
  },


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
  height:'250px',
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
  textAlign: 'justify',
  minWidth: '10em',
  maxHeight:'20em',
  color: '#1268B3',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',


}))

const Mypara = styled(Typography)(({ theme }) => ({


  fontFamily: 'SourceSansPro',
  textAlign: 'justify',
 
  
 

}))
const Myparamain = styled(Typography)(({ theme }) => ({


  fontFamily: 'SourceSansPro',
  textAlign: 'justify',
  padding: "0px 20px",
  
 

}))
const MyStack = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
  padding:'0px 10px',
  [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
  
  },
   [theme.breakpoints.down("md")]: {
    marginTop: "60px",
  
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
  
  },

}))

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (

      <div data-aos="fade-up">
      <MyGridMain container spacing={0} >
        <Stack>
          <div data-aos="flip-left">
          <Hidden mdDown>
          <MyDivider textAlign="center">About Us </MyDivider>
          </Hidden>
           
          </div>
          <MyGrid container spacing={0} >
  
        <MypicGrid container xs={12} md={4}>
       
        </MypicGrid>
        <Hidden mdUp>
          <MyDivider textAlign="center">About Us </MyDivider>
          </Hidden>
        <MyGrid item xs={12} md={6}>
        <div  data-aos="fade-up"  data-aos-easing="ease-in-out-back"  data-aos-delay="200" >
            <Myparamain>
              <p>Geetron is a division of the Western International Group that employs over 15,000 personnel which are spread across 12 countries. The Group continues to strengthen its presence across the Middle East, Africa, South Asia, Europe, and the subcontinent with new brands and divisions constantly enriching the portfolio. Geetron operates as the IoT division focused on delivering performance, quality, and innovation across various sectors. </p>


<p>With a strong focus on efficiency, the Geetron division is one of the fastest-growing suppliers of IoT products and services and is recognized as the leading IoT service With a portfolio ranging from home automation, community and waste management, parking, park, and resorts to name a few. Geetron is the trusted brand in IoT products and services provider, with a framework of sales, and customer service capabilities, Geetron is working with customers to offer a great range of products. </p>
</Myparamain>
            </div>
           
          
          
          
        </MyGrid>
        <Grid container  xs={12} sm={12} md={10} spacing={0}>
       
            <Grid  xs={12} sm={4} md={4}>
            <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-back"  data-aos-delay="200" >
                <MyStack spacing={0}>
                  <img src={segment2hardware} width="40" alt="Logo" />
                  <Mytext> Technology Innovator </Mytext>
                  <Mypara>We have developed many of the latest technologies and processes for automation systems. To date, we have installed over 100 of automation solution, which are designed and  developed by our own Engineers with our in-house R&D.</Mypara>
                </MyStack>
              </div>
              </Grid>
          <Grid item  xs={12} sm={4} md={4}>
          <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-back"  data-aos-delay="300" >
                <MyStack spacing={0}>
                  <img src={segment2hconsulting} width="40" alt="Logo" />
                  <Mytext>Consultancy experts </Mytext>
                  <Mypara>We are well experienced to cater and develop any complex system/ solutions. In working with our Company, Client can rest assured that you are receiving top-quality products and installation by experts. </Mypara>
  
                </MyStack>
              </div>
              </Grid>
          <Grid item  xs={12} sm={4} md={4}>
          <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-back"  data-aos-delay="400" >
                <MyStack spacing={0}>
                  <img src={segment2custom} width="40" alt="Logo" />
                  <Mytext>Customized IoT projects</Mytext>
                  <Mypara>We do more than engineering!  With Geeton you will get a world-class product development team of experts in wireless connectivity, and IoT platforms. Fast, affordable, and flexible IoT solution based on Geetron's existent  IoT ecosystem. </Mypara>
  
                </MyStack>
              </div>
              </Grid>
              </Grid>
        </MyGrid>
      
       
        </Stack>
       
        <div data-aos="flip-left">
            <MyDivider textAlign="center">Our Group</MyDivider>
          </div>
        <Marquee >
        <img src={Sub1} width="600" alt="Logo" />
        <img src={Sub2} width="600" alt="Logo" />
        <img src={Sub3} width="600" alt="Logo" />
        <img src={Sub4} width="600" alt="Logo" />
  </Marquee>
          
      
      
  </MyGridMain>
  </div>
   
  
    );
  }
  
  export default App;
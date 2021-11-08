import React from 'react'
import { styled } from '@mui/material/styles';
import water from '../Homepage/images/waiteriot.jpg'
import guest from '../Homepage/images/guestroom.jpg'
import parking from '../Homepage/images/smartparking.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Divider, Typography,Grid,Stack } from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const MyGrid = styled(Grid)(({ theme }) => ({  
      marginTop: "100px",
      alignItems:"center",
      justifyContent:"center",
    
      

    }));
   
    const Header = styled(Divider)(({ theme }) => ({
       
        fontSize:'1.5em',
        minWidth:'10em',
        color: '#FFFFFF',
        textAlign:'center',
        fontFamily:'SourceSansPro',
        fontWeight:'bold',
       
        
      }));
      const MyStack = styled(Stack)(({ theme }) => ({           
        margin: "100px 0px 0px 0px",
        maxWidth:"1200px",
       
      }));
      const Mytext = styled(Typography)(({ theme }) => ({           
       
        fontSize:'1.0em',
        textAlign: 'left',
        minWidth:'10em',
        color: '#1268B3',
        fontWeight:'bold',
        fontFamily:'SourceSansPro'
      }));
      const Mypara = styled(Typography)(({ theme }) => ({           
       
        fontSize:'0.9em',
        textAlign: 'left',
        maxWidth:'300px',
        fontFamily:'SourceSansPro',
        fontWeight:'bold',
        height:"200"
      }))
      const Mysubtitle = styled(Typography)(({ theme }) => ({           
       
        fontSize:'1.0em',
        textAlign: 'center',
        maxWidth:'1100px',
        color: '#000000',
        fontFamily:'SourceSansPro',
        fontWeight:'bold',
        
      }))

const App = ()=>{
  return(  
   
    <ParallaxProvider>
    <Parallax  y={[10, -10]} tagOuter="figure">
   <MyGrid  container>
  
    <MyStack  spacing={2}>
    <div  data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
    <Header textAlign="center">Applications of IoT Technology </Header>
    </div>
    <div  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="400" >
      <Mysubtitle>IoT transforms data to productivity in any scenario. Discover now all IoT Solutions and future applications that we can offer to your company.</Mysubtitle>
      </div>
        <MyStack direction="row"  spacing={5}>
        <div  data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-out-quart"  >
        <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={water} 
        alt="green iguana"
      />
      <CardContent>
        <Mytext gutterBottom  component="div">
        IoT wireless irrigation solution
        </Mytext>
        <Mypara  color="text.secondary">
        We have developed an IoT wireless irrigation solution, which addresses the issues of mobility and affordability for customers. We use the latest ultra long range radio communication to eliminate all expensive in-field wiring.  
        </Mypara>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div  data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="200" >
    <Card sx={{ width: 300}}>
      <CardMedia
        component="img"
        height="200"
        image={parking} 
        alt="green iguana"
      />
      <CardContent>
        <Mytext gutterBottom  component="div">
        Smart Parking
        </Mytext>
        <Mypara  color="text.secondary">
        Smart Parking is a radar sensor device that allows the detection of parking availability indoors and outdoors. 

Smart parking applications (cities, hospitals, public areas, malls, universities, sports centers
Additional revenues of smart parking technology areas.    </Mypara>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div  data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-out-quart"  data-aos-delay="400" >
    <Card sx={{ width: 300  }}>
      <CardMedia
        component="img"
        height="200"
        image={guest} 
        alt="green iguana"
      />
      <CardContent>
        <Mytext gutterBottom  component="div">
        Geetron GRMS
        </Mytext>
        <Mypara  color="text.secondary">
        <p>Geetron GRMS offers  solutions that  work on Interactive technology that accomplish the seamless experience you want for your guest and provide easy management for the operators.</p>

        </Mypara>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>

      
      </MyStack>
      </MyStack>
    
      </MyGrid>
      </Parallax>
      </ParallaxProvider>

);
}

export default App;
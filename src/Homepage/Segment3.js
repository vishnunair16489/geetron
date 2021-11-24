import React from 'react'
import { styled } from '@mui/material/styles';
import water from '../Homepage/images/iotagri.jpg'
import guest from '../Homepage/images/iothome.jpg'
import parking from '../Homepage/images/iotparking.jpg'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Divider, Typography, Grid, Stack,Box  } from '@mui/material';
import { Parallax, ParallaxProvider} from 'react-scroll-parallax';

const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "100px",
  alignItems: "center",
  justifyContent: "center",



}));
const MyCardContent = styled(CardContent)(({ theme }) => ({
  background:'white'


}));

const Header = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
  color: '#FFFFFF',
  textAlign: 'center',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  


}));
const MyStack = styled(Stack)(({ theme }) => ({
  margin: "100px 0px 0px 0px",
  maxWidth: "1200px",

}));
const Mytext = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'left',
  minWidth: '10em',
  color: '#1268B3',
  fontWeight: 'bold',
  fontFamily: 'SourceSansPro'
}));
const Mypara = styled(Typography)(({ theme }) => ({

  fontSize: '0.9em',
  textAlign: 'left',
 
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  [theme.breakpoints.down("xs")]: {
    width:'600px',
   },
    [theme.breakpoints.up("md")]: {
      maxWidth: '300px',
    alignItems: "center",
    justifyContent: "center",
  
   },
}))
const Mysubtitle = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'center',
  maxWidth: '1100px',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  color: '#FFFFFF',
}))

const MyCard = styled(Typography)(({ theme }) => ({

 
   [theme.breakpoints.down("md")]: {
    maxWidth:'600px',
    mimWidth:'600px',
   alignItems: "center",
   justifyContent: "center",
 
  },

}))

const App = () => {
  return (

    <ParallaxProvider>
      <Parallax y={[10, -10]} tagOuter="figure">
        <MyGrid container>

          <MyStack spacing={2}>
            <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
              <Header textAlign="center">Applications of IoT Technology </Header>
            </div>
            <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
              <Mysubtitle>IoT transforms data to productivity in any scenario. Discover now all IoT Solutions and future applications that we can offer to your company.</Mysubtitle>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container   justifyContent="center"  alignItems="center" spacing={5}>
              <Grid item  xs={12} sm={4} md={4}>
            
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
                  <Box sx={{ boxShadow: 10 }}>
                    <MyCard >
                      <CardMedia   sx={{  borderRadius: 5}}
        
                        component="img"
                        height="200"
                        image={water}
                      
                        alt="green iguana"  
                      />
                      <MyCardContent>
                        <Mytext gutterBottom component="div">
                          IoT wireless irrigation solution
                        </Mytext>
                        <Mypara color="text.secondary">
                        IoT wireless irrigation solution, which addresses the issues of mobility and affordability for customers by increasing crop yield, raising productivity, and reducing the consumption of agricultural inputs
                        </Mypara>
                         <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                      </MyCardContent>
                     
                    </MyCard> 
                     </Box>
                  </div>
                
                  </Grid>
                  <Grid item  xs={12} sm={4} md={4}>
                
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                  <Box sx={{ boxShadow: 10 }}>
                    <MyCard>
                      <CardMedia  sx={{  borderRadius: 5}}
                        component="img"
                        height="200"
                        image={parking}
                        alt="green iguana"
                      />
                      <MyCardContent>
                        <Mytext gutterBottom component="div">
                          Smart Parking
                        </Mytext>
                        <Mypara color="text.secondary">
                          Smart Parking is a radar sensor device that allows the detection of parking availability indoors and outdoors.

                          Smart parking applications (cities, hospitals, public areas, malls, universities, sports centers)</Mypara>
                          <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                      </MyCardContent>
                     
                    </MyCard>
                    </Box>
                  </div>
                  
                  </Grid>
                  <Grid item  xs={12} sm={4} md={4}>
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                  <Box sx={{ boxShadow: 10 }}>
                    <MyCard >
                      <CardMedia  sx={{  borderRadius: 5}}
                        component="img"
                        height="200"
                        image={guest}
                        alt="green iguana"
                      />
                      <MyCardContent>
                        <Mytext gutterBottom component="div">
                          Geetron GRMS
                        </Mytext>
                        <Mypara color="text.secondary">
                          <p>Geetron GRMS offers  solutions that  work on Interactive technology that accomplish the seamless experience you want for your guest and provide easy management for the operators.</p>

                        </Mypara>
                        <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                      </MyCardContent>
                    
                    </MyCard>
                    </Box>
                  </div>
                </Grid>
              </Grid>
            </Box>

          </MyStack>

        </MyGrid>
      </Parallax>
    </ParallaxProvider>

  );
}

export default App;
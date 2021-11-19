import React from 'react'
import { styled } from '@mui/material/styles';
import Basic from '../Ghomes/images/basic.png'
import Standard from '../Ghomes/images/standard.png'
import Pro from '../Ghomes/images/pro.png'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Divider, Typography, Grid, Stack,Box  } from '@mui/material';
import { Parallax, ParallaxProvider} from 'react-scroll-parallax';

const MyGrid = styled(Grid)(({ theme }) => ({
 
  alignItems: "center",
  justifyContent: "center",



}));

const Header = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  


}));
const MyStack = styled(Stack)(({ theme }) => ({

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


const MyCard = styled(Typography)(({ theme }) => ({

 
   backgroundColor:'white ',
   [theme.breakpoints.down("md")]: {
    maxWidth:'600px',
    mimWidth:'600px',
   alignItems: "center",
   justifyContent: "center",

 
  },

}))

const App = () => {
  return (

  
        <MyGrid container>

          <MyStack spacing={2}>
            <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
              <Header textAlign="center">Models </Header>
            </div>
          
            <Box sx={{ flexGrow: 1 }}>
              <Grid container   justifyContent="center"  alignItems="center" spacing={5}>
                <Grid  item xs>
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
                    <MyCard >
                      <CardMedia
                        component="img"
                        height="200"
                        image={Basic}
                        alt="green iguana"  
                      />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                         LITE
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wifi Controlled/RF</li>
                            <li>Capacative Touch</li>
                            <li>Standard AC Thermostat (FCU)</li>
                          
                        </ul>
                        </Mypara>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </MyCard>
                  </div>
                  </Grid>
                  <Grid item xs>
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                    <MyCard>
                      <CardMedia
                        component="img"
                        height="200"
                        image={Standard}
                        
                        alt="green iguana"
                      />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                          Standard
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wifi Controlled/RF</li>
                            <li>Touch Screen</li>
                            <li>Standard AC Thermostat(FCU)</li>
                          
                        </ul>            
                        </Mypara>
                         </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </MyCard>
                  </div>
                  </Grid>
                  <Grid item xs>
                 
                  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                    <MyCard >
                      <CardMedia
                        component="img"
                        height="200"
                        image={Pro}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Mytext gutterBottom component="div">
                          Pro
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                            <li>Wired switch (Modbus)</li>
                            <li>Centralized Controller</li>
                            <li>Communicating thermostat</li>
                        </ul>     
                        </Mypara>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </MyCard>
                  </div>
                </Grid>
              </Grid>
            </Box>

          </MyStack>

        </MyGrid>
    

  );
}

export default App;
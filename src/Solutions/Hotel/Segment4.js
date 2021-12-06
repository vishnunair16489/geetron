import React from 'react'
import { styled } from '@mui/material/styles';
import Basic  from './images/standard.png';
import Standard from './images/basic.png';
import Pro from './images/gispro.png'
import Big from './images/bigimg.png'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  Divider, Typography, Grid, Stack,Box  } from '@mui/material';
import ReactImageMagnify from 'react-image-magnify';

const MyGrid = styled(Grid)(({ theme }) => ({
 
  alignItems: "center",
  justifyContent: "center",
}));

const Header = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  color: '#1268B3',
  textAlign: 'center',
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  margin:'50px 0px'
  


}));
const MyStack = styled(Stack)(({ theme }) => ({

  paddingLeft:'30px'

}));
const Mytext = styled(Typography)(({ theme }) => ({

  fontSize: '1.0em',
  textAlign: 'left',
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
   paddingLeft:'10px',
   [theme.breakpoints.down("md")]: {
 
   alignItems: "center",
   justifyContent: "center",

 
  },

}))
const MyCardmedia = styled(CardMedia)(({ theme }) => ({


  [theme.breakpoints.up("xs")]: {

      width:'300px',


 },
 [theme.breakpoints.up("md")]: {

  width:'300px',
 },


}))

const App = () => {
  return (

  <div>
        <MyGrid container spacing={0}>

          <MyStack spacing={0}>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-out-quart" >
              <Header textAlign="center">Models </Header>
            </div>
          
            <Box sx={{ flexGrow: 1 }}>
              <Grid container   justifyContent="center"  alignItems="flex-start" spacing={5}>
                <Grid  item xs={12} sm={6} md={4}>
                
                    <MyCard >
                    <Grid container   justifyContent="center"  alignItems="flex-start" spacing={5}>
                    <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" >
                    <MyCardmedia
                        component="img"
                        image={Basic}
                        
                        alt="green iguana"  
                      />
                      </div>
                      </Grid>
                      <CardContent>
                      <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" >
                        <Mytext gutterBottom component="div">
                         GRMS Lite
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                        <li>Do Not Disturb (DND)</li>
                            <li>Make-Up Room(MUR)</li>
                            <li>Calling Bell</li>
                            <li>Welcome Light</li>
                          
                        </ul>
                        </Mypara>
                        </div>
                      </CardContent>
                    
                    </MyCard>
               
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                 
               
                    <MyCard>
                    <Grid container   justifyContent="center"  alignItems="flex-start" spacing={5}> 
                      <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                    <MyCardmedia
                        component="img"
                        image={Standard}
                        alt="green iguana"  
                     
                      />
                      </div>
                   </Grid>
                      <CardContent>
                      <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
                        <Mytext gutterBottom component="div">
                          GRMS Standard
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                        <li>Do Not Disturb (DND)</li>
                        <li>Make-Up Room(MUR)</li>
                            <li>Calling Bell</li>
                            <li>Welcome Light </li>
                            <li>AC Controls</li>
                        </ul>            
                        </Mypara>
                        </div>
                         </CardContent>
                     
                    </MyCard>
 
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                 
                
                    <MyCard >
                    <Grid container   justifyContent="center"  alignItems="flex-start" spacing={5}>
                    <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                      <ReactImageMagnify     {...{
    smallImage: {
        alt: 'img',
        isFluidWidth: true,
        src: Pro,
      
    },
    largeImage: {
        src:Big,
        width: 1200,
        height: 1800,
     
    }
}} />
</div>
                      </Grid>
                      <CardContent>
                      <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="400" >
                        <Mytext gutterBottom component="div">
                         GRMS Pro 
                        </Mytext>
                        <Mypara color="text.secondary">
                        <ul>
                        <li>Do Not Disturb (DND)</li>
                        <li>Make-Up Room(MUR)</li>
                            <li>Calling Bell</li>
                           <li> Welcome Light .</li>
                           <li>AC Controls</li>
                           <li>Lock (Server/Card)</li>
                           <li>Alexa Integration</li>
                        </ul>     
                        </Mypara>
                        </div>
                      </CardContent>
                     
                    </MyCard> 
                </Grid>
              </Grid>
            </Box>

          </MyStack>

        </MyGrid>
        </div>

  );
}

export default App;
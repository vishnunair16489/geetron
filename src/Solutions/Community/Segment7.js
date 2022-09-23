import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/INFOGRAPHICSFORCOMMUNITY.png'
import { Divider, Typography, Grid, Stack,Box ,Hidden} from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
 
  [theme.breakpoints.up("xs")]: {
  
    height:'150px',
  }, 
  [theme.breakpoints.up("sm")]: {
   
   
    height:'300px',
  },
 

  
}));

const MyDivider = styled(Divider)(({ theme }) => ({

  
  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  margin: "50px 0px",
  fontFamily: 'SourceSansPro',
  fontWeight: 'bold',
  [theme.breakpoints.down("xs")]: {
  
    fontSize: '1.2em',
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    fontSize: '1.5em',
  },

}));


const Mypara = styled(Typography)(({ theme }) => ({

  textAlign:'justify',
  fontFamily: 'SourceSansPro',
  padding:'15px',
 

}))



const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="center">IoT Community Managment</MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
       
          
        <Hidden mdUp>
            
          <MypicGrid container xs={12} md={5}></MypicGrid>
          </Hidden>
     
      <MyGrid item xs={12} md={5}>
   
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
            <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart">
             

              
              <Mypara>With Geetron community management system you can be rest assured that all your community needs, that can be automated, can be maintained and developed by us.
                with our all in one solution your community can be totally automated with features like  
                </Mypara>
                </div>
                     <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
   
                <Mypara> 
                  <ul>
                  <li>Light Automation</li>
                    <li>Irrigation Automation</li> 
                    <li>Waste Bin Automation</li>
                    <li>Panic Alarm Automation</li>
                  </ul>
               </Mypara>
               </div>
                  </Grid>
               
                  </Grid>
              
            </Grid>
       
      
            </Grid>
            
            </Box>
      </MyGrid>
      
      <Hidden mdDown>
          <MypicGrid container xs={12} md={5}></MypicGrid>
          </Hidden>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Community/images/waste.jpg'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
  height:'300px',
 

  
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


  fontFamily: 'SourceSansPro',
  [theme.breakpoints.up("xs")]: {
  
    margin: "0px 10px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))



const App = () => {
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="center">Waste Management</MyDivider>
        </div>
        <MyGrid container spacing={2} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
      <div data-aos="fade-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
         
          </div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
            <div data-aos="zoom-in" data-aos-offset="" data-aos-easing="ease-out-quart" data-aos-delay="200" >
          
              
                <Mypara>Reducing the enivromental foot print and inproving the quality of life waste management is a vital part of community 
                <Grid container direction="row" spacing={0}>
                <Grid item  xs={12}  sm={6} md={6}>
                <p> <b>Features</b>
                  <ul>
                    <li>Automatic alert</li>
                    <li>Route Planner</li>
                    <li>REduces operation cosr</li>
                    <li>Solar powered</li>
                  </ul>
                  </p>
                  </Grid>
                  <Grid item  xs={12}  sm={6} md={6}>
                  <p>
                  <b>Benifits</b>
                  <ul>

                    <li>Improve enivromental care</li>
                    <li>Reduce traffic conjestion due to regular waste collection</li>
                    <li>Collection request on demand</li>
                    <li>Auto alert wihen bins are full</li>
                    <li>Delay the semi loasd and collect the full load </li>
                  </ul>
                  </p>
                  </Grid>
                  </Grid>
                </Mypara>
               
              
            </div>
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
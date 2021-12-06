import React from 'react'
import { styled } from '@mui/material/styles';
import segment2img from '../Industry/images/industry4.png'
import { Divider, Typography, Grid, Stack,Box } from '@mui/material';

import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start", 


}));

const MypicGrid = styled(Grid)(({ theme }) => ({

  backgroundImage: `url(${segment2img})`,
  backgroundSize:'cover',
 
 
  [theme.breakpoints.down("xs")]: {
  
    height:'200px',
  }, 
  [theme.breakpoints.down("md")]: {
   
   
    height:'200px',
  },
  [theme.breakpoints.up("md")]: {
   
   
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


  fontFamily: 'SourceSansPro',
  padding:'0px 15px',
  textAlign:'justify',
 
 

}))


const MyStackfirst = styled(Stack)(({ theme }) => ({

 
  maxWidth: '1980px',
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
  return (

  
      <Stack>
        <div data-aos="flip-left">
          <MyDivider textAlign="right">Industy 4.0 </MyDivider>
        </div>
        <MyGrid container spacing={0} >
      
      <MypicGrid container xs={12} md={4}></MypicGrid>
    
      <MyGrid item xs={12} md={6}>
     
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item  xs={12}  sm={12} md={12}>
         
              <MyStackfirst spacing={0}>
              
                <Mypara>
                <div data-aos="fade-right" data-aos-offset="" data-aos-easing="ease-out-quart" >
           <b> Challenges</b>
            <ul>
              <li>The challenges of every industry are to get collective information of getting quality data along with providing efficient and reliable data for manufacturing in industries like manufacturing and logistics</li>
              <li>Trustworthy and real-time data is required to improve techniques such as Lean Manufacturing, Six Sigma, TPM to be implemented</li>
              <li>Product traceability is one of the main concern</li>
              <li>Direct connection to the devices is needed to obtain the overall equipment efficiency</li>
              <li>Even after implementing of screens paper and manual introduction of data is still been practiced</li>
              <li>Due to lack of data collection from productive assets, predictive maintenance is still at a bare minimum</li>
              <li>The precision of the product manufacturing process is still unknown</li>

            </ul>
            </div>
                </Mypara>
              </MyStackfirst>
           
            </Grid>
       
      
            </Grid>
            </Box>
      </MyGrid>
      </MyGrid>
      </Stack>

 

  );
}

export default App;
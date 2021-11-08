import React from 'react';
import { styled } from '@mui/material/styles';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'

import { Button,  Typography,Grid,Stack,Box } from '@mui/material';

const MyGrid = styled(Grid)(({ theme }) => ({  
    marginTop: "28px",
      alignItems:"center",
     
      backgroundPosition:'center',
      height:'200px'
      
  }));
  const MyBox = styled(Grid)(({ theme }) => ({  
    marginTop: "28px",
      alignItems:"center",       
      backgroundPosition:'center',
      height:'200px',
      backgroundColor:"#EEEEEE"

      
  }));
  const MyStack = styled(Stack)(({ theme }) => ({           
    margin: "100px 0px 0px 0px",
    maxWidth:"1200px",
   
  }));
  const MyFooterblue = styled(Grid)(({ theme }) => ({  
   
      alignItems:"center",       
      backgroundPosition:'center',
      height:'10px',
      backgroundColor:"#1268B3"

      
  }));
  const Myfootergreen = styled(Grid)(({ theme }) => ({  
 
      alignItems:"center",       
      backgroundPosition:'center',
      height:'20px',
      backgroundColor:"#54D692"

      
  }));
const App = ()=>{
  return(  
      <MyGrid>
         
         
              
          <MyStack direction="row"  spacing={5}>
          <MyStack  spacing={5}>
                  <p>Home</p>
              </MyStack>
              <MyStack   spacing={5}>
              <p>About</p>
              </MyStack>
              <MyStack  spacing={5}>
              <p>Product</p>
              </MyStack>
              <MyStack   spacing={5}>
              <p>Solution</p>
              </MyStack>
              <MyStack   spacing={5}>
              <p>Services</p>
              </MyStack>
              </MyStack>
            
             
              <MyFooterblue></MyFooterblue>
              <Myfootergreen></Myfootergreen>
        
      </MyGrid>

);
}

export default App;
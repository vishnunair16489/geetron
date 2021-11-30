import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import { Typography,Grid,Stack ,Divider,TextField} from '@mui/material';

import Aos from 'aos';
import 'aos/dist/aos.css';
import MyButtoncustom from '../ModifiedComponents/Button'
const MyGrid = styled(Grid)(({ theme }) => ({  
      marginTop: "50px",
      justifyContent:"center",
        alignItems:"center"
    }));

    const Header = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.2em",
        fontSize:'1.2em',
        textAlign: 'center',
        maxWidth:'25em',
        color: '#1268B3',
     
        
      }));
      const MyDivider = styled(Divider)(({ theme }) => ({
       
        fontSize:'1.5em',
        minWidth:'10em',
        color: '#1268B3',
        textAlign:'center',
        marginTop: "50px",
        
      }));
      const Subtext = styled(Typography)(({ theme }) => ({
       
        paddingTop: "0.2em",
        fontSize:'1.0em',
        textAlign: 'left',
        maxWidth:'25em',
        color: 'black',
        
      }));
      const MyStack = styled(Stack)(({ theme }) => ({           
        marginTop: "10px",
        direction:"row",
        justifyContent:"flex-end",
        alignItems:"center",
      
      }));
    
      const PicGrid = styled(Grid)(({ theme }) => ({           
        marginTop: "10px",
      }));
   

      const App = ()=>{
        useEffect(()=>{
          Aos.init({duration:500});
      
        },[]);
  return(  
      <div >
             <MyDivider textAlign="left">Reach to Us </MyDivider>
        
    <MyGrid container spacing={0.5} >
    <Grid  item xs={12} md={6} >
    <MyStack  spacing={2}>
        <Header>Tell Us What You Need </Header>
        <Subtext>feel Freee to contact us and tell us</Subtext>
      
      </MyStack>
    </Grid>
     <PicGrid  container item xs={12} md={6}   >
    <Stack  direction="row" spacing={2}>
      
     <MyStack  spacing={2}>
        <TextField  sx={{ m: 1, width: '30ch'}}
          id="outlined-required"
          label="Full Name"
        />
         
         <TextField  sx={{ m: 1, width: '30ch' }}
          id="outlined-required"
          label="E-Mail"
        /></MyStack>
          <MyStack  spacing={2}>
         <TextField  sx={{ m: 1, width: '30ch' }}
          id="outlined-required"
          label="Phone Number"
        />
         <TextField  sx={{ m:0, width: '30ch' }}
          id="outlined-required"
          label="Country"
        />
        
         </MyStack>
       
         </Stack>
         <MyStack  spacing={3}    justifyContent="space-between"  alignItems="center">
         <TextField  sx={{ m: 1, width: '64ch' }}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={10}
        />
     
         </MyStack>
      
    </PicGrid>
      <MyStack  spacing={3}    justifyContent="flex-end"  alignItems="flex-end">
         <MyButtoncustom/>
         </MyStack>
  
  </MyGrid>
   </div>
);
}

export default App;
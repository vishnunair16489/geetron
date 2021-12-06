import React,{useEffect,useState} from 'react'
import { styled } from '@mui/material/styles';
import Googlemaps from './googleapi'
import Sub1 from '../Aboutus/images/marquee1.png'
import Sub2 from '../Aboutus/images/marquee2.png'
import Sub3 from '../Aboutus/images/marquee3.png'
import Sub4 from '../Aboutus/images/marquee4.png'

import firebase from "./Firebase";
import Marquee from "react-fast-marquee";
import { Divider, Button, Grid, Stack ,TextField} from '@mui/material';

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

 
  height:'400px',
  width:'400px',
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


const App = () => {

  const [name , setName] = useState();
  const [phone , setPhone] = useState();
  const [email , setEmail] = useState();
  const [country , setCountry] = useState();
  const [message , setMessage] = useState();
  const db = firebase.firestore();

    const Push = () => {
       db.collection('Contact').doc(email).set({
    name : name,
    phone : phone,
    email : email,
    country :country,
    message : message})

      
    }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (

      <div data-aos="fade-up">
      <MyGridMain container spacing={2} >
        <Stack>
          <div data-aos="flip-left">
        
          <MyDivider textAlign="center">About Us </MyDivider>
         
           
          </div>
          <MyGrid container spacing={2} >
  <MypicGrid>
     <Googlemaps/>
       
        </MypicGrid>
      
        <MyGrid item xs={12} md={8}>
      
        <Grid  container  xs={12} md={12}>
  
      
  <Grid direction='row' container spacing={2} >
   <Grid   item xs={12} md={6} >
      <TextField  sx={{ m:0 }}
        id="outlined-required"
        label="Full Name"
        value={name} 
        fullWidth
        onChange={(e) => setName(e.target.value)}
      />
       </Grid>
       <Grid   item xs={12} md={6} >
       <TextField  sx={{ m: 0}}
        id="outlined-required"
        label="E-Mail"
        fullWidth
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      </Grid></Grid>
      <Grid direction='row' container spacing={2} >
        <Grid   item xs={12} md={6} >
       <TextField  sx={{ m: 0,marginTop:'20px'}}
        id="outlined-required"
        fullWidth
        label="Phone Number"
        value={phone} 
        onChange={(e) => setPhone(e.target.value)}
      />
      </Grid>
      <Grid   item xs={12} md={6} >
       <TextField  sx={{ m:0,marginTop:'20px'}}
        id="outlined-required"
        label="Country"
        fullWidth
        value={country} 
        onChange={(e) => setCountry(e.target.value)}
      />
      </Grid>
       </Grid>
     
     
       <Grid direction='row' container spacing={0} >
       <Grid container  justifyContent="flex-start"  alignItems="flex-start"   item xs={12} md={12} >
       <TextField  sx={{ m:0,marginTop:'20px'}}
        id="outlined-multiline-static"
        label="Message"
        fullWidth
        multiline
        rows={10}
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
      />
   </Grid>
       </Grid>
    
  </Grid>
 
    <Button onClick={Push}>Send Message</Button>
   
      


           
          
          
          
        </MyGrid>
      
        </MyGrid>
      
       
        </Stack>
       
        <div data-aos="flip-left">
            <MyDivider textAlign="center">Our Partners</MyDivider>
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
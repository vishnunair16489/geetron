import React,{useEffect,useState} from 'react'
import { styled } from '@mui/material/styles';
import Googlemaps from './googleapi'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import {useNavigate} from 'react-router-dom';
import firebase from "./Firebase";
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
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const [open, setOpen] = React.useState(false);

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      navigate('/');
      return;
    }
    navigate('/');
    setOpen(false);
  };
  const [name , setName] = useState();
  const [phone , setPhone] = useState();
  const [email , setEmail] = useState();
  const [country , setCountry] = useState();
  const [message , setMessage] = useState();
  
  const navigate = useNavigate();
  const db = firebase.firestore();

    const Push = () => {
       db.collection('Contact').doc(email).set({
    name : name,
    phone : phone,
    email : email,
    country :country,
    message : message})
   
    setOpen(true);

      
    }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (

      <div data-aos="fade-up">
      <MyGridMain container spacing={2} >
        <Stack>
          <div data-aos="flip-left">
        
          <MyDivider textAlign="center">Contact  Us </MyDivider>
         
           
          </div>
          <MyGrid container spacing={2} >
  <MypicGrid item xs={12} md={4}>
     <Googlemaps/>
     
        </MypicGrid>
      
        <MyGrid item xs={12} md={4}>
      
        <Grid  container  xs={12} md={12}>
  
      
  <Grid direction='row' container spacing={2} >
   <Grid   item xs={12} md={6} >
      <TextField  sx={{ m:0 }}
        id="outlined-required"
        label="Full Name"
        value={name} 
        fullWidth
        size="small"
        onChange={(e) => setName(e.target.value)}
      />
       </Grid>
       <Grid   item xs={12} md={6} >
       <TextField  sx={{ m: 0}}
        id="outlined-required"
        label="E-Mail"
        fullWidth
        size="small"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      </Grid></Grid>
      <Grid direction='row' container spacing={2} >
        <Grid   item xs={12} md={6} >
       <TextField  sx={{ m: 0,marginTop:'20px'}}
        id="outlined-required"
        fullWidth

        size="small"
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
        size="small"
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
   
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
       Thanks for your mail. Will Get back Soon.
        </Alert>
      </Snackbar>
    
    
  


           
          
          
          
        </MyGrid>
      
        </MyGrid>
      
       
        </Stack>
    
          
      
      
  </MyGridMain>
  </div>
   
  
    );
  }
  
  export default App;
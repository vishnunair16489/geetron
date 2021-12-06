import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Grid, Stack, Divider ,Hidden} from '@mui/material';


import img from '../Homepage/images/dashboard.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
}));


const MyStack = styled(Stack)(({ theme }) => ({

  direction: "row",
  justifyContent: "center",
  alignItems: "center",
}));

const MyDivider = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  marginTop: "50px",
  fontFamily: 'SourceSansPro',

}));

const Mypara = styled(Typography)(({ theme }) => ({

    textAlign: 'justify',
  fontFamily: 'SourceSansPro',
  [theme.breakpoints.up("xs")]: {
  
    padding: "0px 20px",
  }, 
  [theme.breakpoints.up("md")]: {
   
   
    margin: "0px",
  },
  
 

}))


const PicGrid = styled(Grid)(({ theme }) => ({
  marginTop: "10px",
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
}));


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
    <div style={{ backgroundColor:'#ffffff'}}>
      <MyDivider textAlign="center">Geetron IoT DashBoard</MyDivider>

      <MyGrid container spacing={0} >

      <Grid item  xs={12} sm={12} md={4}>
     
      <Hidden mdUp>
           <PicGrid container item xs={12} md={6}   >
          <img src={img} alt='logo' width='400'/>
        </PicGrid>
         
       
          </Hidden>
        
          <MyStack spacing={5}>
          <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-back"  >
          
          <Mypara>
                <p> <b>Our Features:</b>
                  <ul>
                  <li>Design custom IoT dashboards</li>
                  <li>Manage user access and editing rights</li>
                  <li>Integrated advanced IoT analytics visualization, analytics rules, and smart alerts</li>
                  <li>Pre-configured IoT dashboard templates </li>
                  <li>Personalized dashboard by adjusting  the color scheme, adding your logo, and tweaking other UI elements</li>
                
                  
                  </ul>
                  </p>
                  </Mypara>    
              </div> 
            
          </MyStack>
        </Grid> 
        <Hidden mdDown>
           <PicGrid container item xs={12} md={6}   >
     
           <img src={img} alt='logo' width='500'/>
        </PicGrid>
         
       
          </Hidden>
      
           
      
      


      </MyGrid>
    </div>
  );
}

export default App;
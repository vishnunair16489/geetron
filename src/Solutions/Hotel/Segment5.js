import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Divider,  Grid, Stack,Box  } from '@mui/material';
import Home from '../Hotel/images/noimage.jpg'
import Switch from '../Hotel/Switch'
import RMS from '../Hotel/RMS'
import Relay from '../Hotel/Relay'
import Dimmer from '../Hotel/Dimmer'
import Sensor from '../Hotel/Sensor'
import Roomservice from '../Hotel/Roomservice'
import Curtains from '../Hotel/Curtains'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { RoomService, Thermostat } from '@mui/icons-material';

const MyGrid = styled(Grid)(({ theme }) => ({
 
   
    direction:"row",
    justifyContent:"center",
    alignItems:"center",
    marginTop:'50px'
  
  
  }));

  
  const Header = styled(Divider)(({ theme }) => ({
  
    fontSize: '1.5em',
    minWidth: '10em',
    color: '#1268B3',
    textAlign: 'center',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    
  
  
  }));
 
  

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  const [value, setValue] = React.useState(0);

  const submenuswitch = () => {
    switch(value) {
      case 2:
        return    <React.Fragment>
           <Switch/>
        </React.Fragment>;
       case 3:
        return    <React.Fragment>
             <RMS/>
        </React.Fragment>;
          case 4:
            return    <React.Fragment>
                <Relay/>
            </React.Fragment>;
             case 5:
              return    <React.Fragment>
                <Dimmer/>
              </React.Fragment>;
                 case 6:
                  return    <React.Fragment>
                     <Sensor/>
                  </React.Fragment>;
                    case 7:
                      return    <React.Fragment>
                          <Curtains/>
                      </React.Fragment>;
                          case 8:
                            return    <React.Fragment>
                              <Thermostat/>
                            </React.Fragment>;
                          
                        case 9:
                          return    <React.Fragment>
                            <Roomservice/>
                          </React.Fragment>;
                        
                    
                
           default:
            return '';
        };
      }
   
            
            
           
              
     
  return (
    <div>
    <div data-aos="flip-left" data-aos-easing="ease-out-quart" >
    <Header textAlign="center">Packages </Header>
  </div>
    <Grid  container   spacing={2}>

    
     
        <MyGrid container spacing={2}>
        <div  onClick={() => setValue(2)} data-aos="fade-in"  data-aos-easing="ease-in-quart" data-aos-delay="200" >
         
            <Grid item   xs={12}  sm={6} md={4}>
           
             <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
           
          
          
            </Grid>
            </div>
            <div  onClick={() => setValue(3)} data-aos="fade-in"  data-aos-easing="ease-in-quart" data-aos-delay="400" >
            <Grid item   xs={12}  sm={6} md={4}>
           
            <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
          
           </Grid>
           </div>
              <div  onClick={() => setValue(4)} data-aos="fade-in"  data-aos-easing="ease-in-quart" data-aos-delay="600" >
       
           <Grid item   xs={12}  sm={6} md={4}>
            <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
           
         
           </Grid> 
           </div>  
            <div  onClick={() => setValue(5)} data-aos="fade-in"  data-aos-easing="ease-in-quart" data-aos-delay="800" >
        
           <Grid  item   xs={12}  sm={6} md={4}>
           <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
           
         
            </Grid> 
            
            </div>
        </MyGrid>
        
     
    
  
        <MyGrid container  >
        <div  onClick={() => setValue(6)} data-aos="fade-in"  data-aos-easing="ease-in-quart" data-aos-delay="200" >
          
            <Grid item   xs={12}  sm={6} md={6} >
           
            <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
           
          
            </Grid> 
            </div>
            <div   onClick={() => setValue(7)} data-aos="fade-in"  data-aos-easing="ease-in-quart" data-aos-delay="400" >
        
            <Grid item   xs={12}  sm={6} md={6} >
            <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
         
           </Grid>
           </div>
           <div  onClick={() => setValue(9)} data-aos="fade-in"  data-aos-easing="ease-in-quart" data-aos-delay="600" >
         
           <Grid item  xs={12}  sm={6} md={6} >
          <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
           
         
  
  
           </Grid>
            </div> 
             <div  onClick={() => setValue(9)} data-aos="fade-in"  data-aos-easing="ease-in-quart" data-aos-delay="800" >
         
           <Grid  item  xs={12}  sm={6} md={6} >
           <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
        
         
            </Grid> 
               </div>
        </MyGrid>
        
     
    {submenuswitch()}
  
  </Grid>
  </div>
  );
}

export default App;
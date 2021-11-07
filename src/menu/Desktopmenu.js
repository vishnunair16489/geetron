import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Logo from  '../menu/images/logo.png';


import { styled } from '@mui/material/styles';
function LinkTab(props) {
  return (
    <MyTab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
const MyTab= styled(Tab)(({ theme }) => ({           
       

  fontFamily:'SourceSansPro',
  fontWeight:'bold'
  
}))
export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
 
  };
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      {value}
         <Grid container spacing={2}>
         <Grid item xs={6}>
             <img src={Logo} alt="Logo" />
        </Grid>
        <Grid item xs={6}>
         
      <Tabs value={value} onChange={handleChange}  aria-label="nav tabs example">
      <LinkTab    onMouseEnter={() => setValue(0)}    onMouseLeave={() => setValue(index)} label="Home" href="/drafts" />
        <LinkTab  onMouseEnter={() => setValue(1)}  onMouseLeave={() => setValue(index)} label="About Us" href="/trash" />
        <LinkTab onMouseEnter={() =>  setValue(2)} onMouseLeave={() => setValue(index)} label="Product" href="/spam" />
        <LinkTab  onMouseEnter={() => setValue(3)} onMouseLeave={() => setValue(index)} label="Solution" href="/drafts" />
        <LinkTab  onMouseEnter={() => setValue(4)} onMouseLeave={() => setValue(index)} label="Services" href="/trash" />
        <LinkTab  onMouseEnter={() => setValue(5)}  onMouseLeave={() => setValue(index)}label="Contact us" href="/spam" />
     
      </Tabs>
        </Grid>
        </Grid>
    </Box>
  );
}

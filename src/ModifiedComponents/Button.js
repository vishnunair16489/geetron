import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';


import {useNavigate} from 'react-router-dom';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#1268B3',
  
  fontFamily: 'SourceSansPro',
  borderRadius: '20px',
  width:'150px',
  '&:hover': {
    backgroundColor:'white',
    color: '#1268B3',
  },
}));

export default function CustomizedButtons(props) {
    const navigate = useNavigate();
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained" onClick={()=> navigate(props.links)}>Know More</ColorButton>
    
    </Stack>
  );
}

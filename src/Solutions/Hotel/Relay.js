import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Home from '../Hotel/images/noimage.jpg'
import { Grid  } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const MyGrid = styled(Grid)(({ theme }) => ({
    justifyContent: "flex-start",
    alignItems: "center", 
  
  
  }));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);

 
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Relay
        </BootstrapDialogTitle>
        <DialogContent dividers>
       
                     <MyGrid  container   >
                     <Grid item xs={12}>
                     <img
                      
                      height="200"
                      src={Home}
                      alt="green iguana"  
                    />
                         </Grid>
                         <Grid item xs={12} sm={6}>
                    8 Channel Relay
                    <ul>
                 <li>Dynalite compatible</li>
                 <li>Modbus interface</li>
                 <li>** no relay</li>
                 <li>Easily replacable realy</li>
              
               </ul>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    2 channel Relay
                    <ul>
                 <li>Latching relay</li>
                 <li>20A **</li>
                 <li>Manual Override</li>
                 <li>***</li>
              
               </ul>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    7 cahnnel latch relay
                    <ul>
                 <li>Latching relay</li>
                 <li>20A **</li>
                 <li>Manual Override</li>
                 <li>***</li>
                 </ul>
                    </Grid>
                    </MyGrid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
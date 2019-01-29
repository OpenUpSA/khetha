import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import notificationExample from '../../assets/images/notification-example.png';


export default () => {
  const { 
    open,
    title,
    description,
    primary,
    progressOnboarding
  } = props;


  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          <img src={notificationExample} alt="" />
        </DialogContent>
        <DialogActions>
          <Button onClick={progressOnboarding} color="primary" autoFocus>
            {primary}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

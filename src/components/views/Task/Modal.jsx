import React from 'react';
import t from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Zoom from '@material-ui/core/Zoom';


import GradientButton from '../../global/GradientButton';
import { ModalButtonWrap, ActionsWrapper } from './styled';


const Modal = (props) => {
  const {
    open,
    closeAction,
    completeTask,
  } = props;

  return (
    <Dialog
      {...{ open }}
      fullWidth
      TransitionComponent={Zoom}
      onClose={closeAction}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle><strong>All questions answered!</strong></DialogTitle>
      <DialogContent>
        <DialogContentText>Do you want to submit this task as completed?</DialogContentText>
      </DialogContent>
      <ActionsWrapper>
        <ModalButtonWrap>
          <GradientButton
            fullWidth
            onButtonPress={closeAction}
            text="Continue Editing"
          />
        </ModalButtonWrap>
        <ModalButtonWrap>
          <GradientButton
            fullWidth
            primary
            resolve="long"
            onButtonPress={completeTask}
            text="Submit task"
          />
        </ModalButtonWrap>
      </ActionsWrapper>
    </Dialog>
  );
};


export default Modal;


Modal.propTypes = {
  children: t.node,
};


Modal.defaultProps = {
  children: null,
};

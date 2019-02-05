import React from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GradientButton from '../../components/GradientButton';
import pushImage from './prompt-example.png';


const ButtonWrapper = styled.div`
  padding: 25px;
`;

const Image = styled.img`
  width: 400px;
  height: 172px;
`;

const ImageWrapper = styled.div`
  height: 200px;
  align-items: center;
  justify-content: center;
  background: #9B9B9B;
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

const Modal = ({ complete, text }) => (
  <Dialog
    open
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{text.alert.title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {text.alert.description}
      </DialogContentText>
      <ImageWrapper>
        <Image src={pushImage} alt="" />
      </ImageWrapper>
    </DialogContent>
    <ButtonWrapper>
      <GradientButton text={text.alert.primary} full clickAction={complete} />
    </ButtonWrapper>
  </Dialog>
);


export default Modal;

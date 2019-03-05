import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';


const SubmitWrap = styled.div`
  padding-top: 20px;
`;


const Section = styled.div`
  padding-bottom: 40px;
`;


const BodyText = styled(Typography)`
  && {
    color: #666;
    padding-bottom: 20px;
  }
`;


const ModalButtonWrap = styled.div`
  padding: 5px 20px;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: auto;
    padding: 0 5px;
  }
`;


const ActionsWrapper = styled(DialogActions)`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

const FilterWrapper = styled.div`
  margin-bottom: 16px;
`;


const SubmitWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;


export {
  SubmitWrap,
  Section,
  BodyText,
  ModalButtonWrap,
  ActionsWrapper,
  SubmitWrapper,
  FilterWrapper,
};

export default {
  SubmitWrap,
  Section,
  BodyText,
  ModalButtonWrap,
  ActionsWrapper,
  SubmitWrapper,
  FilterWrapper,
};

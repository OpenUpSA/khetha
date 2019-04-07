import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { primary } from '../../../../helpers/design/colors';


const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const ButtonWrap = styled.div`
  padding: 0 20px 20px 0;
`;


const NextWrapper = styled.div`
  margin-top: 20px;
`;


const PromptText = styled(Typography)`
  && {
    margin-top: 20px;
    color: ${primary};
  }
`;


const StyledCheckbox = styled(Checkbox)`
  &&&.icon {
    color: ${primary};
  }
`;


export {
  FlexWrap,
  ButtonWrap,
  NextWrapper,
  StyledCheckbox,
  PromptText,
};

export default {
  FlexWrap,
  ButtonWrap,
  NextWrapper,
  StyledCheckbox,
  PromptText,
};

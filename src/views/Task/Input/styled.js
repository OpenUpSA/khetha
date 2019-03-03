import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import { primary } from '../../../tokens/colors';


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
};

export default {
  FlexWrap,
  ButtonWrap,
  NextWrapper,
  StyledCheckbox,
};

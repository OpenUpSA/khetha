import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { darken } from 'polished';


import removeProps from '../../../helpers/functions/removeProps';
import { primaryGradient, primary } from '../../../helpers/design/colors';
import Icon from '../Icon';


const primaryButton = `
  color: white;
  border-color: transparent;
  background: ${primaryGradient};
`;


const secondaryButton = `
  color: ${primary};
  border-color: ${primary};
  background: white;
`;


const activeStyles = `
  color: white;
  background: ${primary};
  border-color: ${primary};

  &:hover {
    background: ${darken(0.2, primary)};
  }
`;


const StyledButton = styled(Button)`
  && {
    ${({ variant }) => (variant === 'contained' ? primaryButton : secondaryButton)}
    ${({ active }) => (active ? activeStyles : '')}
    min-height: 44px;
  }
`;


const SanitisedProgress = removeProps({ component: CircularProgress, blacklist: 'fill' });


const CustomProg = styled(SanitisedProgress)`
  && {
    color: ${({ fill }) => (fill ? 'white' : '#0B5FFF')};
    position: absolute;
  }
`;


const ContentWrap = styled.div`
  font-weight: bold;
  opacity: ${({ invisible }) => (invisible ? 0 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
`;


const StyledIcon = styled(Icon)`
  margin-left: 10px;
  position: relative;
  left: 10px;
  bottom: 2px;
  flex-grow: 1,
`;


export {
  StyledButton,
  ContentWrap,
  StyledIcon,
  CustomProg,
};


export default {
  StyledButton,
  ContentWrap,
  StyledIcon,
  CustomProg,
};

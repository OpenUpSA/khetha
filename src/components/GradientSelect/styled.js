import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import { primaryGradient, primary } from '../../tokens/colors';
import { dp8 } from '../../tokens/shadows';


const StyledItem = styled(MenuItem)`
  && {
    color: ${({ disabled }) => (disabled ? '#CCC' : 'black')};
  }
`;


const StyledSelect = styled(Select)`
&& {
  background: ${({ variant }) => (variant === 'filled' ? primaryGradient : 'none')};
  border: ${({ variant }) => (variant === 'filled' ? 'none' : `1px solid ${primary}`)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: 42px;
  border-radius: 4px;
  color: ${({ variant }) => (variant === 'filled' ? 'white' : '#0B5FFF')};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  box-shadow: ${({ variant }) => (variant === 'filled' ? dp8 : 'none')};

  & .icon {
    fill: ${({ variant }) => (variant === 'filled' ? 'white' : '#0B5FFF')};
    margin-right: 10px;
  }

  & .selectMenu {
    padding: 13px 50px 11px 23px;
  }

  &&:before {
    border-width: 0
  }

  &:hover {
    &&:before {
      border-width: 0
    }
  }
  
}
`;


const ForceNormalWeight = styled.span`
  && {
    font-weight: 400;
  }
`;


export {
  StyledItem,
  StyledSelect,
  ForceNormalWeight,
};


export default {
  StyledItem,
  StyledSelect,
  ForceNormalWeight,
};

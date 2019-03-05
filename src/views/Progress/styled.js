import styled from 'styled-components';
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
} from '@material-ui/core';

const HeaderProgress = styled(LinearProgress)`
  && {
    background: #f5f5f5;
    border: 0;
    color: white;
    height: 4px;
  }

  & .barColor {
    background: ${({ progress }) => (progress >= 100 ? '#AFAFAF' : 'linear-gradient(177.9deg, #00F260 0%, #0575E6 83.33%), #0576E6;')};
  }
`;

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const CardWrapper = styled(Card)`
  && {
    box-shadow: ${({ progress }) => (progress >= 100 ? 'none' : '0px 2px 3px rgba(0, 0, 0, 0.24)')};
    border:  ${({ progress }) => (progress >= 100 ? '1px solid #A2A2A2' : 'none')};
    background: ${({ progress }) => (progress >= 100 ? 'none' : '#FFF')};
  }
`;

const CardContentStyled = styled(CardContent)`
  &&& {
    padding: 16px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProgressAndTitle = styled.div`
  padding-bottom: 22px;
`;

const ProgressWrapper = styled(Typography)`
  && {
    color: ${({ progress }) => (progress >= 100 ? '#AFAFAF' : '#0575E6')};
    font-size: 12px;
    line-height: 20px;
    font-weight: normal;
    padding-bottom: 6px;
  }
`;

const Title = styled(Typography)`
  && {
    font-weight: 700;
    line-height: 20px;
    font-size: 18px;
    color: ${({ progress }) => (progress >= 100 ? '#AFAFAF' : 'rgba(0, 0, 0, 0.87)')};
    text-transform: Capitalize;
  }
`;

export {
  HeaderProgress,
  Wrapper,
  CardWrapper,
  CardContentStyled,
  TextWrapper,
  ProgressAndTitle,
  ProgressWrapper,
  Title,
};


export default {
  HeaderProgress,
  Wrapper,
  CardWrapper,
  CardContentStyled,
  TextWrapper,
  ProgressAndTitle,
  ProgressWrapper,
  Title,
};

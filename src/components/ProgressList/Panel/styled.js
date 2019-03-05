import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


import Icon from '../../Icon';
import removeProps from '../../../helpers/removeProps';
import calcSubtitleColor from './calcSubtitleColor';
import { primary } from '../../../tokens/colors';


const SanitisedExpansionPanel = removeProps({ component: ExpansionPanel, blacklist: 'buttons' });


const Wrapper = styled(SanitisedExpansionPanel)`
  && {
    ${({ firstPanel }) => (firstPanel ? 'margin-top: 0' : '')};
    cursor: ${({ buttons }) => (buttons ? 'pointer' : 'default')};
    ${({ advance, open }) => ((advance && open) ? `border: 1px solid ${primary}` : '')};
  }
`;


const Title = styled(Typography)`
  && {
    font-weight: bold;
    word-break: break-word;
  }
`;


const SanitisedTypography = removeProps({
  component: Typography,
  blacklist: ['highlighted', 'error'],
});


const Subtitle = styled(SanitisedTypography)`
  && {
    color: ${({ highlighted, error }) => calcSubtitleColor(error, highlighted)};
  }
`;


const Details = styled(ExpansionPanelDetails)`
  && {
    padding-top: 20px;
    border-top: 1px solid #E0E0E0;
    flex-direction: column;
  }
`;


const Summary = styled(ExpansionPanelSummary)`
  && {
    padding-right: 35px;

    .content {
      align-items: center;
    }
  }
`;


const TitleWrapper = styled.div`
  && {
    display: block;
    width: 100%;
    flex-direction: column;
    padding: 4px 20px 8px 25px;
  }
`;


const OverlayWrap = styled.div`
  position: relative;
  display: inline-flex;
`;


const FloatingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Progress = styled(CircularProgress)`
  && {
    color: ${({ percentage }) => (percentage < 100 ? '#0575E6' : '#0575E6')};
  }
`;


const ProgressBackground = styled(CircularProgress)`
  && {
    color: #9e9e9e2e;
  }
`;


const Value = styled(Typography)`
  && {
    font-size: 12px;
    font-weight: bold;
    color: grey;
  }
`;


const Percentage = styled(Typography)`
  && {
    font-size: 10px;
    font-weight: bold;
    color: #0575E6;
  }
`;


const PositionIcon = styled(Icon)`
  position: relative;
  bottom: 2px;
`;


export {
  Wrapper,
  Summary,
  TitleWrapper,
  Title,
  Subtitle,
  Details,
  OverlayWrap,
  ProgressBackground,
  FloatingWrap,
  Progress,
  Value,
  Percentage,
  PositionIcon,
};


export default {
  Wrapper,
  Summary,
  TitleWrapper,
  Title,
  Subtitle,
  Details,
  OverlayWrap,
  ProgressBackground,
  FloatingWrap,
  Progress,
  Value,
  Percentage,
  PositionIcon,
};

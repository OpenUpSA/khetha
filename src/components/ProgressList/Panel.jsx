import React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import scrollIntoView from 'scroll-into-view';
import PercentageCircle from './PercentageCircle';
import removeProps from '../../helpers/removeProps';


const Title = styled(Typography)`
  && {
    font-weight: bold;
    word-break: break-word;
  }
`;


const calcSubtitleColor = (error, highlighted) => {
  if (error) {
    return 'red';
  }

  if (highlighted) {
    return '#0B5FFF';
  }

  return '#666';
};


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

const Wrapper = styled(ExpansionPanel)`
  && {
    cursor: pointer;
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


const calcPercentage = ({ progress, incremental }) => {
  if (!incremental && !!progress) {
    return 100;
  }

  if (!incremental && !progress) {
    return 0;
  }

  if (progress <= 0) {
    return 1;
  }

  if (progress > 100) {
    return 100;
  }

  return Math.floor(progress);
};


const Panel = (props) => {
  const {
    incremental,
    buttons,
    progress,
    title,
    summary,
    content,
    highlighted,
    open,
    toggleOpen,
    index,
    error,
    guided,
    next,
    changeFocus,
  } = props;


  const percentage = calcPercentage({ progress, incremental });
  const focus = (node) => {
    if (guided && node && open) {
      scrollIntoView(node);
      return node.focus && node.focus();
    }
  };

  const clickEvent = guided ? () => changeFocus(index) : toggleOpen;
//{Array.isArray(summary) ? summary.split(', ') : summary}



  return (
    <Wrapper expanded={open} onClick={buttons ? clickEvent : null}>
      <Summary
        onClick={!buttons ? clickEvent : null}
        expandIcon={<ExpandMoreIcon />}
        classes={{ content: 'content' }}
      >
        <PercentageCircle {...{ percentage, incremental, error }} index={index + 1} />
        <TitleWrapper>
          <Title>{title}</Title>
          <Subtitle {...{ highlighted, error }}>sadasd</Subtitle>
        </TitleWrapper>
      </Summary>
      <Details>
        {guided ? content({ next, focus }) : content}
      </Details>
    </Wrapper>
  );
};


export default Panel;

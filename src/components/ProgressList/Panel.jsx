import React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import t from 'prop-types';
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

const SanitisedExpansionPanel = removeProps({ component: ExpansionPanel, blacklist: 'buttons' });
const Wrapper = styled(SanitisedExpansionPanel)`
  && {
    cursor: ${({ buttons }) => (buttons ? 'pointer' : 'default')};
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
    content: Content,
    highlighted,
    open,
    toggleOpen,
    index,
    error,
    next,
    focusElement,
    guided,
    changeFocus,
  } = props;


  const percentage = calcPercentage({ progress, incremental });
  const clickEvent = guided ? () => changeFocus(index) : toggleOpen;


  return (
    <Wrapper expanded={open} onClick={buttons ? clickEvent : null} {...{ buttons }}>
      <Summary
        onClick={!buttons ? clickEvent : null}
        expandIcon={<ExpandMoreIcon />}
        classes={{ content: 'content' }}
      >
        <PercentageCircle {...{ percentage, incremental, error }} index={index + 1} />
        <TitleWrapper>
          <Title>{title}</Title>
          <Subtitle {...{ highlighted, error }}>
            {summary}
          </Subtitle>
        </TitleWrapper>
      </Summary>
      <Details>
        <Content {...{ next, focusElement }} />
      </Details>
    </Wrapper>
  );
};


export default Panel;


Panel.propTypes = {
  incremental: t.bool,
  buttons: t.bool,
  progress: t.oneOfType([t.number, t.bool]).isRequired,
  title: t.string.isRequired,
  summary: t.string,
  content: t.func.isRequired,
  highlighted: t.bool,
  open: t.bool,
  toggleOpen: t.func.isRequired,
  index: t.number.isRequired,
  error: t.bool,
  guided: t.bool,
  next: t.func,
  changeFocus: t.func,
  focusElement: t.shape({
    current: t.node,
  }).isRequired,
};


Panel.defaultProps = {
  changeFocus: null,
  incremental: false,
  buttons: false,
  highlighted: false,
  open: false,
  error: false,
  guided: null,
  next: null,
  summary: null,
};

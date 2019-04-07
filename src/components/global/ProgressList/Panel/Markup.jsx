import React from 'react';
import t from 'prop-types';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import calcPercentage from './calcPercentage';
import PercentageCircle from './PercentageCircle';
import {
  Wrapper,
  Summary,
  TitleWrapper,
  Title,
  Subtitle,
  Details,
} from './styled';


const resolveContent = ({ content, next }) => {
  if ({}.toString.call(content) === '[object Function]') {
    return content(next);
  }

  return <Typography>{content}</Typography>;
};


const Markup = (props) => {
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
    next,
    advance,
    changeFocus,
    focusElement,
    id,
  } = props;

  const percentage = calcPercentage({ progress, incremental });
  const clickEvent = advance ? () => changeFocus(index) : toggleOpen;

  const firstPanel = id === 0;

  const wrapperProps = {
    buttons,
    open,
    advance,
    firstPanel,
  };

  return (
    <Wrapper
      key={id}
      {...wrapperProps}
      expanded={open}
      onClick={buttons ? clickEvent : null}
    >
      <Summary
        onClick={clickEvent}
        expandIcon={<ExpandMoreIcon />}
        classes={{ content: 'content' }}
      >
        <PercentageCircle {...{ percentage, incremental, error }} index={id + 1} />
        <TitleWrapper>
          <Title>{title}</Title>
          <Subtitle {...{ highlighted, error }}>
            {summary}
          </Subtitle>
        </TitleWrapper>
      </Summary>
      <Details>
        <div ref={focusElement}>
          {resolveContent({ content, next })}
        </div>
      </Details>
    </Wrapper>
  );
};


export default Markup;


Markup.propTypes = {
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


Markup.defaultProps = {
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

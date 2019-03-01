import React, { Fragment } from 'react';
import t from 'prop-types';


import {
  StyledButton,
  ContentWrap,
  StyledIcon,
  CustomProg,
} from './styled';


const ActionWrapper = (props) => {
  const {
    clickAction,
    children,
    startLoading,
  } = props;

  const autoKillLoading = () => {
    startLoading(true);
    clickAction();
  };

  return (
    <span
      tabIndex="0"
      onClick={autoKillLoading}
      onKeyDown={autoKillLoading}
      role="button"
    >
      {children}
    </span>
  );
};


const createPrefix = string => (
  <Fragment>
    <span style={{ fontWeight: 400 }}>
      {`${string}:`}
    </span>
    <span>&nbsp;</span>
  </Fragment>
);


const Markup = (props) => {
  const {
    text,
    primary: filled,
    prefix,
    icon,
    click: clickAction,
    link,
    fullWidth: full,
    startLoading,
    loading,
    buttonRef,
  } = props;


  const variant = filled ? 'contained' : 'outlined';


  const createIcon = (type, fill) => (
    <StyledIcon
      {...{ type }}
      size="small"
      color={fill === 'contained' ? 'white' : 'blue'}
    />
  );


  const innerContent = (invisible, fill) => (
    <ContentWrap {...{ invisible }}>
      {prefix && createPrefix(prefix)}
      <span>{text}</span>
      {icon && createIcon(icon, fill)}
    </ContentWrap>
  );


  if (loading) {
    return (
      <StyledButton
        size="large"
        fullWidth={full}
        {...{ variant, buttonRef }}
      >
        {innerContent(true)}
        <CustomProg size={15} thickness={7} fill={filled} />
      </StyledButton>
    );
  }

  return (
    <ActionWrapper {...{ clickAction, link, startLoading }}>
      <StyledButton
        size="large"
        fullWidth={full}
        {...{ variant }}
      >
        {innerContent(false, variant)}
      </StyledButton>
    </ActionWrapper>
  );
};


export default Markup;


Markup.propTypes = {
  buttonRef: t.shape({
    current: t.node,
  }),
  clickAction: t.oneOfType([
    t.string,
    t.func,
  ]).isRequired,
  text: t.string,
  primary: t.bool,
  full: t.bool,
  prefix: t.string,
  icon: t.string,
  link: t.func,
  startLoading: t.func.isRequired,
  loading: t.bool,
};

Markup.defaultProps = {
  buttonRef: null,
  text: null,
  primary: false,
  prefix: null,
  icon: null,
  link: null,
  full: false,
  loading: false,
};


ActionWrapper.propTypes = {
  clickAction: t.oneOfType([
    t.string,
    t.func,
  ]).isRequired,
  children: t.node.isRequired,
  startLoading: t.func.isRequired,
};

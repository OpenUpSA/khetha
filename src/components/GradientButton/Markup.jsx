import React, { Fragment } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import calcIfExternalLink from '../../helpers/calcIfExternalLink';
import Icon from '../Icon';
import removeProps from '../../helpers/removeProps';


const gradientBg = 'linear-gradient(162.21deg, #00F260 0%, #0575E6 83.33%), red';

const StyledButton = styled(Button)`
  && {
    background: ${({ variant }) => (variant === 'contained' ? gradientBg : 'white')};
    color: ${({ variant }) => (variant === 'contained' ? 'white' : '#0B5FFF')};
    border-color: ${({ variant }) => (variant === 'contained' ? 'transparent' : '#0B5FFF')};
    min-height: 44px;
  }
`;


const NoUnderlinkNativeLink = styled.a`
  text-decoration: none;
`;


const ActionWrapper = (props) => {
  const {
    clickAction,
    children,
    link,
    startLoading,
  } = props;

  const autoKillLoading = () => {
    startLoading(true);
    clickAction();
  };

  const noKillLoading = () => startLoading(false);


  if (typeof clickAction === 'function') {
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
  }

  if (!link) {
    return (
      <NoUnderlinkNativeLink href={clickAction} onClick={noKillLoading}>
        {children}
      </NoUnderlinkNativeLink>
    );
  }

  if (calcIfExternalLink(clickAction)) {
    return (
      <NoUnderlinkNativeLink
        href={clickAction}
        target="_blank"
        rel="noopener noreferrer"
        onClick={noKillLoading}
      >
        {children}
      </NoUnderlinkNativeLink>
    );
  }

  const StyledLink = styled(link)`
    && {
      text-decoration: none;
    }
  `;

  return (
    <StyledLink to={clickAction} onClick={noKillLoading}>
      {children}
    </StyledLink>
  );
};


ActionWrapper.propTypes = {
  clickAction: t.oneOfType([
    t.string,
    t.func,
  ]).isRequired,
  children: t.node.isRequired,
  link: t.func,
  startLoading: t.func.isRequired,
};


ActionWrapper.defaultProps = {
  link: null,
};


const createPrefix = string => (
  <Fragment>
    <span style={{ fontWeight: 400 }}>
      {`${string}:`}
    </span>
    <span>&nbsp;</span>
  </Fragment>
);


const styleIcon = icon => styled(icon)`
  margin-left: 10px;
  position: relative;
  left: 10px;
  bottom: 2px;
  flex-grow: 1,
`;


const ContentWrap = styled.div`
  opacity: ${({ invisible }) => (invisible ? 0 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Markup = (props) => {
  const {
    text,
    filled,
    prefix,
    icon,
    clickAction,
    link,
    full,
    startLoading,
    loading,
    buttonRef,
  } = props;


  const variant = filled ? 'contained' : 'outlined';
  const StyledIcon = styleIcon(Icon);


  const SanitisedProgress = removeProps({ component: CircularProgress, blacklist: 'fill' });
  const CustomProg = styled(SanitisedProgress)`
    color: ${({ fill }) => (fill ? 'white' : '#0B5FFF')};
    position: absolute;
  `;


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
  filled: t.bool,
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
  filled: false,
  prefix: null,
  icon: null,
  link: null,
  full: false,
  loading: false,
};

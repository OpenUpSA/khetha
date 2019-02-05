import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
  clickAction: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.func,
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
  } = props;


  const variant = filled ? 'contained' : 'outlined';
  const StyledIcon = styleIcon(Icon);


  const SanitisedProgress = removeProps({ component: CircularProgress, blacklist: 'fill' });
  const CustomProg = styled(SanitisedProgress)`
    color: ${({ fill }) => (fill ? 'white' : '#0B5FFF')};
    position: absolute;
  `;


  const innerContent = invisible => (
    <ContentWrap {...{ invisible }}>
      {prefix && createPrefix(prefix)}
      <span>{text}</span>
      {icon && <StyledIcon type={icon} size="small" />}
    </ContentWrap>
  );


  if (loading) {
    return (
      <StyledButton
        size="large"
        fullWidth={full}
        {...{ variant }}
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
        {innerContent(false)}
      </StyledButton>
    </ActionWrapper>
  );
};


export default Markup;


Markup.propTypes = {
  /** If function is passed it will be called when button is clicked,
   * if string is passed url will be hotloaded via AJAX when button is
   * clicked. However if string links to an external domain a url will
   * be opened in new tab when button is clicked */
  clickAction: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  /** The text to display in the button */
  text: PropTypes.string,
  /** Whether the background should have
   * the branded gradient backgrounds */
  filled: PropTypes.bool,
  /** Whether the button should span the entirity (100%)
   * of the width of it's parent. */
  full: PropTypes.bool,
  /** Whether button should have an additional
   * label prefixed to the text. Useful if you
   * want to communicate state */
  prefix: PropTypes.string,
  /** A icon that should be used on the right side
   * of the button. Preferably an icon imported
   * from `@material-ui/icons` */
  icon: PropTypes.string,
  /** You need to pass a component that handles routing
   * and history state for page transitions in your React app.
   * In our case we need to pass `Link` from `import { Link } from 'gatsby'. */
  link: PropTypes.func,
};

Markup.defaultProps = {
  text: null,
  filled: false,
  prefix: null,
  icon: null,
  link: null,
  full: false,
};

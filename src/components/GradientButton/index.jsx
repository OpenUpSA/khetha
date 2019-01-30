import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import calcIfExternalLink from '../../helpers/calcIfExternalLink';


const gradientBg = 'linear-gradient(162.21deg, #00F260 0%, #0575E6 83.33%), red';


const StyledButton = styled(Button)`
  && {
    background: ${({ variant }) => (variant === 'contained' ? gradientBg : 'none')};
    width: ${({ full }) => (full ? '100%' : 'auto')};
    color: ${({ variant }) => (variant === 'contained' ? 'white' : '#0B5FFF')};
    border-color: ${({ variant }) => (variant === 'contained' ? 'transparent' : '#0B5FFF')};
  }
`;


const IconWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const ActionWrapper = ({ clickAction, children, link }) => {
  if (typeof clickAction === 'function') {
    return (
      <span
        tabIndex="0"
        onClick={clickAction}
        onKeyDown={clickAction}
        role="button"
      >
        {children}
      </span>
    );
  }

  if (link && calcIfExternalLink(clickAction)) {
    return (
      <a
        href={clickAction}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  const Link = link;

  return (
    <Link to={clickAction}>
      {children}
    </Link>
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
  max-height: 20px;
  margin-left: 10px;
  position: relative;
  left: 10px;
`;


const GradientButton = (props) => {
  const {
    text,
    filled,
    prefix,
    icon,
    clickAction,
    link,
    full,
  } = props;

  const variant = filled ? 'contained' : 'outlined';
  const Icon = icon ? styleIcon(icon) : null;

  return (
    <ActionWrapper {...{ clickAction, link }}>
      <StyledButton
        size="large"
        {...{ variant, full }}
      >
        {prefix && createPrefix(prefix)}
        <span>{text}</span>
        {icon && <IconWrapper><Icon /></IconWrapper>}
      </StyledButton>
    </ActionWrapper>
  );
};


const createComponentWithLink = link => (props) => {
  const passedProps = {
    ...props,
    link,
  };

  return <GradientButton {...passedProps} />;
};


export { createComponentWithLink };
export default GradientButton;


GradientButton.propTypes = {
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
  icon: PropTypes.func,
  /** You need to pass a component that handles routing
   * and history state for page transitions in your React app.
   * In our case we need to pass `Link` from `import { Link } from 'gatsby'. */
  link: PropTypes.func,
};

GradientButton.defaultProps = {
  text: null,
  filled: false,
  prefix: null,
  icon: null,
  link: null,
  full: false,
};

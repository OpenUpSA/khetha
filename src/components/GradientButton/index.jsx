import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const gradientBg = 'linear-gradient(162.21deg, #00F260 0%, #0575E6 83.33%), red';


const StyledButton = styled(Button)`
  background: ${({ variant }) => (variant === 'filled' ? gradientBg : 'none')};
  width: 100%;
  `;

// const StyledButton = styled(Button)`
//   background: ${({ variant }) => (variant === 'filled' ? gradientBg : 'none')};
// `;

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
  } = props;

  const variant = filled ? 'contained' : 'outlined';
  const Icon = icon ? styleIcon(icon) : null;

  return (
    <StyledButton
      size="large"
      color="primary"
      {...{ variant }}
    >
      {prefix && createPrefix(prefix)}
      <span>{text}</span>
      {icon && <Icon />}
    </StyledButton>
  );
};


export default GradientButton;


GradientButton.propTypes = {
  /** If function is passed it will be called when button is clicked,
   * if string is passed url will be hotloaded via AJAX when button is
   * clicked. However if string links to an external domain a url will
   * be opened in new tab when button is clicked */
  clickAction: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  /** The text to display in the button */
  text: PropTypes.string,
  /** Whether the background should have
   * the branded gradient backgrounds */
  filled: PropTypes.bool,
  /** Whether button should have an additional
   * label prefixed to the text. Useful if you
   * want to communicate state */
  prefix: PropTypes.string,
  /** A icon that should be used on the right side
   * of the button. Preferably an icon imported
   * from `@material-ui/icons` */
  icon: PropTypes.func,
};

GradientButton.defaultProps = {
  text: null,
  filled: false,
  prefix: null,
  icon: null,
};

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
    onButtonPress: clickAction,
    link,
    fullWidth: full,
    startLoading,
    loading,
    buttonRef,
    active,
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
        {...{ variant, buttonRef, active }}
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
        {...{ variant, active }}
      >
        {innerContent(false, variant)}
      </StyledButton>
    </ActionWrapper>
  );
};


export default Markup;


Markup.propTypes = {
  /** Accepts a React ref created via 'React.createRef' to link the underlying HTML
   * node to a React state */
  buttonRef: t.shape({
    current: t.node,
  }),
  /** If function is passed it will be called when button is clicked,
   * if string is passed url will be hotloaded via AJAX when button is
   * clicked. However if string links to an external domain a url will
   * be opened in new tab when button is clicked */
  clickAction: t.oneOfType([
    t.string,
    t.func,
  ]).isRequired,
  /** The text to display in the button */
  text: t.string,
  primary: t.bool,
  /** Whether the button should span the entirity (100%)
   * of the width of it's parent. */
  full: t.bool,
  prefix: t.string,
  /** An icon that should be used on the right side
   * of the button. Preferably an icon imported
   * from `@material-ui/icons` */
  icon: t.string,
  /** You need to pass a component that handles routing
   * and history state for page transitions in your React app.
   * In our case we need to pass `Link` from `import { Link } from 'gatsby'. */
  link: t.func,
  startLoading: t.func.isRequired,
  loading: t.bool,
  active: t.bool,
  /** TODO: @schalk not sure if this should be included since they refer to other types */
  onButtonPress: t.func,
  fullWidth: t.bool,
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
  active: false,
};


ActionWrapper.propTypes = {
  clickAction: t.oneOfType([
    t.string,
    t.func,
  ]).isRequired,
  children: t.node.isRequired,
  startLoading: t.func.isRequired,
};

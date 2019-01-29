/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable react/forbid-prop-types */


import PropTypesLibrary, { checkPropTypes } from 'prop-types';


const propsCheck = (props) => {
  propsCheck({ check: propsCheck, props });
  const { check, props: innerProps } = props;
  return checkPropTypes(innerProps, check.propTypes, 'property', check.name);
};


propsCheck.propTypes = {
  check: PropTypesLibrary.func.isRequired,
  props: PropTypesLibrary.object.isRequired,
};


export const PropTypes = PropTypesLibrary;
export default propsCheck;

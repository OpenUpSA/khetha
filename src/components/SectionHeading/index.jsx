import React from 'react';
import t from 'prop-types';

import { Text, Wrapper } from './styled';


const SectionHeading = ({ text, id, gutter }) => (
  <Wrapper {...{ id, gutter }}>
    <Text>{text}</Text>
  </Wrapper>
);


export default SectionHeading;

SectionHeading.propTypes = {
  /** The text that should appear in the section heading */
  text: t.string,
  /** Id that is injected into the component to differentiate
   * between similar components on a page */
  id: t.number,
  /** Whether or not to include a gutter (bottom margin)
   * for this component */
  gutter: t.bool,
};

SectionHeading.defaultProps = {
  text: '',
  id: null,
  gutter: true,
};

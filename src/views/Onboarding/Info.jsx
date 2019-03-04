import React from 'react';
import t from 'prop-types';

import { InfoWrapper, Heading, InfoDescription } from './styled';


const Info = ({ title, description, children }) => (
  <InfoWrapper>
    <Heading gutterBottom component="h1">{title}</Heading>
    <InfoDescription component="p">{description}</InfoDescription>
    {children}
  </InfoWrapper>
);


export default Info;

Info.propTypes = {
  /** This title that will appear at the top of this view */
  title: t.string,
  /** The description associated with the view */
  description: t.string,
  /** React content nested inside this component. */
  children: t.node,
};

Info.defaultProps = {
  title: '',
  description: '',
  children: null,
};

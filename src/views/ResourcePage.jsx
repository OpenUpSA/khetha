import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import ResourceContent from './ResourceContent';
import Footer from '../components/Footer';

const Markup = (props) => (
  <Fragment>

    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    <Header back resource {...props}/>

    <ResourceContent {...props}/>

    <Footer />
  </Fragment>
);


export default Markup;

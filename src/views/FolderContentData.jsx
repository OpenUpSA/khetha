import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';


const Markup = (props) => (
  <Fragment>

    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    <Header start back />

    <Cards { ...props } />

    <Footer />

  </Fragment>
);


export default Markup;

import React, { Fragment } from 'react'
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Notice = styled.div`
  background-color: #e2e3e5;
  margin: 0px 10px 10px 10px;
  padding: 15px;
  border-radius: 4px;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  top: 50px;
  font-size: 16px;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: 10px auto;
  }
`;

const NotFoundLink = styled.a`
  text-decoration: none;
  color: ##337ab7;
  font-size: 16px;
`;

const NotFoundPage = () => (
  <Fragment>
    <Header storyList />
    <Notice>
      <p style={{margin: 0}}>
        Unfortunately we can’t find the page or resource you are looking for. Please go
        <NotFoundLink href="/english/folders/index.html"> back </NotFoundLink> and select another option.
      </p>
    </Notice>
    <Footer />
  </Fragment>
)

export default NotFoundPage






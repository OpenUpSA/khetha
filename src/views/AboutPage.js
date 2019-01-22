import React, { Fragment } from 'react'
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Button from '@material-ui/core/Button';

const AboutWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  top: 50px;
  font-size: 21px;
  padding: 0px 15px;
  overflow: scroll;
  height: calc(100vh - 100px);
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
    padding: 0;
  }
`;

const AboutButton = styled(Button)`
  width: 100%;
  && {
    margin-bottom: 5px;
    text-transform: none;
    background-color: #73c619;
    color: white;
    
    :hover {
      background-color: #8fd247;
    }
  }
`;

const AboutHead = styled.h2`
  font-size: 16px;
`;

const AboutText = styled.div`
  font-size: 14px;
`;

const AboutList = styled.ul`
  font-size: 14px;
`;

const AboutLogos = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const LogoImage = styled.img`
  margin: 5px;
  max-height: 100px;
  max-width: 30%;
`;

const AboutLink = styled.a`
  text-decoration: none;
  color: ##337ab7;
  font-size: 14px;
`;

function AboutPage(props) {
  const partners = props.partners;
  const contributors = props.contributors;

  return (
    <Fragment>

      <Header about/>

      <AboutWrapper>
        <p>{props.tagline}</p>

        <AboutButton variant="contained">
          Change language
        </AboutButton>

        <AboutButton variant="contained">
          Send us feedback
        </AboutButton>
        <AboutText dangerouslySetInnerHTML={{__html: props.html}} />

        <AboutLogos>
          {partners.map((partner, index) => (
            <LogoImage key={index} src={partner.logo} alt={partner.name}/>
          ))}
        </AboutLogos>

        <AboutButton variant="contained" href="https://pocketreporter.co.za" target="_blank">
          PocketReporter.co.za
        </AboutButton>

        <AboutHead>Contributors</AboutHead>
        <AboutList>
          {contributors.map((contributor, index) => (
            <li key={index}>
              <AboutLink href={contributor.link}>{contributor.name}</AboutLink>
            </li>
            ))}
        </AboutList>

      </AboutWrapper>

      <Footer/>
    </Fragment>
  )
};

export default AboutPage;
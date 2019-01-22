import React, { Fragment } from 'react'
import styled from 'styled-components';

import Header from '../components/Header';

import EmailIcon from '@material-ui/icons/Email';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

const StoriesWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  overflow: scroll;
  height: 90vh;
  position: relative;
  top: 60px;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
  }
`;

const StoriesAnnouncement = styled.div`
  background-color: #e2e3e5;
  margin: 0px 10px 10px 10px;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
`;

const StoriesLink = styled.a`
  text-decoration: none;
`;

const StoriesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StoriesItem = styled.li`

`;

const Stories = () => (
  <Fragment>
    <Header />

    <StoriesWrapper>
      <StoriesAnnouncement>
        <p>Pocket Reporter is a free tool, supported exclusively by donor funding.</p>
        <p>Please share stories that have been published via Pocket Reporter with us at <StoriesLink href="mailto:info@openup.org.za">info@openup.org.za</StoriesLink>.</p>
      </StoriesAnnouncement>

      <StoriesList>
        <StoriesItem>
          <Card>
            <CardHeader
              action={
                <IconButton>
                  <EmailIcon/>
                </IconButton>
              }
              title="Story title"
              subheader="Story type"
              subheader="Date and time"
            >
            </CardHeader>

          </Card>
        </StoriesItem>
      </StoriesList>

    </StoriesWrapper>
  </Fragment>
);

export default Stories;
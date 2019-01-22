import React, { Fragment } from 'react'
import styled from 'styled-components';

const ResourceWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  top: 50px;
  font-size: 16px;
  padding: 15px;
  overflow: scroll;
  height: calc(100vh - 100px);
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
    padding: 15px 0px;
  }
`;

const ResourceContent = (props) => (
  <Fragment>
    <ResourceWrapper>
      <div dangerouslySetInnerHTML={{__html: props.html}} />
    </ResourceWrapper>
  </Fragment>
);

export default ResourceContent;